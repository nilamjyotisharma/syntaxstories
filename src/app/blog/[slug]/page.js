import { notFound } from 'next/navigation';
// import { Mdx } from 'app/components/mdx';
import { Mdx } from '../../components/mdx';
import { allBlogs } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import { Suspense } from 'react';
import BaseLayout from '../../../layout/BaseLayout';
import { FaCalendarDays } from "react-icons/fa6";

export const dynamic = 'force-static';


export async function generateMetadata({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }


  const {
    title,
    publishedAt: publishedTime,
    summary: summary,
    image,
    slug,
  } = post;
  // const ogImage = image
  //   ? `http://localhost:3000${image}`
  //   : `http://localhost:3000/og?title=${title}`;

  return {
    title,
    summary,
    openGraph: {
      title,
      summary,
      type: 'article',
      publishedTime,
      url: `http://localhost:3000/blog/${slug}`,
      images: [
        // {
        //   url: ogImage,
        // },
      ],
    },
  };
}

function formatDate(date) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}


export default function Blog({ params }) {
  const post = allBlogs.find((post) => {
    if(post.slug === params.slug){
      return post;
    }
  });

  if (!post) {
    notFound();
  }

  return (
    <BaseLayout>
    <div className='flex justify-center'>
    <section className='mx-4 my-16'>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      ></script>
      <h1 className="font-bold text-white text-3xl md:text-[3rem] my-4">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-400 flex gap-2 md:my-4">
        <FaCalendarDays className='text-lg' />
          {formatDate(post.publishedAt)}
        </p>
        {/* <Suspense fallback={<p className="h-5" />}>
          <Views slug={post.slug} />
        </Suspense> */}
      </div>
      <Mdx code={post.body.code} />
    </section>

    </div>
    </BaseLayout>
  );
}


