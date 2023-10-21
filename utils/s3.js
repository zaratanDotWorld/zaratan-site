import { S3 } from "@aws-sdk/client-s3";

export async function getImages({ regex }) {
  const cdnRoot = "https://d3gacl6pm59h8m.cloudfront.net/"

  const s3 = new S3({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY
    }});

    const { Contents } = await s3.listObjects({ Bucket: "zaratan.world" });

    return Contents
      .filter(item => regex.test(item.Key))
      .map(item => `${cdnRoot}${item.Key}`);
}
