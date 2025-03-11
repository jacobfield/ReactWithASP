import addChore from "./Utils/addChore";
export default function AddChoreForm({
  newChore,
  setNewChore,
  chores,
  setChores,
}) {
  // Create a new chore.
  async function postChore(newChore) {
    if (!newChore.title || !newChore.description) {
      alert("Please fill in all fields");
      return;
    }
    const addedChore = await addChore(newChore);
    if (addedChore) {
      setChores([...chores, addedChore]);
    }
    setNewChore({ title: "", description: " " });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    postChore(newChore);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      postChore(newChore);
    }
  };

  return (
    <>
      <div className="formContainer" onKeyDown={handleKeyPress}>
        <input
          className="inputForm"
          type="text"
          placeholder="Title..."
          value={newChore.title}
          onChange={(e) => setNewChore({ ...newChore, title: e.target.value })}
        />
        {/* <input
          className="inputForm"
          type="text"
          placeholder="Description..."
          value={newChore.description}
          onChange={(e) =>
            setNewChore({ ...newChore, description: e.target.value })
          }
        /> */}
        <button
          className="addButton button"
          onClick={() => postChore(newChore)}
        >
          Add New
        </button>
      </div>
    </>
  );
}
