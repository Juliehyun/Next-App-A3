import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function MainNav(props) {
    return (
        <>
        {/* Shows Student Name in the Navbar.Brand element without an href element  */}
        <Navbar className='fixed-top navbar-dark bg-dark'>
        <Navbar.Brand>Jihyun Nam</Navbar.Brand>
            <Nav className="ml-auto">
                <Link href="/" passHref legacyBehavior><Nav.Link>Movies</Nav.Link></Link>
                <Link href="/about" passHref legacyBehavior><Nav.Link>About</Nav.Link></Link>
            </Nav>
      </Navbar>
      </>
    );
}