import { variantApi } from "@/lib/api";
import dynamic from "next/dynamic";

const MainContent = dynamic(() => import("./components/main-content"));

// Example to fetch data statically or dynamically
// export async function generateMetadata({ params }: PageProps) {
export async function generateMetadata() {
  const variant = await variantApi();

  return {
    title: variant?.title,
  };
}

export default async function Home() {
  const variant = await variantApi();
  return <MainContent variant={variant} />;
}
