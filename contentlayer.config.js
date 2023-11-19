import { defineDocumentType, makeSource} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath,
        },
    slugAsParams: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
        },
    structuredData: {
    type: 'object',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image
        ? `http://localhost:3000${doc.image}`
        : `http://localhost:3000/og?title=${doc.title}`,
      url: `http://localhost:3000/blog/${doc._raw.flattenedPath}`,
      author: {
        '@type': 'Person',
        name: 'Lee Robinson',
      },
    }),
  },
    }

    export const Blog = defineDocumentType(() => ({
        name: 'Blog',
        filePathPattern: `**/*.mdx`,
        contentType: 'mdx',
        fields: {
            title: {
                type: 'string',
                required: true,
              },
            publishedAt: {
                type: 'date',
                required: true,
              },
            summary: {
                type: 'string',
                required: true,
              },
            image: {
                type: 'string',
              },
            },
        computedFields,
    }))
    
    export default makeSource({
        contentDirPath: 'src/content',
        documentTypes: [Blog],
        mdx: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
                    rehypeSlug,
                    [
                        rehypePrettyCode,
                        {
                            theme: 'github-dark',
                            onVisitLine(node) {
                            
                                if (node.children.length === 0) {
                                    node.children = [{ type: 'text', value: ' ' }]
                                    }
                            },
                            onVisitHighlightedLine(node) {
                                node.properties.className.push('line--highlighted')
                            },
                            onVisitHighlightedWord(node) {
                                node.properties.className = ['word--highlighted']
                            },
                        }
                    ],
                    [
                        rehypeAutolinkHeadings,
                            {
                                properties: {
                                    className: ['subheading-anchor'],
                                    ariaLabel: 'Link to section',
                                },
                            },
                    ],
                ],
            }
    })
    