// Here the user will see their own posts - db filtered by username
import { useState, useEffect } from "react";

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

  return (
    <>
      <div className="my-cat-posts">
        {myPosts.map((myPost, index) => (
          <div className="my-cat-post" key={index}>
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

            {myPost.Comments && (
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
          </div>
        ))}
      </div>
    </>
  );
}
