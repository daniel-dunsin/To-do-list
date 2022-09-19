import React from 'react'
import SingleItem from './SingleItem';
import { connect } from 'react-redux';
import { CLEAR_ITEMS } from '../redux/actions';

const mapStateToProps = state => {
    return { items: state.items }
}

const ItemsList = ({ items, dispatch }) => {
    
    if (items.length === 0) {
        return <h1 className='font-bold text-center my-5 italic'>No to-do list</h1>
    }
    return <section>
        <div className='flex flex-col gap-y-2'>
            {
                items.map((item) => {
                    return <SingleItem {...item} key={item.id} />
                })
            }
        </div>



        {/* clear btn */}
        <div className='text-center mt-4'>
            <button className='text-red-900 font-bold curor-pointer focus:border-2 border-red-900' onClick={
                () => dispatch({ type: CLEAR_ITEMS })
            }>Clear List</button>
        </div>
    </section>
}

export default connect(mapStateToProps)(ItemsList)