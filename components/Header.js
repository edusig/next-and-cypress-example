import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle} data-e2e="header-home">
          Home
        </a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  );
}
