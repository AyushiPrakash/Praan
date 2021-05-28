import styled from "styled-components";

import { FaMoon, FaSun } from "react-icons/fa";

const Button = styled.span`
  cursor: pointer;
  .corner {
    fill: ${({ theme }) => theme.backgroundSecondary};
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
    transition: fill 500ms ease;

    &:hover {
      filter: opacity(0.8);
    }
  }
  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  .icon {
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
    z-index: 10;
    margin: 0.75rem 0.75rem 0 0;
    animation: zoom 500ms ease;
  }
`;

const ThemeButton = (props) => {
  return (
    <Button
      href="https://github.com/01Abhinav/ASCIIndex"
      target="_blank"
      onClick={props.toggleTheme}
      aria-label="Toggle Theme"
    >
      {props.darkMode ? (
        <FaMoon className="icon" color="#F4E34F" size={24} />
      ) : (
        <FaSun className="icon" color="#F79B08" size={24} />
      )}

      <svg width="80" height="80" aria-hidden="true" className="corner">
        <polyline points="0,0 80,80 80,0 " />
      </svg>
    </Button>
  );
};

export default ThemeButton;
