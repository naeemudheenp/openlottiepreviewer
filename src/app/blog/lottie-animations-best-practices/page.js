import Link from "next/link";

export const metadata = {
  title: "Lottie Animations: Best Practices for Web — Open Lottie Previewer",
  description: "Tips and tricks for optimizing Lottie animations for better performance and user experience on the web.",
  keywords: ['Lottie animations', 'web animations', 'Lottie optimization', 'lottie-react', 'animation best practices'],
  openGraph: {
    title: "Lottie Animations: Best Practices for Web",
    description: "Tips for optimizing Lottie animations for better performance.",
    type: "article",
  },
};

export default function LottieBestPracticesArticle() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
        ← Back to Blog
      </Link>
      
      <article className="prose prose-gray max-w-none">
        <div className="text-sm text-gray-500 mb-4">March 5, 2024 · 6 min read</div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Lottie Animations: Best Practices for Web</h1>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Lottie has revolutionized how we use animations on the web. Instead of heavy GIFs or 
          complex CSS animations, we can now export lightweight JSON files from After Effects 
          that render beautifully across devices. But with great power comes the need for best practices.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Always Preview Before Shipping</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before adding a Lottie animation to your production site, preview it thoroughly. 
          Use tools like <Link href="/" className="text-blue-600 hover:underline">Open Lottie Previewer</Link> to 
          test your animations across different players (lottie-react, react-lottie-player) and 
          themes (light and dark mode).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          What looks great in After Effects might render differently in the browser. Catch these 
          issues early by previewing in the actual environment where your animation will live.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Optimize File Size</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lottie files are much smaller than GIFs, but they can still become bloated. Here&apos;s how to keep them lean:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Avoid too many keyframes — simplify your animations</li>
          <li>Use simple shapes instead of complex paths when possible</li>
          <li>Remove unused layers and assets</li>
          <li>Consider using LottieFiles&apos; optimization tools</li>
          <li>Aim for files under 50KB for hero animations</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Consider Loading Strategy</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Don&apos;t load all your animations upfront. Use lazy loading for below-the-fold animations 
          and consider loading animations only when they&apos;re about to enter the viewport.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
{`// Example: Lazy load Lottie component
const LottieAnimation = dynamic(
  () => import('lottie-react'),
  { ssr: false }
);`}
        </pre>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Test Both Light and Dark Modes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If your site supports dark mode, make sure your animations look good in both themes. 
          Some colors that work well on white backgrounds might be invisible on dark backgrounds.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Use <Link href="/" className="text-blue-600 hover:underline">Open Lottie Previewer</Link> to 
          quickly toggle between light and dark themes while reviewing your animations.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Respect User Preferences</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Some users prefer reduced motion. Always check for the <code className="bg-gray-100 px-1 rounded">prefers-reduced-motion</code> media 
          query and provide a static alternative:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
{`const prefersReducedMotion = 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Show static image instead of animation
if (prefersReducedMotion) {
  return <img src="/static-hero.png" alt="..." />;
}`}
        </pre>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Document Your Animations</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Keep notes about your animations — what they represent, when they trigger, and any 
          special considerations. This helps your team and future you understand the design decisions.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A simple journaling practice can help with this. Tools like <Link href="https://www.opennotepad.app?ref=openlottiepreviewer-lottie" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenNotepad</Link> are 
          great for keeping quick daily notes about your projects without the overhead of complex 
          documentation systems.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Tip</h3>
          <p className="text-gray-700 text-sm">
            Keep a running log of animation decisions and iterations. When a client asks 
            &quot;why did we choose this animation?&quot; months later, you&apos;ll have the answer. 
            <Link href="https://www.opennotepad.app?ref=openlottiepreviewer-lottie-tip" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">OpenNotepad</Link> makes 
            this easy with its calendar-based daily entries.
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Lottie animations can elevate your web projects when used thoughtfully. Preview your 
          animations thoroughly, optimize for performance, and always consider accessibility. 
          With these best practices, you&apos;ll create experiences that delight users without 
          sacrificing performance.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ready to preview your next animation? Try <Link href="/" className="text-blue-600 hover:underline">Open Lottie Previewer</Link> and 
          see how it looks across different players and themes.
        </p>
      </article>

      <div className="border-t border-gray-200 mt-12 pt-8">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to all articles
        </Link>
      </div>
    </main>
  );
}
