import Link from 'next/link';
import Image from 'next/image';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container title="404 – CloudThings">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          451 – Unavailable For Legal Reasons
        </h1>
        <div className="flex flex-row">
          <div className="p-1">
            <Image
              alt={`Heimdall`}
              src={`/static/images/404/bolt-1.gif`}
              width={200}
              height={400}
              priority
            />
          </div>
          <div className="p-1">
            <Image
              alt={`Heimdall`}
              src={`/static/images/404/bolt-2.gif`}
              width={200}
              height={400}
              priority
            />
          </div>
          <div className="p-1">
            <Image
              alt={`Heimdall`}
              src={`/static/images/404/bolt-3.gif`}
              width={200}
              height={400}
              priority
            />
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
