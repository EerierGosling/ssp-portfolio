import ActivityPage from "@/app/components/ActivityPage";
import { getImages } from "@/app/lib/getImages";
import { content } from "@/app/lib/content";

export const metadata = { title: content["breads-and-spreads"].title };

export default function BreadsAndSpreadsPage() {
  const { title, subtitle, body } = content["breads-and-spreads"];
  return <ActivityPage title={title} subtitle={subtitle} body={body} images={getImages("breads-and-spreads")} />;
}
