import fs from "fs"
import path from "path"
import matter from "gray-matter"

export const CONTENT_PATH = path.join(process.cwd(), "content/docs")

export function getDocSlugs() {
  const getFiles = (dir: string): string[] => {
    let results: string[] = []
    const list = fs.readdirSync(dir)
    list.forEach((file) => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      if (stat && stat.isDirectory()) {
        results = results.concat(getFiles(filePath))
      } else if (file.endsWith(".mdx")) {
        results.push(filePath)
      }
    })
    return results
  }

  if (!fs.existsSync(CONTENT_PATH)) {
    return []
  }

  const files = getFiles(CONTENT_PATH)
  return files.map((file) => {
    const slug = file
      .replace(CONTENT_PATH, "")
      .replace(/\\/g, "/")
      .replace(/^\//, "")
      .replace(/\.mdx$/, "")
    return slug
  })
}

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = path.join(CONTENT_PATH, `${realSlug}.mdx`)

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug: realSlug,
      meta: data,
      content,
    }
  } catch (e) {
    return null
  }
}
