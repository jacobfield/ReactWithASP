import DeleteChores from "./DeleteChores";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function ChoreList({
  chores,
  toggleComplete,
  setChores,
  loading,
}) {
  // Show spinner if still loading or chores haven't been set yet.
  if (loading || chores === null) {
    return (
      <div className="loadingSpinner">
        <ClimbingBoxLoader color="#7dbe2d" />
      </div>
    );
  }

  // If loading is done and no chores were returned.
  if (chores.length === 0) {
    return <p>No chores yet - add one to get started!</p>;
  }

  // Otherwise, render the chores list.
  return (
    <div className="allChores">
      <ul className="choreList">
        {chores.map((chore) => (
          <div
            className="listItemContainer"
            onClick={() => toggleComplete(chore)}
          >
            <li className="choreListItem" key={chore.id}>
              • &nbsp;
              <span
                style={{
                  textDecoration: chore.isCompleted ? "line-through" : "none",
                }}
              >
                {chore.title} {chore.description}
              </span>
            </li>
            <DeleteChores chore={chore} chores={chores} setChores={setChores} />
          </div>
        ))}
      </ul>
    </div>
  );
}
