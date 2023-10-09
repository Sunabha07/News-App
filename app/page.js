// pages/Blog.js
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the chosen API
    axios
      .get('https://newsapi.org/v2/everything?q=apple&from=2023-10-01&to=2023-10-01&sortBy=popularity&apiKey=1cfb94e7d500441c95531486ed187296')
      .then((response) => {
        // Check if the API response contains an "articles" property that is an array
        if (response.data && Array.isArray(response.data.articles)) {
          // Display the first 5 articles
          setBlogPosts(response.data.articles.slice(0, 5));
          // console.log(response);
        } else {
          console.error('API response is not in the expected format:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {blogPosts.map((post, index) => (
          <li key={index} className="mb-8">
              {/* Use the Link component to create a "Read more" link */}
            <Link href={`/blog/${post.id}`} legacyBehavior>
              <a>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>   
                {/* Fetching blog Title */}
              </a>
            </Link>
            <p className="text-gray-600">Author: {post.author}</p>   {/* Fetching blog Author name */}
            
            <p className="text-gray-600">Publication Date: {post.publishedAt}</p>       {/* Fetching blog Publish Date */}
            

           
            <img src={post.urlToImage} alt={post.title} className="mt-4 w-full h-auto" />   {/* Fetching Image */}

            <p className="mt-4">Content : <a>{post.content}</a></p>   {/*Fetching Blog content  */}
            <Link href={`${post.url}`} legacyBehavior>
              <a className="text-blue-500 hover:underline" >Read more</a>
            </Link>


          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
