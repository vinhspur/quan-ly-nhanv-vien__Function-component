import { Employee, ObjectFilter } from "../interface/interface"

export const setListEmployee = (employee: Array<Employee>) => {
    return {
        type: "setEmployee",
        payload: employee
    }
}

export const setIsOpenFormAdd = (isOpenFormAddEmployee:boolean)=>{
    return{
        type:"toggleFormAdd",
        payload:isOpenFormAddEmployee
    }
}

export const setIsOpenFormModify = (isOpenFormModifyEmployee:boolean)=>{
    return{
        type:"toggleFormModify",
        payload:isOpenFormModifyEmployee
    }
}

export const setIdModifyEmployee = (id:number)=>{
    return{
        type:"setIdModifyEmployee",
        payload:id
    }
}

export const setValueFilter = (objectFilter:ObjectFilter)=>{
    return{
        type:"setObjectFilter",
        payload:objectFilter
    }
}