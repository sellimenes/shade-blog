import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_IAM_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_IAM_SECRET_KEY,
  },
});

const getImageUrl = (bucketName, objectKey) => {
  const url = `https://${bucketName}.s3.${process.env.NEXT_PUBLIC_S3_REGION}.amazonaws.com/${objectKey}`;
  return url;
};

const uploadFileToS3 = async (file, fileName) => {
  const fileBuffer = file;

  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
    Key: `${fileName}`,
    Body: fileBuffer,
    ContentType: "image/*",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  const imageUrl = getImageUrl(process.env.NEXT_PUBLIC_S3_BUCKET, fileName);
  return imageUrl;
};

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadFileToS3(buffer, file.name);

    return NextResponse.json({ success: true, fileName });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
