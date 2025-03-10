export default async function removeChore(id) {
  try {
    const response = await fetch(`/api/chores/${id}`, {
      method: "DELETE",
    });

    return await response.json();
  } catch (error) {
    console.error("Error deleting chore:", error);
    return null;
  }
}
