import React from "react";
import Page from "../../components/layouts/Page";
import BlogIndex from "../../components/BlogIndex";

function HomePage() {
  return (
    <div className="container">
      <header className="mt-5">
        <h3 className="text-bibo-color">
          <i className="bi bi-fire"></i> Firebase 9 Starter
        </h3>
        <h5>Project Name: Firebase 9 </h5>
        <li>DB Name: Firebase 9 Start</li>
        <li>Collection: posts</li>
      </header>
      <section>
        <BlogIndex />
      </section>
    </div>
  );
}

export default HomePage;
