const states = {
    data: ['typescript', 'redux', 'react']
}

const reducer = (state = states, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
            data: ['build', 'code', 'base']
        }
      default:
        return state
    }
  }
  
  export default reducer