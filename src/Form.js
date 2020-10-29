import styled from 'styled-components/macro'

export default function Form({onCreateTodo}) {

  function handleSubmit(event) {
    event.preventDefault()
    const formElement = event.target
    const input = formElement.title
    onCreateTodo(input.value)
  }

  return <FormStyled onSubmit={handleSubmit}>
    <label>
      Add todo:
      <input name="title" type="text" placeholder="Write todo title here"/>
    </label>
    <Button>Create</Button>
  </FormStyled>
}

const FormStyled = styled.form`
  display: grid;
  gap: 4px;
  margin-bottom: 20px;

  label {
    font-family: sans-serif;
  }

  input {
    font-size: 1em;
    margin-left: 6px;
  }
`

const Button = styled.button`
  padding: 10px 20px;
  background: plum;
  color: darkorchid;
  font-size: 1.2em;
  border: none;
  border-radius: 6px;
`
