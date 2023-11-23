"use client";

import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  onImageChange: (image: any) => void;
};

const UploadImage = ({ className, onImageChange }: Props) => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImage = URL.createObjectURL(e.target.files[0]);
      setImage(newImage);
      onImageChange(e.target.files[0]);
    }
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setImage(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={cn(
        "mt-4 max-w-md bg-orange-500 rounded-lg shadow-md p-2 cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        ref={fileInputRef}
      />
      {image ? (
        <div className="relative">
          <img src={image} alt="Uploaded Image" className="w-full rounded-md" />
          <button
            onClick={handleDelete}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
          >
            <X />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl text-white dark:text-primary-foreground">
            Upload Cover Image
          </span>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
