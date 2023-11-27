"use client";

import axios from "axios";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// NOT USED CURRENTLY, REFACTORED TO INLINE USE IN ADDBLOGFORM COMPONENT

type Props = {
  onChange: (value: string) => void;
  value: string;
};

// TODO: React Quill Image Upload will be added...
const imageHandler = () => {
  const input = document.createElement("input");

  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
    let file: any = input.files != null && input.files[0];
    let formData = new FormData();
    formData.append("file", file);

    const responseImage = await axios.post("/api/s3-upload", formData);
    const imgUrl = responseImage.data.fileName;
    console.log(imgUrl);
  };
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
    ["link", "image", "video"],
    ["clean"],
  ],
};

function TextEditor({ onChange, value }: Props) {
  return (
    <ReactQuill
      theme="snow"
      style={{ color: "white" }}
      modules={modules}
      placeholder="Write something awesome..."
      value={value}
      onChange={onChange}
    />
  );
}

export default TextEditor;
