"use client";

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {
  onChange: (value: string) => void;
};

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [{ align: "center" }, { align: "right" }, { align: "justify" }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

function TextEditor({ onChange }: Props) {
  const handleChange = (content: string) => {
    onChange(content);
  };

  return (
    <ReactQuill
      theme="snow"
      onChange={handleChange}
      modules={modules}
      placeholder="Write something awesome..."
      style={{ color: "white" }}
    />
  );
}

export default TextEditor;
