import { useDispatch, useSelector } from "react-redux";
import { AppConst } from "../../const";
import {
  setIdModifyEmployee,
  setIsOpenFormAdd,
  setIsOpenFormModify,
  setValueFilter,
} from "../../redux/action";
import { getValueFilter } from "../../redux/selection";

const Control = () => {
  const dispatch = useDispatch();

  const valueFilter = useSelector(getValueFilter);

  const handleSortPosition = (value: string) => {
    const newValueFilter = { ...valueFilter, valuePosition: value };
    dispatch(setValueFilter(newValueFilter));
  };

  const handleSortDescription = (value: string) => {
    const newValueFilter = { ...valueFilter, valueDepartment: value };
    dispatch(setValueFilter(newValueFilter));
  };

  const handleChangeValueSearch = (value: string) => {
    const newValueFilter = { ...valueFilter, valueSearch: value };
    dispatch(setValueFilter(newValueFilter));
  };

  const handleOpenFormEmployee = () => {
    dispatch(setIdModifyEmployee(null))
    dispatch(setIsOpenFormAdd(true));
    dispatch(setIsOpenFormModify(false));
  };

  return (
    <>
      <button
        onClick={handleOpenFormEmployee}
        type="button"
        className="btn btn-primary"
        style={{ marginBottom: "16px" }}
      >
        <span className="fa fa-plus mr-5"></span>Thêm Nhân Viên
      </button>
      <div className="input-group" style={{ width: "100%" }}>
        <input
          style={{ width: "100%", borderRadius: 5 }}
          onChange={(e) => handleChangeValueSearch(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Nhập tên , số Điện thoại..."
        />
      </div>

      <div style={{ display: "flex", margin: "24px 0" }}>
        <select
          className="form-control select-option-filter"
          aria-label="Default select example"
          onChange={(event) => handleSortPosition(event.target.value)}
        >
          <option value="">Lọc chức vụ</option>
          <option value={AppConst.POSITION.tongGiamDoc}>
            {AppConst.POSITION.tongGiamDoc}
          </option>
          <option value={AppConst.POSITION.giamDoc}>
            {AppConst.POSITION.giamDoc}
          </option>
          <option value={AppConst.POSITION.quanLyDuAn}>
            {AppConst.POSITION.quanLyDuAn}
          </option>
          <option value={AppConst.POSITION.leader}>
            {AppConst.POSITION.leader}
          </option>
          <option value={AppConst.POSITION.nhanVien}>
            {AppConst.POSITION.nhanVien}
          </option>
        </select>
        <select
          className="form-control select-option-filter"
          aria-label="Default select example"
          onChange={(event) => handleSortDescription(event.target.value)}
        >
          <option value="">Lọc phòng ban</option>
          <option value={AppConst.DEPARTMENT.it}>
            {AppConst.DEPARTMENT.it}
          </option>
          <option value={AppConst.DEPARTMENT.hanhChinh}>
            {AppConst.DEPARTMENT.hanhChinh}
          </option>
          <option value={AppConst.DEPARTMENT.marketing}>
            {AppConst.DEPARTMENT.marketing}
          </option>
          <option value={AppConst.DEPARTMENT.sale}>
            {AppConst.DEPARTMENT.sale}
          </option>
          <option value={AppConst.DEPARTMENT.vanHanh}>
            {AppConst.DEPARTMENT.vanHanh}
          </option>
        </select>
      </div>
    </>
  );
};

export default Control;
