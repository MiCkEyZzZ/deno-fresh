import { Handlers, PageProps } from "$fresh/server.ts";

import { Container, Post } from "../components/index.ts";
import { IPost, listPosts } from "../utills/posts.ts";
import { State } from "../utills/state.ts";

interface Data extends State {
  posts: IPost[];
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const posts = await listPosts();

    return ctx.render({ ...ctx.state, posts });
  },
};

export default function Home(props: PageProps<Data>) {
  const { posts } = props.data;

  return (
    <main>
      <Container>
        <ul class="mt-5">
          {posts.map((post: IPost) => <Post post={post} />)}
        </ul>
      </Container>
    </main>
  );
}
