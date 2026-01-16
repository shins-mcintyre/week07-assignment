import Form from "./components/Form";
import Posts from "./components/Posts";
import MyPosts from "./components/MyPosts";

// TODO: set up a routing system and import relevant components
// advice: have a component for your root route too ("/")

export default function App() {
  return (
    <>
      <h1>Home</h1>
      {/* routing system */}
      <Form />
      <Posts />
      <MyPosts />
    </>
  );
}

// in components folder you have the minimum amount of components to make your app work, but it's recommended you make the most of the components system (props!!)

// not a requirement, but the users would like some conditional rendering to make the UI less cluttered...
