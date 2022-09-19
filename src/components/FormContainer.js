import React from 'react'
import { connect } from 'react-redux';
import { UPDATE_INPUT, ADD_ITEM } from '../redux/actions';
const mapStateToProps = state => {
    return { input: state.itemInput, isEditing: state.isEditing }
}

const FormContainer = ({ input, isEditing, dispatch }) => {
    return <form className='mx-[20px] flex justify-center rounded-lg overflow-hidden mb-8' onSubmit={
        (e) => {
            e.preventDefault();
            dispatch({ type: ADD_ITEM });
        }
    }>
        <input type="text" placeholder='e.g slap a dog' className='bg-primary text-black flex-1 outline-none placeholder:text-black px-3' value={input} onChange={(e) => {
            dispatch({
                type: UPDATE_INPUT, payload: { text: e.currentTarget.value }
            })
        }} />
        <button type='submit' className='text-white bg-[royalblue] py-2 px-3'> {
            isEditing ? 'Edit' : 'Submit'
        } </button>
    </form>
}

export default connect(mapStateToProps)(FormContainer)