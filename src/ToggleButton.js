import styled from 'styled-components/macro'

export default function ToggleButton({defaultText, activeText, isActive, onClick}) {
 return <button onClick={onClick}>{isActive ? activeText : defaultText}</button>
}
