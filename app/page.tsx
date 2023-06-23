"use client";

import axios from "axios";
import AddPost from "./components/AddPost";
import Post from "./components/Post";
import { useQuery } from "@tanstack/react-query";

interface PostsType {
  title: string;
  id: string;
  createdAt?: string;
  comments?: {
    createdAt: string;
    id: string;
    postId: string;
    userId: string;
  }[];
  user: {
    name: string;
    image: string;
  };
}

//fetch all posts
const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery<PostsType[]>({
    queryFn: allPosts,
    queryKey: ["posts"],
  });

  if (error) return error;
  if (isLoading) return "Loading...";
  console.log(data);

  return (
    <main>
      <h1 className="text-lg py-4">hello</h1>
      <AddPost />
      {data?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          comments={post.comments || []}
        />
      ))}
    </main>
  );
}
