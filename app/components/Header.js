// components/Header.js
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link href="/" legacyBehavior>
            <div className="text-white text-2xl font-semibold">Home</div>
          </Link>
          <Link href="/blog">
          <div className="text-white text-xl">Blog</div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
