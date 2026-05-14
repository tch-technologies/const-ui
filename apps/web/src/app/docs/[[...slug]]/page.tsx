import { notFound } from 'next/navigation'
import { getDocBySlug, getDocSlugs } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { MdxComponents } from '@/components/mdx-components'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import type { Options as PrettyCodeOptions } from 'rehype-pretty-code'

export async function generateStaticParams() {
  const slugs = getDocSlugs()
  return slugs.map((slug) => ({
    slug: slug.split('/'),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  const slugPath = slug ? slug.join('/') : 'index'
  const doc = getDocBySlug(slugPath)
  if (!doc) return {}
  return {
    title: `${doc.meta.title} | Const UI`,
    description: doc.meta.description ?? '',
  }
}

export default async function DocPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  const slugPath = slug ? slug.join('/') : 'index'
  const doc = getDocBySlug(slugPath)

  if (!doc) {
    notFound()
  }

  const prettyCodeOptions: PrettyCodeOptions = {
    theme: 'github-dark',
    keepBackground: false,
  }

  return (
    <article className="prose-content">
      {/* Page header */}
      <div
        style={{
          marginBottom: '2rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid hsl(var(--border))',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.2,
            margin: 0,
            marginBottom: '0.5rem',
          }}
        >
          {doc.meta.title}
        </h1>
        {doc.meta.description && (
          <p
            style={{
              margin: 0,
              color: 'hsl(var(--muted-foreground))',
              fontSize: '1rem',
              lineHeight: 1.7,
            }}
          >
            {doc.meta.description}
          </p>
        )}
      </div>

      {/* MDX body */}
      <MDXRemote
        source={doc.content}
        components={MdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
          },
        }}
      />
    </article>
  )
}
