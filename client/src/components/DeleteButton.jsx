// Create a button component that makes use of the DELETE route

// delete button with prop onDelete
export default function DeleteButton({ onDelete }) {
  return (
    <>
      <button onClick={onDelete}>Delete post</button>
    </>
  );
}
