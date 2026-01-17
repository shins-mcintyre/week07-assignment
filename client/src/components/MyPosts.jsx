// Here the user will see their own posts - db filtered by username
import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";

export default function MyPosts() {
  // state for image url
  const [myPosts, setMyPosts] = useState([]);
  // for filters
  const [filter, setFilter] = useState("recent");

  //   functions (event handlers)
  // I don't think I need these now because I just want all images to appear

  // effects - fetch data from API and put it in state
  useEffect(() => {
    async function getMyPosts() {
      try {
        const response = await fetch(
          "http://localhost:8080/cat-posts/user/shins-mc",
        );
        const data = await response.json();
        setMyPosts(data);
      } catch (error) {
        console.error("Failed to fetch my posts:", error);
      }
    }
    getMyPosts();
  }, []);

  // filters
  const filteredPosts = [...myPosts].sort((a, b) => {
    if (filter === "friendly") {
      return b.approach_score - a.approach_score;
    }
    // recent (default)
    return new Date(b.date) - new Date(a.date);
  });

  //   add delete function
  async function handleDelete(id) {
    try {
      const response = await fetch(
        `http://localhost:8080/delete-cat-post/${id}`,
        { method: "DELETE" },
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
    <section className="cat-posts-page">
      <div className="cat-posts-wrapper">
        <h2 className="posts-title">My posts</h2>

        {/* Filters */}
        <div className="post-filters">
          <button
            className={filter === "recent" ? "active" : ""}
            onClick={() => setFilter("recent")}
          >
            Recent
          </button>

          <button
            className={filter === "friendly" ? "active" : ""}
            onClick={() => setFilter("friendly")}
          >
            Friendliest
          </button>
        </div>

        <div className="cat-posts">
          {filteredPosts.map((myPost) => (
            <div className="cat-post" key={myPost.id}>
              <img
                src={myPost.src}
                // ! Make this unique
                alt="My cat sighting"
              />

              <div className="post-details">
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
              </div>

              {/* Insert delete button */}
              <DeleteButton onDelete={() => handleDelete(myPost.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
