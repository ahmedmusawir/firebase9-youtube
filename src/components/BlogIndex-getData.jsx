import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

export default function BlogIndex() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const ref = collection(db, "posts");
    // GET DOCS
    // getDocs(ref).then((snapshot) => {
    //   let results = [];
    //   snapshot.docs.forEach((doc) => {
    //     results.push({ id: doc.id, ...doc.data() });
    //   });
    //   setPosts(results);
    //   console.log("Firestore Data:", results);
    // });

    // GET REALTIME DATA
    let unsub;

    try {
      unsub = onSnapshot(ref, (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setPosts(results);
        console.log("Firestore Data:", results);
      });
    } catch (error) {
      console.log("Data read error in useRealtimeData hook:", error.message);
    }

    return () => unsub();
  }, []);

  return (
    <ul className="list-group mt-5">
      {posts &&
        posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
    </ul>
  );
}
