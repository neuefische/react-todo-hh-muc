import styled from 'styled-components/macro'

export default function ToggleButton({defaultText, activeText, isActive, onClick}) {
 return <ButtonStyled onClick={onClick}>{isActive ? activeText : defaultText}</ButtonStyled>
}

const ButtonStyled = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background: darkorchid;
  color: papayawhip;
`
