const initState = { 
    projects: [
        {id:1, title:'First', content:'aaaaaaaa'},
        {id:2, title:'Second', content:'bbbbbbbb'},
        {id:3, title:'Third', content:'cccccccc'}
    ]
}

const projectReducer = (state = initState, action) =>{
    return state;
} 

export default projectReducer;