import { extract } from "https://deno.land/std@0.158.0/encoding/front_matter.ts?s=extract";

export interface IPost {
  slug: string;
  title: string;
  content: string;
  createdAd: Date;
}

export async function loadPost(slug: string): Promise<IPost | null> {
  let text: string;

  try {
    text = await Deno.readTextFile(`./data/posts/${slug}.md`);
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return null;
    }

    throw error;
  }

  const { attrs, body } = extract(text);
  const params = attrs as Record<string, string>;
  const createdAd = new Date(params.created_at);

  return {
    slug,
    title: params.title,
    createdAd,
    content: body,
  };
}

export async function listPosts(): Promise<IPost[]> {
  const promise = [];

  for await (const entry of Deno.readDir("./data/posts")) {
    const slug = entry.name.replace(".md", "");

    promise.push(loadPost(slug));
  }

  const posts = await Promise.all(promise) as IPost[];
  posts.sort((a, b) => b.createdAd.getTime() - a.createdAd.getTime());

  return posts;
}
