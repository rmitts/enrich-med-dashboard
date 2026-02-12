"use client"

import * as React from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface MarkdownDocPageProps {
  title: string
  content: string
  breadcrumbs: { label: string; href?: string }[]
  lastUpdated?: string
}

export function MarkdownDocPage({
  title,
  content,
  breadcrumbs,
  lastUpdated,
}: MarkdownDocPageProps) {
  return (
    <div className="flex flex-col h-full">
      <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4 md:px-6">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={crumb.label}>
                {i > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {crumb.href ? (
                    <BreadcrumbLink asChild>
                      <Link href={crumb.href}>{crumb.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          {lastUpdated && (
            <p className="text-xs text-muted-foreground mb-4">
              Last updated: {lastUpdated}
            </p>
          )}
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Custom styling for markdown elements using design tokens
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-foreground mb-4 mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-xl font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-foreground leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-1 mb-4 text-foreground">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-1 mb-4 text-foreground">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-foreground">{children}</li>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-primary underline hover:text-primary/80"
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {children}
                  </a>
                ),
                code: ({ className, children }) => {
                  const isBlock = className?.includes("language-")
                  if (isBlock) {
                    return (
                      <code className="block bg-muted p-4 rounded-lg text-sm overflow-x-auto font-mono">
                        {children}
                      </code>
                    )
                  }
                  return (
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                      {children}
                    </code>
                  )
                },
                pre: ({ children }) => (
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                    {children}
                  </blockquote>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full border-collapse border border-border rounded-lg">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-muted">{children}</thead>
                ),
                th: ({ children }) => (
                  <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-border px-4 py-2 text-foreground">
                    {children}
                  </td>
                ),
                hr: () => <hr className="border-border my-8" />,
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">{children}</strong>
                ),
                input: ({ checked, disabled, ...props }) => (
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled
                    className="mr-2 accent-primary"
                    {...props}
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  )
}
