import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 gap-y-20 md:gap-y-32 mb-32 mt-10">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.content.title}
            coverImage={post.content.image}
            date={post.first_published_at || post.published_at}
            author={post.content.author}
            slug={post.slug}
            excerpt={post.content.intro}
            categories={post.content.categories}
          />
        ))}
      </div>
    </section>
  );
}
