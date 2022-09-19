import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS, EDIT_ITEM, UPDATE_INPUT, CLOSE_STATUS } from "./actions";
const initialState = {
    items: [],
    editId: '',
    isEditing: false,
    itemInput: '',
    isStatusShowing: '',
    status: '',
    statusText: '',
}

const reducer = (state = initialState, action) => {
    if (action.type === UPDATE_INPUT) {
        return { ...state, itemInput: action.payload.text };
    }
    if (action.type === CLEAR_ITEMS) {
        return { ...state, items: [] }
    }
    if (action.type === ADD_ITEM) {
        let tempItems = [...state.items];
        if (state.isEditing) {
            tempItems = tempItems.map(item => {
                if (item.id == state.editId) {
                    item.text = state.itemInput;
                }
                return item;
            })
        } else {
            const item = { id: (new Date().getTime()).toString(), text: state.itemInput };
            tempItems.unshift(item);
        }
        return { ...state, items: tempItems, isStatusShowing: true, status: 'success', statusText: 'Item  Added', itemInput: '', isEditing: false, editId: '' }
    }
    if (action.type === REMOVE_ITEM) {
        const tempItems = [...state.items].filter(item => item.id != action.payload.id);
        return { ...state, items: tempItems, isStatusShowing: true, status: 'danger', statusText: 'Item Removed' };
    }
    if (action.type === EDIT_ITEM) {
        const item = state.items.find(item => item.id == action.payload.id);
        return { ...state, itemInput: item.text, isEditing: true, editId: item.id };
    }
    if (action.type === CLOSE_STATUS) {
        return { ...state, status: '', isStatusShowing: false, statusText: '' }
    }
    return state;
}


export default reducer;