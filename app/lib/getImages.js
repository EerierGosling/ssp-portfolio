import fs from "fs";
import path from "path";

export function getImages(folder) {
  const dir = path.join(process.cwd(), "public", folder);
  const files = fs.readdirSync(dir);

  return files
    .filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
    .sort((a, b) => {
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);
      return numA - numB;
    })
    .map((f) => ({ src: `/${folder}/${f}` }));
}
