export interface Employee {
    name: string;
    position: string;
    department: string;
    phoneNumber: string;
}

export interface InitStateEmployee {
    employee:Array<Employee>,
    isOpenFormAddEmployee:boolean,
    isOpenFormModifyEmployee:boolean
    idModifyEmployee:number|null
    valueFilter:ObjectFilter
}

export interface ObjectFilter {
    valuePosition:string,
    valueDescription:string,
    valueSearch:string,
}
