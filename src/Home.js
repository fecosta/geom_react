import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFecth from "./useFetch";

const Home = () => {
    const{data: blogs, isPending, error } = useFecth('https://fecosta.github.io/blogs');

    return (  
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All blogs posts" />}
        </div>

    );
}
 
export default Home;