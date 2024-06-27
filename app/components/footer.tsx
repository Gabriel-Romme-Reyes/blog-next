import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-8 border-t-2">
      <section className="w-full relative flex items-top justify-between my-8">
        <Link href="/" className="font-bold text-3xl">
          {" "}
          Minify
        </Link>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Tags</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
