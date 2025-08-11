"use client";
import { useFormStatus } from "react-dom";

export default function FormSubmit({ onReset }) {
  const status = useFormStatus();

  if (status.pending) {
    return <h3>Saving the post...</h3>;
  }
  return (
    <>
      <button type="reset" onClick={() => onReset()}>
        Reset
      </button>
      <button>Create Post</button>
    </>
  );
}
