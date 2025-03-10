export default async function updateChore(chore) {
  try {
    const response = await fetch(
      `https://localhost:58274/api/chores/${chore.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(chore),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update chore");
    }

    return response.json(); // ✅ Ensure we return the updated chore
  } catch (error) {
    console.error("Error updating chore:", error);
    throw error; // Re-throw the error after logging it
  }
}
