import { useSelector } from "react-redux";
import FormEmployee from "./component/FormEmployee";
import { getIsOpenFormAdd, getIsOpenFormModify } from "./redux/selection";
import "./css/main.css"
import MainListEmployee from "./component/main-list-employee";

function App() {
  const isOpenFormAdd = useSelector(getIsOpenFormAdd);
  const isOpenFormModify = useSelector(getIsOpenFormModify);
  
  return (
    <>
      <h2 className="center-root">
      Quản Lý Nhân Viên
      </h2>
      <div className="container">
        <div className="Wrapper-ui-employee">
          {(isOpenFormAdd || isOpenFormModify) && (
            <div className="form-employee">
              {isOpenFormAdd && <FormEmployee />}
              {isOpenFormModify && <FormEmployee isFormModify={true} />}
            </div>
          )}
          <div style={{ width: "100%"}}>
         <MainListEmployee/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
