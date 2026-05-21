import ActivityPage from "@/app/components/ActivityPage";
import { getImages } from "@/app/lib/getImages";
import { content } from "@/app/lib/content";

export const metadata = { title: content.bcyf.title };

export default function BCYFPage() {
  const { title, subtitle, body } = content.bcyf;
  return <ActivityPage title={title} subtitle={subtitle} body={body} images={getImages("bcyf")} />;
}
