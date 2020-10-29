import styled from 'styled-components/macro'

export default function Form() {

  function handleSubmit(event) {
    event.preventDefault()
    const formElement = event.target
    const input = formElement.title
    console.log(input.value)
  }

  return <form onSubmit={handleSubmit}>
    <label>
      Add todo:
      <input name="title" type="text" placeholder="Write todo title here"/>
    </label>
    <button>Create</button>
  </form>
}
