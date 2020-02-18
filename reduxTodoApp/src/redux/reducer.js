export const ADD_ITEM = 'ADD_ITEM'

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
})

const initialState = {
  itemList: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        itemList: state.itemList.concat({
          id: Math.random(),
          name: action.payload
        })
      }

    default:
      return state
  }
}

export default rootReducer
