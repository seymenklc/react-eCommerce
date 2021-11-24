import styled from "styled-components";

export default styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header {
        text-decoration: none;
        color: #fefefe
    }

    .nav_links {
        list-style: none;
    }

    .nav_links li {
        display: inline-block;
        padding: 0px 10px;
        border-radius: 5px;
        transition: all 0.2s ease-in-out;
    }

    .nav_links li:hover, .active {
        padding: 5px 6px;
        border-radius: 5px;
        background-color: #ff4e00;
    }
    
    .link {
        color: #fefefe;
        text-decoration: none;
    }

    .contact:hover {
        cursor: pointer;
        color: aqua; 
    }

    .header_text {
        font-size: 1.7em;
        white-space: nowrap;
        background: -webkit-linear-gradient( 92deg, #95d7e3, #eb76ff );
        background-size:600vw 600vw;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textAnimate 5s linear infinite alternate;
    }

    @keyframes textAnimate {
        from {
            filter: hue-rotate(0deg);
            background-position-x: 0%;
        }

        to {
            filter: hue-rotate(360deg);
            background-position-x: 600vw; 
        }
    }
`;

