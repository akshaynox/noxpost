"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface AuthPosts {
  email: string;
  id: string;
  image: string;
  name: string;
  posts: {
    createdAt: string;
    id: string;
    title: string;
    comments?: {
      createdAt: string;
      id: string;
      postId: string;
      title: string;
      userId: string;
    }[];
  }[];
}

const fetchAuthPosts = async () => {
  const response = await axios.get("/api/posts/authPosts");
  return response.data;
};

export default function MyPosts(): JSX.Element {
  const { data, isLoading } = useQuery<AuthPosts>({
    queryFn: fetchAuthPosts,
    queryKey: ["auth-posts"],
  });
  if (isLoading) return <h1>Posts are loading...</h1>;
  if (data) console.log(data);
  return <div>Data</div>;
}