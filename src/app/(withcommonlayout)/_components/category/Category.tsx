import { headers } from "next/headers";
import Categories from "./Categories";

// This is the server-side rendered component in the app directory
export default async function Category() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  console.log("userAgent", userAgent);

  // Determine visible count based on user agent
  let initialVisibleCount = 6; //  small screens
  if (/Tablet|iPad/i.test(userAgent)) {
    initialVisibleCount = 8; // Medium screens
  } else if (!/Mobile/i.test(userAgent)) {
    initialVisibleCount = 9; // Large screens
  }

  // Pass the initialVisibleCount to the client component
  return <Categories initialVisibleCount={initialVisibleCount} />;
}
