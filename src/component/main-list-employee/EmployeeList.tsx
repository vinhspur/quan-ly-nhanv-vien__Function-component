import EmployeeItem from "./EmployeeItem";

const EmployeeList = () => {
  return (
    <table className="table table-bordered ">
      <thead>
        <tr>
          <th className="text-center">STT</th>
          <th className="text-center">Tên</th>
          <th className="text-center">Chức Vụ</th>
          <th className="text-center">Phòng ban</th>
          <th className="text-center">Số điện thoại</th>
          <th className="text-center">Hành Động</th>
        </tr>
      </thead>
      <EmployeeItem />
    </table>
  );
};

export default EmployeeList;
