export async function getChores() {
  let chores = [];
  try {
    const response = await fetch("/api/chores");
    const data = await response.json();
    chores = data;
  } catch (error) {
    console.error("Error fetching chores", error);
  }
  return chores;
}
