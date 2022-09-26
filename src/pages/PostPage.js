
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "./postpage.css";



export default function PostPage() {
    const [post, setPost] = useState({});
    const params = useParams();
    console.log(params);
    const slug = params.slug;

    useEffect(() => {
        async function getPost() {
            const url = `https://wordpress.oliwiaolender.dk/wp-json/wp/v2/posts?slug=${slug}&_embed`;
            const response = await fetch(url);
            const data = await response.json();
            setPost(data[0]);
        }
        getPost();
    }, [slug]);

   

    return (
        <>
        <section className="page">
            <section className="post-row">
                <article>
                    <h3>{post.h1 && parse(post.h1.rendered)}</h3>
                    <div className="post-content">
                    {post.content && parse(post.content.rendered)}
                    </div>
                </article>
                
            </section>
        </section>

        
        </>
    );
}