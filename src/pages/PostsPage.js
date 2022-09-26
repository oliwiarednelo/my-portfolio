
import { useState, useEffect } from "react";
import PostItem from "../components/PostItem";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://wordpress.oliwiaolender.dk/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);
    return (
        <section className="page">
            <div className="all-projects">
                <div className="intro">
            <h1>Projects</h1>
            <p>Check out my latest work in frontend development and UX/UI design!</p>
            </div>
          <section className="grid-container">
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
        
            </section>
            </div>
        </section>
    );
}