import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best IELTS LIVE Batch in Bangladesh [2025] | LIVE IELTS Class",
  description:
    "IELTS পরীক্ষার সকল মডিউলের পূর্ণাঙ্গ ধারণা, প্রশ্নের ধরন, ভিন্ন ধরনের কঠিন কনসেপ্টের সমাধানের উপায় জানতে এবং সেরা প্রস্তুতি নিতে জয়েন করুন IELTS Live Batch-এ!",
  keywords: "IELTS LIVE Batch",
  authors: [
    { name: "Sabuj Islam", url: "https://sabuj0338.github.io/portfolio" },
  ],
  themeColor: "black",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "index, follow, nocache",
  // googlebot:
  //   "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
  category: "education",
  // canonical: "https://10minuteschool.com/product/ielts-live-batch/",
  alternates: {
    languages: {
      "en-US": "https://10minuteschool.com/en/product/ielts-live-batch/",
      "bn-BD": "https://10minuteschool.com/bn/product/ielts-live-batch/",
    },
  },
  openGraph: {
    title: "Best IELTS LIVE Batch",
    description:
      "IELTS এর সকল মডিউলের জন্য সেরা প্রস্তুতি নিশ্চিত করতে আজই জয়েন করুন আমাদের IELTS LIVE Batch-এ!",
    images: [
      {
        url: "https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "IELTS LIVE Batch 2024",
      },
    ],
    type: "video.other",
  },
  twitter: {
    card: "summary_large_image",
    site: "@10minuteschool",
    creator: "@10minuteschool",
    title: "Best IELTS LIVE Batch",
    description:
      "IELTS এর সকল মডিউলের জন্য সেরা প্রস্তুতি নিশ্চিত করতে আজই জয়েন করুন আমাদের IELTS LIVE Batch-এ!",
    images: [
      {
        url: "https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "IELTS LIVE Batch 2024",
      },
    ],
  },
  icons: {
    shortcut:
      "https://cdn.10minuteschool.com/image/icon-512x512_1702964557063.png",
    icon: "https://cdn.10minuteschool.com/image/icon-512x512_1702964557063.png",
    apple:
      "https://cdn.10minuteschool.com/image/icon-512x512_1702964557063.png",
  },
  appLinks: {
    ios: {
      url: "https://apps.apple.com/us/app/10-minute-school/id1577061772",
      // appStoreId: "id1577061774",
    },
    android: {
      package: "com.a10minuteschool.tenminuteschool",
      // appName: "10 Minute School: Learning App",
    },
    web: {
      url: "https://10minuteschool.com",
      // shouldFallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
