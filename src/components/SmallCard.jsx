import { string } from 'prop-types';
import styled from 'styled-components';
import StyledCard from '../style/StyledCard';

const StyledSmallCard = styled(StyledCard)`
  & > * {
    width: 100%;
    justify-content: space-between;
  }
  .bottom {
    display: flex;
    align-items: end;
    span {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
  }
`;

export default function SmallCard({ socialMedia, statName, number, diff, diffType }) {
  return (
    <StyledSmallCard diffType={diffType}>
      <div className="top social">
        <p className="textSecondary semibold">{statName}</p>
        <img
          src={`/images/icon-${socialMedia}.svg`}
          alt=""
        />
      </div>
      <div className="bottom">
        <span>{number}</span>
        <div className="diff-today semibold">
          <img
            src={`/images/icon-${diffType}.svg`}
            alt=""
          />
          <p>{diff}</p>
        </div>
      </div>
    </StyledSmallCard>
  );
}

SmallCard.propTypes = {
  socialMedia: string.isRequired,
  statName: string.isRequired,
  number: string.isRequired,
  diff: string.isRequired,
  diffType: string.isRequired,
};
