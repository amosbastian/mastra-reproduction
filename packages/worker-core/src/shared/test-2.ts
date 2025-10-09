// Using external package
import { generatePresignedUrl } from "@acme/cloudflare";

export async function generatePresignedUrlInternal(url: string) {
  return generatePresignedUrl(url);
}
