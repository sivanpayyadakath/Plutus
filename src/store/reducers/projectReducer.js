const initState = { 
    projects: [
        {id:1, title:'First', content:'aaaaaaaa'},
        {id:2, title:'Second', content:'bbbbbbbb'},
        {id:3, title:'Third', content:'cccccccc'}
    ]
}

const projectReducer = (state = initState, action) =>{
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'CREATE_PROJECT': 
            console.log('PROJ CRETAED', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':  
            console.log('create project error', action.err)
            return state;
        default:
            return state; 
    }
} 

export default projectReducer;