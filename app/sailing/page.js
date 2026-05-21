import ActivityPage from "@/app/components/ActivityPage";
import { getImages } from "@/app/lib/getImages";
import { content } from "@/app/lib/content";

export const metadata = { title: content.sailing.title };

export default function SailingPage() {
  const { title, subtitle, body } = content.sailing;
  return <ActivityPage title={title} subtitle={subtitle} body={body} images={getImages("sailing")} />;
}
