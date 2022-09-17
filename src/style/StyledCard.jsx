import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bgCard};
  overflow: hidden;
  position: relative;
  text-align: center;

  &:hover {
    cursor: pointer;
    filter: brightness(${({ theme }) => theme.hoverBrightness});
  }

  .social {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .diff-today {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${({diffType}) => `var(--${diffType})`};
    img {
      width: 10px;
    }
  }
`;
