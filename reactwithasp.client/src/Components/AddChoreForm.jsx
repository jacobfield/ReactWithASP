import addChore from "./Utils/addChore";
export default function AddChoreForm({
  newChore,
  setNewChore,
  chores,
  setChores,
}) {
  // Create a new chore.
  async function postChore(newChore) {
    const addedChore = await addChore(newChore);
    if (addedChore) {
      setChores([...chores, addedChore]);
    }
    setNewChore({ title: "", description: "" });
  }
  return (
    <>
      <div className="formContainer">
        <input
          className="inputForm"
          type="text"
          placeholder="Chore Title"
          value={newChore.title}
          onChange={(e) => setNewChore({ ...newChore, title: e.target.value })}
        />
        <input
          className="inputForm"
          type="text"
          placeholder="Chore Description"
          value={newChore.description}
          onChange={(e) =>
            setNewChore({ ...newChore, description: e.target.value })
          }
        />
        <button
          className="addButton button"
          onClick={() => postChore(newChore)}
        >
          Add Chore
        </button>
      </div>
    </>
  );
}
