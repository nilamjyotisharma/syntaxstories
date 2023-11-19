import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import Image from 'next/image';
import BaseLayout from '../../layout/BaseLayout';

export const metadata = {
  title : 'Blog',
}


export default function BlogPage() {
  return (
    <BaseLayout>
      <section className='my-16'>
      <h1 className="text-neutral-200 inline-flex text-xl md:text-xl font-bold mb-8 justify-center pl-1 pr-24 py-2 border-b-[1px] border-neutral-400">
        My Blogs
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 bg-[#2E3039] text-white p-4 rounded-xl duration-500 hover:scale-105"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-90 font-semibold dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
              <p className="text-neutral-500 text-xs mt-4 dark:text-neutral-400">
                {post.summary}
              </p>

            </div>
          </Link>
        ))}
    </section>

    </BaseLayout>
    
  );
}