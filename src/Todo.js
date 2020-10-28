import PropTypes from 'prop-types'

export default Todo

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool
}

function Todo({title, isDone}) {
  return <div>
    <label>
      <input type="checkbox" checked={isDone} />
      {title}
    </label>
  </div>
}
