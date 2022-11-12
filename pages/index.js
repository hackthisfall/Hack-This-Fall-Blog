import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import SectionSeparator from "@/components/section-separator";

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog | Hack This Fall</title>
          <meta property="og:title" content="Hack This Fall Blog Page" />
          <meta property="og:url" content="https://blog.hackthisfall.tech" />
          <meta
            property="og:image"
            content="https://hackthisfall.tech/og-image.png"
          />
          <meta property="og:description" content="Hack This Fall Blog Page" />
          <meta name="twitter:title" content="Hack This Fall Blog Page" />
        </Head>
        <Container>
          <Header />
        </Container>
        <SectionSeparator classes="mt-5 mb-10" />
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.content.title}
              coverImage={heroPost.content.image}
              date={heroPost.first_published_at || heroPost.published_at}
              author={heroPost.content.author}
              slug={heroPost.slug}
              excerpt={heroPost.content.intro}
              categories={heroPost.content.categories}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];

  return {
    props: { allPosts, preview },
    revalidate: 30,
  };
}
