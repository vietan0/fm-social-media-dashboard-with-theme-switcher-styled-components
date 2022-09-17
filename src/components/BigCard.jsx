import { string } from 'prop-types';
import styled from 'styled-components';
import StyledCard from '../style/StyledCard';

const StyledBigCard = styled(StyledCard)`
  // colored lines
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 4px;

    // decide highlight color based on props
    // props is passed from:
    // App (React) --> BigCard (React) --> Styled (styled-components)
    background: ${({ socialMedia }) => `var(--${socialMedia})`};
  }

  .stat {
    span {
      font-size: 4rem;
      font-weight: 700;
      letter-spacing: -1.5px;
    }
    p {
      text-transform: uppercase;
      letter-spacing: 6px;
    }
  }
`;

export default function BigCard({ socialMedia, handle, number, unit, diff, diffType }) {
  return (
    <StyledBigCard
      socialMedia={socialMedia}
      diffType={diffType}
    >
      <div className="social">
        <img
          src={`/images/icon-${socialMedia}.svg`}
          alt=""
        />
        <p className="textSecondary semibold">{handle}</p>
      </div>
      <div className="stat">
        <span>{number}</span>
        <p className="textSecondary">{unit}</p>
      </div>
      <div className="diff-today semibold">
        <img
          src={`/images/icon-${diffType}.svg`}
          alt=""
        />
        <p>{`${diff} Today`}</p>
      </div>
    </StyledBigCard>
  );
}

BigCard.propTypes = {
  socialMedia: string.isRequired,
  handle: string.isRequired,
  number: string.isRequired,
  unit: string.isRequired,
  diff: string.isRequired,
  diffType: string.isRequired,
};
