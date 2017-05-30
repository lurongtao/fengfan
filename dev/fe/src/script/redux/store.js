import { createStore } from 'redux'

export default ()=>{
  // 映射 Redux状态 到 组件属性
  // Map Redux states to components props
  let mapStateToProps = (state)=>{
    return {
      keywords: state.keywords
    }
  }

  // 映射 Redux 动作 到 组件属性
  // Map Redux actions to components props
  let mapDispatchToProps = (dispatch)=>{
    return {
      onChangeKeywords: (action)=>dispatch(action)
    }
  }

  // Reducer
  let changer = (state={keywords: ''}, action)=>{
    switch (action.type) {
      case 'SET':
        return {
          keywords: action.keywords
        }
      default:
        return state
    }
  }

  // 创建store
  const store = createStore(changer)

  return {
    mapStateToProps,
    mapDispatchToProps,
    store
  }
}
