import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
export default Todo

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool
}

function Todo({title, isDone}) {
  return <Wrapper>
    <label>
      <BigCheckbox type="checkbox" checked={isDone} />
      <span>{title}</span>
    </label>
  </Wrapper>
}

const BigCheckbox = styled.input`
  transform: scale(1.5);
  margin-right: 10px;
`

const Wrapper = styled.div`
  font-family: sans-serif;
  font-weight: 600;
  margin-bottom: 12px;
`
