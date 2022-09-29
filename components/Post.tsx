import { IPost } from "../utills/posts.ts";

export default function Post(props: { post: IPost }) {
  const { post } = props;

  return (
    <li class="mb-3 bg-gray-100 hover:bg-gray-50 border border-gray-100 hover:border-gray-50 rounded-lg">
      <a
        href={`/posts/${post.slug}`}
        class="px-12 py-12 group grid sm:grid-cols-3"
      >
        <time class="text-sm text-gray-500">
          {new Date(post.createdAd).toLocaleDateString("ru", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <div class="sm:col-span-2">
          <h2 class="text-2xl font-bold">{post.title}</h2>
        </div>
      </a>
    </li>
  );
}
