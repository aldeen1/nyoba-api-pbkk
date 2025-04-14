import { useEffect, useRef, useState } from "react";

const BASE_URL = "https://binaryjazz.us/wp-json/genrenator/v1/story/";
  
export default function Demo() {
    const [Error,setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState("");
  
    useEffect(() => {
      const fetchPosts = async () => {
        setIsLoading(true)
        try {
          const response = await fetch(`${BASE_URL}`);
          const posts = (await response.json()) as string;
          console.log(posts);
          setPosts(posts);
        } catch (e: any) {
          setError(e);
        }
        setIsLoading(false);
      };
  
      fetchPosts();
    }, []);
 
    if (isLoading){
        return <div>Loading...</div>
    }

    if (Error) {
        console.error(Error)
        return <div>Something Error please try again</div>
    }
  
    return (
      <div className="tutorial">
        <h1 className="mb-4 text-2xl">Data Fetching in React</h1>
    
        <p>
            {posts}
        </p>
      </div>
    );
  }

  