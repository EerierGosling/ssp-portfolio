import ActivityPage from "@/app/components/ActivityPage";
import { getImages } from "@/app/lib/getImages";
import { content } from "@/app/lib/content";

export const metadata = { title: content["1984"].title };

export default function BookPage() {
  const { title, subtitle, body } = content["1984"];
  return <ActivityPage title={title} subtitle={subtitle} body={body} images={getImages("1984")} />;
}
