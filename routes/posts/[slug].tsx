import { Handlers, PageProps } from "$fresh/server.ts";
import * as gfm from "$gfm";

import { Container } from "../../components/index.ts";
import { IPost, loadPost } from "../../utills/posts.ts";
import { ServerCodePage } from "../_404.tsx";

interface IData {
  post: IPost | null;
}

export const handler: Handlers<IData> = {
  async GET(_req, ctx) {
    const post = await loadPost(ctx.params.slug);

    return ctx.render({ ...ctx.state, post });
  },
};

export default function PostPage(props: PageProps<IData>) {
  const { post } = props.data;

  return post
    ? (
      <Container>
        <div class="flex flex-col mt-5">
          <h1 class="text-5xl font-bold">{post.title}</h1>
          <time class="inline-block text-base mt-4 text-gray-600">
            {new Date(post.createdAd).toLocaleDateString("ru", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
        <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
        <article
          class="mt-12"
          dangerouslySetInnerHTML={{ __html: gfm.render(post.content) }}
        />
      </Container>
    )
    : (
      <ServerCodePage
        serverCode={404}
        codeDescription={"Такой пост не найдена"}
      />
    );
}
