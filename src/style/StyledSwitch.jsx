import styled from 'styled-components';

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

export const SwitchLabel = styled.label.attrs({
  htmlFor: 'switch',
})`
  // style "Dark Mode"
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  &:hover {
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

  input:focus-visible + & {
    outline: 2px dashed white;
  }
`;
