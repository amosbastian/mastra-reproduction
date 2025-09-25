import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = () => {
  return new S3Client({
    credentials: {
      accessKeyId: process.env["CLOUDFLARE_R2_ACCESS_KEY_ID"] as string,
      secretAccessKey: process.env["CLOUDFLARE_R2_SECRET_ACCESS_KEY"] as string,
    },
    endpoint: `https://${process.env["CLOUDFLARE_ACCOUNT_ID"]}.r2.cloudflarestorage.com`,
    region: "eeur",
  });
};

export async function generatePresignedUrl(key: string) {
  const S3 = s3Client();

  const url = await getSignedUrl(
    S3,
    new PutObjectCommand({ Bucket: process.env["CLOUDFLARE_BUCKET"] as string, Key: key }),
    {
      expiresIn: 3600,
    },
  );

  return url;
}
