import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content", "designs");

export type DesignDoc = {
  slug: string;
  number: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  scale: string;
  content: string;
  headings: { id: string; label: string }[];
};

function headingId(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

function readDocument(filename: string): DesignDoc {
  const slug = filename.replace(/\.md$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(contentDirectory, filename), "utf8"));
  const headings = [...content.matchAll(/^##\s+(.+)$/gm)].map((match) => ({ label: match[1].trim(), id: headingId(match[1]) }));

  return {
    slug,
    number: Number(data.number),
    title: String(data.title),
    summary: String(data.summary),
    category: String(data.category),
    date: String(data.date),
    readTime: String(data.readTime),
    scale: String(data.scale),
    content,
    headings,
  };
}

export function getAllDocs() {
  return fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".md")).map(readDocument).sort((a, b) => b.number - a.number);
}

export function getDoc(slug: string) {
  const filename = `${slug}.md`;
  return fs.existsSync(path.join(contentDirectory, filename)) ? readDocument(filename) : undefined;
}
