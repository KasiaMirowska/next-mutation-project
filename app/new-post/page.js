"use client";
import { useState } from "react";
import PostForm from "@/components/post-form";
import { createPost } from "@/actions/postActions"; // your server action

export default function NewPostPage() {
  const [formKey, setFormKey] = useState(0);

  return (
    <PostForm
      key={formKey}
      createPost={createPost}
      resetForm={() => setFormKey((prev) => prev + 1)}
    />
  );
}
