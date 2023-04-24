import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Home</Link>
          <div className="links">
            <Link href="/notes">My Notes</Link>
            <Link href="/notes/links">Helpful Links</Link>
            <Link href="/code/repos">My gitHub repos</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
