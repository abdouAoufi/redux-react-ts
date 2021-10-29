import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInfo } from "../../features/auth/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const [email, updateEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        onChange={(e) => updateEmail(e.currentTarget.value)}
        type="text"
        placeholder="email"
        name="email"
      />
      <input
        onChange={(e) => setPassword(e.currentTarget.value)}
        type="text"
        placeholder="password"
        name="password"
      />
      <button onClick={() => dispatch(setInfo({ email, password }))}>
        Auth
      </button>
    </div>
  );
};

export default Auth;
