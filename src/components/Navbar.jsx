import { Link, NavLink } from "react-router-dom";
// Styled Components
import StyledNav from "./styled/StyledNav";
import Wrapper from "./styled/Wrapper";

export default function Navbar() {
    return (
        <nav>
            <Wrapper>
                <StyledNav>
                    <Link to='/home' className='header'>
                        <h3 className='header_text'>Basic Shop</h3>
                    </Link>
                    <ul className='nav_links'>
                        <li><NavLink className='link' to='/home'>Home</NavLink></li>
                        <li><NavLink className='link' to='/cart'>Cart</NavLink></li>
                        <li><NavLink className='link' to='/favorites'>Favorites</NavLink></li>
                    </ul>
                    <div className='contact'>@seymenklc</div>
                </StyledNav>
                <div><hr /></div>
            </Wrapper>
        </nav>
    );
}