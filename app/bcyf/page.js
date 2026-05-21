import ActivityPage from "@/app/components/ActivityPage";
import { getImages } from "@/app/lib/getImages";

export const metadata = {
  title: "BCYF Coding Club",
};

export default function BCYFPage() {
  return (
    <ActivityPage
      title="BCYF Coding Club"
      subtitle="Service Learning"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      images={getImages("bcyf")}
    />
  );
}
