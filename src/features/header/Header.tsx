import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Header() {
  const state = useSelector((state: RootState) => state.auth);
  return (
    <div>
      <p>Your Email : {state.email}</p>
      <p>Your Password : {state.password}</p>
    </div>
  );
}

export default Header;
