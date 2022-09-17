import styled from 'styled-components';

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchLabel = styled.label.attrs({
  htmlFor: 'switch',
})`
  // style "Dark Mode" vertically
  display: flex;
  align-items: center;
  &:hover > p {
    filter: brightness(${({ theme }) => theme.hoverBrightness});
  }

  // switch's background
  cursor: pointer;
  text-indent: -90px;
  width: 50px;
  height: 24px;
  background: var(--toggle-off);
  border-radius: 100px;
  position: relative;

  // switch's circle
  &:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    background: ${({ theme }) => theme.bgPattern};
    border-radius: 100px;
    transition: 0.1s;
  }

  input:checked + & {
    background: var(--toggle-on);
  }

  input:checked + &::after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
`;