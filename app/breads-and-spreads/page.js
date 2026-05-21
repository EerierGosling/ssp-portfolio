import ActivityPage from "@/app/components/ActivityPage";
import { getImages } from "@/app/lib/getImages";

export const metadata = {
  title: "Breads & Spreads",
};

export default function BreadsAndSpreadsPage() {
  return (
    <ActivityPage
      title="Breads & Spreads"
      subtitle="New Experience"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      images={getImages("breads-and-spreads")}
    />
  );
}
