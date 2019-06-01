import Link from 'next/link';
import { Header as SHeader } from 'semantic-ui-react'

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <SHeader>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/comic">
      <a style={linkStyle}>Comic</a>
    </Link>
  </SHeader>
);

export default Header;