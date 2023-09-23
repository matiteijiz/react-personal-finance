import { Navbar, Nav, Container} from 'react-bootstrap';
import { AiOutlineAreaChart, AiFillBank, AiOutlinePlus } from 'react-icons/ai';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="/resume"><AiFillBank /> Resume</Nav.Link>
                        <Nav.Link href="/add"><AiOutlinePlus /> Add</Nav.Link>
                        <Nav.Link href="/grafics"><AiOutlineAreaChart /> Graphics</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header