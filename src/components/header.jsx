import Link from "next/link";

export const Header = () => (
  <header>
    <nav>
      <Link href="/" passHref>
        <b>Home</b>
      </Link>

      <Link href="/events" passHref>
        <b>Events</b>
      </Link>

      <Link href="/about-us" passHref>
        <b>About Us</b>
      </Link>
    </nav>
  </header>
);
