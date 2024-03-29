import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import MoreStories from "@/components/more-stories";
import Header from "@/components/header";
import PostHeader from "@/components/post-header";
import SectionSeparator from "@/components/section-separator";
import Layout from "@/components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import PostTitle from "@/components/post-title";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import PostFooter from "@/components/post-footer";
import RichTextResolver from 'storyblok-js-client/richTextResolver'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
      </Container>
      <SectionSeparator classes="mt-5" />

      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <div className="min-w-full bg-light-orange flex justify-center">
            <article className="max-w-2xl w-11/12 md:w-4/6 bg-white mt-10 mb-12 rounded-2xl p-5 md:p-10">
              <Head>
                <title>{post.content.title}</title>
                <meta property="og:site_name" content="Blog | Hack This Fall" />
                <meta property="og:image" content={post.content.image} />
                <meta
                  property="og:url"
                  content={`https://blog.hackthisfall.tech/${post.slug}`}
                />
                <meta property="og:description" content={post.content.intro} />
                <meta name="twitter:title" content={post.content.title} />
              </Head>
              <PostHeader
                title={post.content.title}
                categories={post.content.categories}
              />
              <SectionSeparator classes={"mt-5"} />
              <PostBody content={post.html} />
              <PostFooter
                date={post.content.date || post.published_at}
                author={post.content.author}
              />
            </article>
          </div>
          <SectionSeparator />
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: {
        ...data.post,
        html: data.post?.content?.long_text
          ? new RichTextResolver().render(data.post.content.long_text)
          : null,
      },
      morePosts: data.morePosts,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts?.map((post) => `/${post.slug}`) || [],
    fallback: true,
  };
}
