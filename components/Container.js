import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import Image from 'next/image';

import Footer from '@/components/Footer';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;

  const router = useRouter();
  const meta = {
    title: `Cloud Things`,
    description: `Blog with content about the cloud, infrastructure, code, bots, and other things`,
    image: '',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://cloudthings.dev${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://cloudthings.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Cloud Things" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cloudthings_dev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="sticky-nav flex justify-between flex-wrap items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Image
          alt={`Logo CloudThings`}
          src={
            theme == 'dark'
              ? `/static/images/logo_nav_dark.png`
              : `/static/images/logo_nav.png`
          }
          width={160}
          height={36}
          layout={'fixed'}
          priority
        />
        <button
          className=" inline-flex p-2 mr-2 hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white rounded text-black lg:hidden ml-auto hover:text-black outline-none focus:outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          } w-full lg:inline-flex lg:flex-grow lg:w-auto pr-2`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <NextLink href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-2 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-200 hover:text-black sm:p-4 text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 self-end">
                Home
              </a>
            </NextLink>
            <NextLink href="/snippets">
              <a className="lg:inline-flex lg:w-auto w-full px-2 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-200 hover:text-black p-1 sm:p-4 text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 self-end">
                Snippets
              </a>
            </NextLink>
            <NextLink href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-2 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-200 hover:text-black p-1 sm:p-4 text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 self-end">
                About
              </a>
            </NextLink>
          </div>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10 focus:outline-none"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-black px-8"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
