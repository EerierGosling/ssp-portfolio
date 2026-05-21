import ActivityPage from "@/app/components/ActivityPage";
import { getImages } from "@/app/lib/getImages";
import { content } from "@/app/lib/content";

export const metadata = { title: content["book-club"].title };

export default function BookClubPage() {
  const { title, subtitle, body } = content["book-club"];
  return <ActivityPage title={title} subtitle={subtitle} body={body} images={getImages("book-club")} />;
}
