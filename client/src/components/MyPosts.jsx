// Here the user will see their own posts - db filtered by username
import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";

export default function MyPosts() {
  // state for image url
  const [myPosts, setMyPosts] = useState([]);

  //   functions (event handlers)
  // I don't think I need these now because I just want all images to appear

  // effects - fetch data from API and put it in state
  useEffect(() => {
    async function getMyPosts() {
      try {
        const response = await fetch(
          "http://localhost:8080/cat-posts/user/shins-mc"
        );
        const data = await response.json();
        setMyPosts(data);
      } catch (error) {
        console.error("Failed to fetch my posts:", error);
      }
    }
    getMyPosts();
  }, []);

  //   add delete function
  async function handleDelete(id) {
    try {
      const response = await fetch(
        `http://localhost:8080/delete-cat-post/${id}`,
        { method: "DELETE" }
      );
      // !check why this is included?
      if (!response.ok) {
        throw new Error("Delete failed");
      }

      // remove deleted post from state
      // ! this i had help from chat gpt - can't say i 100% understand the logic
      setMyPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error, "error deleting post");
    }
  }

  return (
    <>
      <div className="my-cat-posts">
        {myPosts.map((myPost) => (
          <div className="my-cat-post" key={myPost.id}>
            <h3>{myPost.username}</h3>
            <p>
              <strong>Date:</strong> {myPost.date}
            </p>

            <p>
              <strong>Location:</strong> {myPost.location}
            </p>

            <p>
              <strong>Approachability:</strong>
              {""}
              {myPost.approach_score}/5
            </p>

            {myPost.comments && (
              <p>
                <strong>Comments:</strong> {myPost.comments}
              </p>
            )}

            <img
              src={myPost.src}
              // ! Make this unique
              alt="My cat sighting"
              style={{ width: "300px" }}
            />

            {/* Insert delete button */}
            <DeleteButton onDelete={() => handleDelete(myPost.id)} />
          </div>
        ))}
      </div>
    </>
  );
}
