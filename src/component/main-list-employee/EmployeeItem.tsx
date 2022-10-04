import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setListEmployee,
  setIsOpenFormAdd,
  setIsOpenFormModify,
  setIdModifyEmployee,
} from "../../redux/action";
import { getDataSourceEmployee, getValueFilter } from "../../redux/selection";

const EmployeeItem = () => {
  const dispatch = useDispatch();

  const dataSourceEmployee = useSelector(getDataSourceEmployee);
  const valueFilter = useSelector(getValueFilter);

  const data = useMemo(() => {
    if (
      valueFilter.valuePosition ||
      valueFilter.valueDescription ||
      valueFilter.valueSearch
    ) {
      return dataSourceEmployee.filter((item) => {
        let checkItemEmployee = true;
        if (
          valueFilter.valuePosition !== "" &&
          valueFilter.valuePosition !== item.position
        ) {
          checkItemEmployee = false;
          return checkItemEmployee;
        }
        if (
          valueFilter.valueDescription !== "" &&
          valueFilter.valueDescription !== item.department
        ) {
          checkItemEmployee = false;
          return checkItemEmployee;
        }
        if (
          valueFilter.valueSearch !== "" &&
          !item.name.includes(valueFilter.valueSearch) &&
          !item.phoneNumber.includes(valueFilter.valueSearch)
        ) {
          checkItemEmployee = false;
          return checkItemEmployee;
        }
        return true;
      });
    } else {
      return dataSourceEmployee;
    }
  }, [
    valueFilter.valuePosition,
    valueFilter.valueDescription,
    valueFilter.valueSearch,
    dataSourceEmployee,
  ]);

  const handleDeleteEmployee = (id: number) => {
    const newDataSourceEmployee = dataSourceEmployee.filter((_, index) => {
      return index !== id;
    });
    dispatch(setListEmployee(newDataSourceEmployee));
  };

  const handleModifyEmployee = (id: number) => {
    dispatch(setIsOpenFormModify(true));
    dispatch(setIsOpenFormAdd(false));
    dispatch(setIdModifyEmployee(id));
  };

  return (
    <thead>
      {data &&
        data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.position}</td>
              <td>{item.department}</td>
              <td>{item.phoneNumber}</td>
              <td className="text-center">
                <button
                  onClick={() => handleModifyEmployee(index)}
                  type="button"
                  className="btn btn-success"
                >
                  Sửa
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    handleDeleteEmployee(index);
                  }}
                  type="button"
                  className="btn btn-danger"
                >
                  <span className="fa fa-trash mr-5"></span>Xóa
                </button>
              </td>
            </tr>
          );
        })}
    </thead>
  );
};

export default EmployeeItem;
