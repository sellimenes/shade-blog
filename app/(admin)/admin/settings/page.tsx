"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import UploadImage from "../../_components/UploadImage";
import { Button } from "@/components/ui/button";

type Props = {};

const SettingsPage = (props: Props) => {
  const [imageFile, setImageFile] = useState<any | undefined>(undefined);
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl">Settings -- NOT WORKING YET</h2>
        <p className="text-sm opacity-80">
          You can change your blog configurations here...
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="siteName">Site Name</label>
          <Input
            type="text"
            name="siteName"
            id="siteName"
            className="border border-gray-300 rounded px-3 py-2"
            onChange={(e) => console.log(e.target.value, "test")}
            placeholder="Shade Blog..."
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="siteDescription">Site Description</label>
          <Input
            type="text"
            name="siteDescription"
            id="siteDescription"
            className="border border-gray-300 rounded px-3 py-2"
            onChange={(e) => console.log(e.target.value)}
            placeholder="A great blog about technology, programming, and more..."
          />
        </div>
        <UploadImage
          title="Site Favicon (16x16)"
          onImageChange={setImageFile}
          className="max-w-max -mt-1 bg-primary"
        />
        <Button className="mt-4 max-w-max">Save</Button>
      </div>
    </div>
  );
};

export default SettingsPage;
