import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    // use theme
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.bg};

    // theme-irrelevant colors, don't need to use props
    --up: hsl(163, 72%, 41%);
    --down: hsl(356, 69%, 56%);
    --facebook: hsl(208, 92%, 53%);
    --twitter: hsl(203, 89%, 53%);
    --instagram: linear-gradient(to top right, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
    --youtube: hsl(348, 97%, 39%);
    --toggle-off: hsl(230, 22%, 74%);
    --toggle-on: linear-gradient(to right,hsl(210, 78%, 56%), hsl(146, 68%, 55%));

    // reset
    font-family: "Inter", "Helvetica", sans-serif;
    padding: 0;
    margin: 0;
    min-height: 100vh;

    position: relative;
    isolation: isolate;

    // bg pattern
    &::before {
      position: absolute;
      z-index: -1;
      
      content: "";
      width: 100%;
      height: 30vh;
      border-radius: 0 0 2rem 2rem;
      background-color: ${({ theme }) => theme.bgPattern};
    }
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  h1 {
    font-size: calc(1.375rem + 1.5vw);
    letter-spacing: -0.5px;
  }

  p {
    font-size: 0.9rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: ${({ theme }) => theme.textSecondary};
    font-weight: 600;
    text-decoration: none;
  }

  .App {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 1200px;
    padding: 3rem max(1.5rem,10vw);
  }

  .attribution {
    font-size: 0.85rem;
    text-align: center;
  }
  
  // utility
  .textSecondary {
    color:${({ theme }) => theme.textSecondary}; 
  }
  
  .semibold {
    font-weight: 600;
  }
`;
