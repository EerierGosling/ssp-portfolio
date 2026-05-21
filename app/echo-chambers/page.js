import ActivityPage from "@/app/components/ActivityPage";
import { getImages } from "@/app/lib/getImages";
import { content } from "@/app/lib/content";

export const metadata = { title: content["echo-chambers"].title };

export default function EchoChambersPage() {
  const { title, subtitle, body } = content["echo-chambers"];
  return <ActivityPage title={title} subtitle={subtitle} body={body} images={getImages("echo-chambers")} />;
}
