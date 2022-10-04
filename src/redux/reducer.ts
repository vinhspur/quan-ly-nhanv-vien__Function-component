import { AppConst } from "../const";
import { InitStateEmployee } from "../interface/interface";

const initState = {
    employee: [
        {
            name: "Nguyễn Văn Nam",
            position: AppConst.POSITION.tongGiamDoc,
            department: AppConst.DEPARTMENT.it,
            phoneNumber: "0911148526",
        },
        {
            name: "Nguyễn Văn Minh",
            position: AppConst.POSITION.giamDoc,
            department: AppConst.DEPARTMENT.it,
            phoneNumber: "0922222222",
        },
        {
            name: "Quế Ngọc Hải",
            position: AppConst.POSITION.leader,
            department: AppConst.DEPARTMENT.marketing,
            phoneNumber: "0933333333",
        },
        {
            name: "Bùi Tiến Dũng",
            position: AppConst.POSITION.nhanVien,
            department: AppConst.DEPARTMENT.hanhChinh,
            phoneNumber: "0944444444",
        },
    ],
    isOpenFormAddEmployee: false,
    isOpenFormModifyEmployee: false,
    idModifyEmployee: null,
    valueFilter: {
        valuePosition: "",
        valueDepartment: "",
        valueSearch: ""
    }


}


const rootReducer = (state: InitStateEmployee = initState, action: any) => {
    debugger
    switch (action.type) {
        case "setEmployee":
            return { ...state, employee: action.payload }
        case "toggleFormAdd":
            return { ...state, isOpenFormAddEmployee: action.payload }
        case "toggleFormModify":
            return { ...state, isOpenFormModifyEmployee: action.payload }
        case "setIdModifyEmployee":
            return { ...state, idModifyEmployee: action.payload }
        case "setObjectFilter":
            return { ...state, valueFilter: { valuePosition: action.payload.valuePosition, valueDepartment: action.payload.valueDepartment, valueSearch: action.payload.valueSearch } }
        default:
            return state
    }
}

export default rootReducer