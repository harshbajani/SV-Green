import { motion } from "framer-motion";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Importance of Waste Management",
      excerpt:
        "Learn why effective waste management is crucial for environmental sustainability.",
      date: "January 15, 2024",
    },
    {
      title: "Circular Economy: The Future of Waste",
      excerpt:
        "Discover how circular economy principles are transforming waste management.",
      date: "February 1, 2024",
    },
    {
      title: "E-Waste: A Growing Concern",
      excerpt:
        "Understanding the challenges and solutions for electronic waste management.",
      date: "February 15, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news and insights about waste
            management
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 space-y-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ x: 5 }}
              className="rounded-lg bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
