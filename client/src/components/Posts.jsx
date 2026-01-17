// this could be a page itself, or a component you import into pages
// use map() to get all the data on the page
// TODO: render data from database

import { useState, useEffect } from "react";

export default function Posts() {
  // state for image url
  const [posts, setPosts] = useState([]);

  //   functions (event handlers)
  // I don't think I need these now because I just want all images to appear

  // effects - fetch data from API and put it in state
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch("http://localhost:8080/cat-posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }
    getPosts();
  }, []);

  return (
    <section className="cat-posts-page">
      <div className="cat-posts-wrapper">
        <h2 className="posts-title">Recent sightings</h2>
        <div className="cat-posts">
          {posts.map((post) => (
            <div className="cat-post" key={post.id}>
              <img
                src={post.src}
                // ! Make this unique
                alt="Cat sighting"
              />

              <div className="post-details">
                <h3>{post.username}</h3>
                <p>
                  <strong>Date: </strong> {post.date}
                </p>

                <p>
                  <strong>Location: </strong> {post.location}
                </p>

                <p>
                  <strong>Approachability: </strong>
                  {""}
                  {post.approach_score}/5
                </p>

                {post.comments && (
                  <p>
                    <strong>Comments: </strong> {post.comments}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
