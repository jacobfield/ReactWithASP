import removeChore from "./Utils/removeChore";

export default function DeleteChores({ chore, setChores, chores }) {
  // Delete a chore by id.

  async function deleteChore(id) {
    try {
      const deletedChore = await removeChore(id);
      setChores(chores.filter((chore) => chore.id !== id));
      return deletedChore;
    } catch (error) {
      console.error(`Error deleting chore ${id}:`, error);
    }
    document.window.location.reload();
  }
  return (
    <>
      <button
        className="deleteButton button"
        onClick={() => deleteChore(chore.id)}
      >
        Delete
      </button>
    </>
  );
}
