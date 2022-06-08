import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I am Veasna. I am a Mobile Developer. You can contact me on <span><a href="https://twitter.com/veasnawt">Twitter.</a></span>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <h3>Posts</h3>
        <Link href="/posts/test">
          <a>Click here to go to test post page</a>
        </Link>
        <h3>Website</h3>
        <a href="http://veasnawt.com">veasnawt.com</a>
      </section>
    </Layout>
  );
}