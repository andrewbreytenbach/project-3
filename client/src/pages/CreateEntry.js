// CreateEntry.js is a page that allows users to create a new entry in their diary.
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_LIST, CREATE_ENTRY } from "../utils/mutations";
import { gql } from "@apollo/client";

const EntryForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(0);
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState("");

  const [createList] = useMutation(CREATE_LIST);
  const [addEntry] = useMutation(CREATE_ENTRY);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        // Fetch lists using the appropriate API or backend endpoint
        const response = await fetch("/api/lists"); // Replace with your API endpoint URL
        const data = await response.json();
        setLists(data);
      } catch (error) {
        console.error("Error fetching lists:", error);
      }
    };

    fetchLists();
  }, []);

  const handleAddToFavorites = async () => {
    try {
      // Create a new entry
      const { data } = await addEntry({
        variables: {
          body,
          note: title, // Assuming the title is used as the note value
          rating,
        },
      });

      // Add the entry to the selected list
      const listId = selectedList; // Get the selected list ID
      await createList({
        variables: { title: listId },
        update(cache, { data }) {
          // Update the cache to include the new entry in the selected list
          cache.modify({
            id: cache.identify({ __typename: "List", list_id: listId }),
            fields: {
              entries(existingEntries = []) {
                const newEntryRef = cache.writeFragment({
                  data: data.addEntry,
                  fragment: gql`
                    fragment NewEntry on Entry {
                      entry_id
                      body
                      note
                      rating
                    }
                  `,
                });

                return [...existingEntries, newEntryRef];
              },
            },
          });
        },
      });

      console.log("Entry created:", data);
      // Reset form values
      setTitle("");
      setBody("");
      setRating(0);
      setSelectedList("");
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  return (
    <div>
      <h2>New Entry</h2>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value >= 1 && value <= 5) {
                setRating(value);
              }
            }}
          />
        </div>
        <div>
          <label htmlFor="list">Select List:</label>
          <select
            id="list"
            value={selectedList}
            onChange={(e) => setSelectedList(e.target.value)}
          >
            <option value="">Select a list</option>
            {lists.map((list) => (
              <option key={list.list_id} value={list.list_id}>
                {list.title}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={handleAddToFavorites}>
          Add to Favorites
        </button>
      </form>
    </div>
  );
};

export default EntryForm;
