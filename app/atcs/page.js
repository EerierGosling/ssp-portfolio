import ActivityPage from "@/app/components/ActivityPage";
import { getImages } from "@/app/lib/getImages";
import { content } from "@/app/lib/content";

export const metadata = { title: content.atcs.title };

export default function ATCSPage() {
  const { title, subtitle, body } = content.atcs;
  return <ActivityPage title={title} subtitle={subtitle} body={body} images={getImages("atcs")} />;
}
