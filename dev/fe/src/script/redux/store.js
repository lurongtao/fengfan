import { createStore } from 'redux'

export default ()=>{
  // 映射 Redux状态 到 组件属性
  // Map Redux states to components props
  let mapStateToProps = (state)=>{
    return {
      id: state.id
    }
  }

  // 映射 Redux 动作 到 组件属性
  // Map Redux actions to components props
  let mapDispatchToProps = (dispatch)=>{
    return {
      onChangeId: (action)=>dispatch(action)
    }
  }

  // Reducer
  let changer = (state={title: '《 电影《 豆瓣'}, action)=>{
    switch (action.type) {
      case 'SETTITLE':
        return {
          title: action.title
        }
      default:
        return state
    }
  }
  let changers = (state={id: ''}, action)=>{
    switch (action.type) {
      case 'SETTITLE':
        return {
          title: action.title
        }
      default:
        return state
    }
  }

  // 创建store
  const store = createStore(changers)

  return {
    mapStateToProps,
    mapDispatchToProps,
    store
  }
}
