export default async function addChore(newChore) {
  let response;
  try {
    response = await fetch("/api/chores", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newChore),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating chore:", error);
    return null;
  }
}
