import BlogPage from "~/sections/blog/page";
import type { Route } from "./+types/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - SV Green" },
    {
      name: "description",
      content: "Read our latest blog posts about waste management",
    },
  ];
}

export default function Blog() {
  return <BlogPage />;
}
