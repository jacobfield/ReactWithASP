import React, { useState, useEffect } from "react";
import { getChores } from "./Utils/getChores";
import updateChore from "./Utils/updateChore";
import removeChore from "./Utils/removeChore";
import AddChoreForm from "./AddChoreForm";
import ChoreList from "./ChoreList";

export default function Chores() {
  const [chores, setChores] = useState(null); // <-- initially null
  const [newChore, setNewChore] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);

  // Fetch all chores when the component mounts.
  useEffect(() => {
    async function retrieveChores() {
      try {
        const data = await getChores();
        setChores(data);
      } catch (error) {
        console.error("Error retrieving chores:", error);
      } finally {
        setLoading(false);
      }
    }
    retrieveChores();
  }, []);

  async function toggleComplete(chore) {
    try {
      const updatedChore = { ...chore, isCompleted: !chore.isCompleted };
      setChores((prevChores) =>
        prevChores.map((c) => (c.id === chore.id ? updatedChore : c))
      );
      const serverUpdatedChore = await updateChore(updatedChore);
      if (!serverUpdatedChore)
        throw new Error("Failed to update chore on server");
      setChores((prevChores) =>
        prevChores.map((c) => (c.id === chore.id ? serverUpdatedChore : c))
      );
    } catch (error) {
      console.error("Error updating chore:", error);
    }
  }

  return (
    <div className="choreContainer">
      <h1 className="title">To Do List</h1>
      <AddChoreForm
        newChore={newChore}
        setNewChore={setNewChore}
        chores={chores || []} // pass an empty array if chores is null
        setChores={setChores}
      />
      <ChoreList
        chores={chores}
        setChores={setChores}
        toggleComplete={toggleComplete}
        loading={loading}
      />
    </div>
  );
}
