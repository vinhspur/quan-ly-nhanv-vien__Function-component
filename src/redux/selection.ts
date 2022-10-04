import { InitStateEmployee } from "../interface/interface"

export const getDataSourceEmployee = (state: InitStateEmployee) => state.employee

export const getIsOpenFormAdd = (state: InitStateEmployee) => state.isOpenFormAddEmployee

export const getIsOpenFormModify = (state: InitStateEmployee) => state.isOpenFormModifyEmployee

export const getIdModifyEmployee = (state: InitStateEmployee) => state.idModifyEmployee

export const getValueFilter = (state: InitStateEmployee) => state.valueFilter


