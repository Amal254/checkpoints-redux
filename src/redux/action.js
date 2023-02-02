import { ADD , COMPLETE, DELETE, EDIT } from "./actionType"



export const handleAdd=(newTask)=>{
    return{
        type:ADD,
        payload:newTask
    }
}

export const handleDelete=(id)=>{
    return{
        type:DELETE,
        payload:id
    }
}

export const handleComplete=(id)=>{
    return{
        type:COMPLETE,
        payload:id
    }
}

export const handleEdit=(editedTask)=>{
    return{
        type:EDIT,
        payload:editedTask
    }
}