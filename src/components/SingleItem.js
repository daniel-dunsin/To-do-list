import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { connect } from 'react-redux'
import { REMOVE_ITEM, EDIT_ITEM } from '../redux/actions'

const mapDispatchToProps = (dispatch, ownProps) => {
    const { id } = ownProps
    return {
        remove: () => {
            dispatch({
                type: REMOVE_ITEM,
                payload: { id }
            })
        },
        edit: () => {
            dispatch({
                type: EDIT_ITEM,
                payload: { id }
            })
        }
    }
}

const SingleItem = ({ id, text, remove, edit }) => {
    return <article className='w-full flex hover:bg-primary p-3 items-center justify-between cursor-pointer'>
        <h3 className='text-black text-[16px]'>{text}</h3>
        <div>
            <button className='text-green-500 mx-1' onClick={edit}><FaEdit /></button>
            <button className='text-red-700 mx-1' onClick={remove}><FaTrash /></button>
        </div>
    </article>
}

export default connect(null, mapDispatchToProps)(SingleItem)