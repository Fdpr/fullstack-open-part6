import PropTypes from "prop-types"

const CreateForm = ({ handleSubmit }) => <form onSubmit={handleSubmit}>
    <div><input type="text" name="anecdoteField" /></div>
    <button>create</button>
</form>

CreateForm.propTypes = {
    handleSubmit: PropTypes.func
}

export default CreateForm