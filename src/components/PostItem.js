import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

export default function PostItem({ post }) {
    const navigate = useNavigate();

    let image = "https://cederdorff.github.io/img/logo512.webp"; // fallback image

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (

        <article onClick={() => navigate(post.slug)}>
<div className="post-image">
            <img src={image} alt={post.title.rendered} />
          
            </div>
            <div className="post-title">
            <h2>{parse(post.title.rendered)}</h2>
            </div>
            
 
           
        </article>
    
    );
}