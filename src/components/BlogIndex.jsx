import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function BlogIndex() {
  const [posts, setPosts] = useState(null);

  const handleDelete = async (id) => {
    const ref = doc(db, "posts", id);
    try {
      await deleteDoc(ref);
    } catch (error) {
      console.log("Data delete error in Blogindex:", error.message);
    }
  };

  useEffect(() => {
    const ref = collection(db, "posts");
    // GET DOCS
    getDocs(ref).then((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setPosts(results);
      console.log("Firestore Data:", results);
    });
  }, []);

  return (
    <ul className="list-group mt-5">
      {posts &&
        posts.map((post) => (
          <li
            key={post.id}
            className="list-group-item d-flex justify-content-between"
          >
            {post.title}
            <button
              onClick={() => handleDelete(post.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
