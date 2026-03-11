import Link from "next/link";

export const metadata = {
  title: "Blog — Open Lottie Previewer",
  description: "Articles about Lottie animations, design tools, productivity apps, and tips for designers and developers.",
  keywords: ['Lottie animations', 'design tools', 'productivity', 'journaling', 'developer tools'],
};

const blogPosts = [
  {
    slug: "daily-journaling-habit",
    title: "How to Build a Daily Journaling Habit That Sticks",
    excerpt: "Practical tips for building a consistent journaling habit, from choosing the right tool to making it part of your routine.",
    date: "March 15, 2024",
    readTime: "6 min read",
  },
  {
    slug: "journaling-without-signup",
    title: "Journaling Without Signup: Why Privacy Matters",
    excerpt: "Why no-signup journaling apps are better for privacy and how to start journaling without creating another account.",
    date: "March 14, 2024",
    readTime: "4 min read",
  },
  {
    slug: "simple-note-taking-apps-2024",
    title: "Simple Note Taking Apps in 2024: Less is More",
    excerpt: "Why minimalist note-taking apps are gaining popularity and how simplicity beats feature bloat for daily journaling.",
    date: "March 12, 2024",
    readTime: "5 min read",
  },
  {
    slug: "best-tools-for-designers-2024",
    title: "Best Tools for Designers in 2024",
    excerpt: "A curated list of essential tools every designer should have in their toolkit, from animation previewers to journaling apps.",
    date: "March 10, 2024",
    readTime: "5 min read",
  },
  {
    slug: "why-journaling-helps-creative-work",
    title: "Why Journaling Helps Your Creative Work",
    excerpt: "How keeping a daily journal can boost your creativity, reduce stress, and help you become a better designer.",
    date: "March 8, 2024",
    readTime: "4 min read",
  },
  {
    slug: "lottie-animations-best-practices",
    title: "Lottie Animations: Best Practices for Web",
    excerpt: "Tips and tricks for optimizing Lottie animations for better performance and user experience on the web.",
    date: "March 5, 2024",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
      <p className="text-gray-600 mb-8">
        Articles about design tools, animations, and productivity tips.
      </p>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
