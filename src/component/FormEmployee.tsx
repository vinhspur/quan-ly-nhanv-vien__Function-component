import { useEffect, useMemo, useState } from "react";
import {Employee} from "../interface/interface";
import { AppConst } from "../const";
import { setIsOpenFormAdd, setIsOpenFormModify ,setListEmployee} from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { getDataSourceEmployee, getIdModifyEmployee } from "../redux/selection";
const FormEmployee = ({isFormModify }: FormEmployeeProps) => {
  const dispatch = useDispatch()

  const dataSourceEmployee = useSelector(getDataSourceEmployee);
  const idModifyEmployee = useSelector(getIdModifyEmployee);


  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorPhoneNumber, setIsErrorPhoneNumber] = useState(false);
  const [employee, setEmployee] = useState<Employee>({
    name: "",
    position: AppConst.POSITION.nhanVien,
    department: AppConst.DEPARTMENT.it,
    phoneNumber: "",
  });
  
  
  
  const isDisableBtnAdd = useMemo(
    () => !Boolean(employee.name && employee.phoneNumber),
    [employee.name, employee.phoneNumber]
    );
    
    useEffect(()=>{
      if(idModifyEmployee || idModifyEmployee===0){
      setEmployee(dataSourceEmployee[idModifyEmployee])
    }},[idModifyEmployee,dataSourceEmployee])

    const handleChangeName = (value: string) => {
    if (value.length > 50 || Number(value[value.length - 1]) > 0) {
      setIsErrorName(true);
      return;
    }
    setIsErrorName(false);
    let newEmployee = { ...employee, name: value };
    setEmployee(newEmployee);
  };

  const handleChangePosition = (value: string) => {
    let newEmployee = { ...employee, position: value };
    setEmployee(newEmployee);
  };

  const handleChangeDepartment = (value: string) => {
    let newEmployee = { ...employee, department: value };
    setEmployee(newEmployee);
  };

  const handleChangePhoneNumber = (value: string) => {
    if (!isNaN(Number(value))) {
      let newEmployee = { ...employee, phoneNumber: value.trim() };
      setEmployee(newEmployee);
      setIsErrorPhoneNumber(false);
      return;
    }
    setIsErrorPhoneNumber(true);
  };

  const handleSubmitForm = () => {
    setEmployee({
      name: "",
      position: "",
      department: "",
      phoneNumber: "",
    });
    
    if(isFormModify){
      const newDataSourceEmployee = [...dataSourceEmployee];
      if(idModifyEmployee || idModifyEmployee===0){
        newDataSourceEmployee[idModifyEmployee] = employee
        dispatch(setListEmployee(newDataSourceEmployee));
        dispatch(setIsOpenFormModify(false))
      }
    } else {
      const newDataSourceEmployee = [...dataSourceEmployee, employee];
    dispatch(setListEmployee(newDataSourceEmployee));
    dispatch(setIsOpenFormAdd(false))
    }
  };

  const handleCloseFormEmployee = ()=>{
    dispatch(setIsOpenFormAdd(false))
    dispatch(setIsOpenFormModify(false))
  }

  return (
    <>
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              {isFormModify ? "Sửa thông tin nhân viên":"Thêm Nhân Viên"}
            </h3>
          </div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <label>Tên :</label>
                <input
                  value={employee.name}
                  type="text"
                  className="form-control"
                  onChange={(event) => handleChangeName(event.target.value)}
                />
                {isErrorName && (
                  <div style={{ color: "#FE2E2E" }}>
                    Tên là chữ , tối đa 50 ký tự
                  </div>
                )}
              </div>
              <label>Chức vụ :</label>
              <select
                value={employee.position}
                className="form-control"
                onChange={(event) => handleChangePosition(event.target.value)}
              >
                <option value={AppConst.POSITION.nhanVien}>Nhân viên</option>
                <option value={AppConst.POSITION.tongGiamDoc}>
                  Tổng giám đốc
                </option>
                <option value={AppConst.POSITION.giamDoc}>Giám đốc</option>
                <option value={AppConst.POSITION.quanLyDuAn}>
                  Quản lý dự án
                </option>
                <option value={AppConst.POSITION.leader}>Leader</option>
              </select>
              <br />

              <label>Phòng ban :</label>
              <select
                value={employee.department}
                className="form-control"
                onChange={(event) => handleChangeDepartment(event.target.value)}
              >
                <option value={AppConst.DEPARTMENT.it}>IT</option>
                <option value={AppConst.DEPARTMENT.hanhChinh}>
                  Hành chính
                </option>
                <option value={AppConst.DEPARTMENT.vanHanh}>Vận Hành</option>
                <option value={AppConst.DEPARTMENT.marketing}>Marketing</option>
                <option value={AppConst.DEPARTMENT.sale}>Sale</option>
              </select>
              <br />

              <label>Số điện thoại :</label>
              <input
                value={employee.phoneNumber}
                type="text"
                className="form-control"
                onChange={(event) =>
                  handleChangePhoneNumber(event.target.value)
                }
              />
              {isErrorPhoneNumber && (
                <div style={{ color: "#FE2E2E" }}>
                  Số Điện Thoại hợp lệ phải là 1 số
                </div>
              )}
              <br />
              <div className="text-center">
                <button
                  disabled={isDisableBtnAdd}
                  className="btn btn-success"
                  onClick={handleSubmitForm}
                >
                  {isFormModify ? " Lưu lại" : "Thêm"}
                </button>
                &nbsp;
                <button
                  onClick={handleCloseFormEmployee}
                  className="btn btn-danger"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

type FormEmployeeProps = {
  isFormModify?:boolean;
};

export default FormEmployee;
