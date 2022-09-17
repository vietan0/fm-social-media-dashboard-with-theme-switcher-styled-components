import { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/themes';
import GlobalStyle from './style/Style';
import Header from './style/StyledHeader';
import { SwitchInput, SwitchLabel } from './style/StyledSwitch';
import StyledCardContainer from './style/StyledCardContainer';
import BigCard from './components/BigCard';
import SmallCard from './components/SmallCard';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const switchTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
  });

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // sync system's theme with React state when page first loads
      setDarkMode(true);
    }
  }, []);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <main className="App">
        <Header>
          <header>
            <h1>Social Media Dashboard</h1>
            <p className="textSecondary semibold">Total Followers: 23,004</p>
          </header>
          <SwitchInput
            type="checkbox"
            id="switch"
            checked={darkMode}
            onChange={switchTheme}
          />
          <SwitchLabel className="textSecondary semibold">Dark Mode</SwitchLabel>
        </Header>
        <StyledCardContainer>
          <BigCard
            socialMedia="facebook"
            handle="@nathanf"
            number="1987"
            unit="followers"
            diff="12"
            diffType="up"
          />
          <BigCard
            socialMedia="twitter"
            handle="@nathanf"
            number="1044"
            unit="followers"
            diff="99"
            diffType="up"
          />
          <BigCard
            socialMedia="instagram"
            handle="@realnathanf"
            number="11k"
            unit="followers"
            diff="1099"
            diffType="up"
          />
          <BigCard
            socialMedia="youtube"
            handle="Nathan F."
            number="8239"
            unit="subscribers"
            diff="144"
            diffType="down"
          />
        </StyledCardContainer>
        <h2>Overview - Today</h2>
        <StyledCardContainer>
          <SmallCard
            socialMedia="facebook"
            statName="Page Views"
            number="87"
            diff="3%"
            diffType="up"
          />
          <SmallCard
            socialMedia="facebook"
            statName="Likes"
            number="52"
            diff="2%"
            diffType="down"
          />
          <SmallCard
            socialMedia="instagram"
            statName="Likes"
            number="5462"
            diff="2257%"
            diffType="up"
          />
          <SmallCard
            socialMedia="instagram"
            statName="Profile Views"
            number="52k"
            diff="1375%"
            diffType="up"
          />
          <SmallCard
            socialMedia="twitter"
            statName="Retweets"
            number="117"
            diff="303%"
            diffType="up"
          />
          <SmallCard
            socialMedia="twitter"
            statName="Likes"
            number="507"
            diff="553%"
            diffType="up"
          />
          <SmallCard
            socialMedia="youtube"
            statName="Likes"
            number="107"
            diff="19%"
            diffType="down"
          />
          <SmallCard
            socialMedia="youtube"
            statName="Total Views"
            number="1407"
            diff="12%"
            diffType="down"
          />
        </StyledCardContainer>
        <div className="attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href="https://github.com/vietan0"
            target="_blank"
            rel="noreferrer"
          >
            Việt An
          </a>
          .{' '}
          <a
            href="https://github.com/vietan0/fm-social-media-dashboard-with-theme-switcher-styled-components"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/icon-github.svg"
              alt=""
            />{' '}
            GitHub
          </a>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
