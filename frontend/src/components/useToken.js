import { useState } from "react";

function useToken() {
  const getToken = () => {
    const tokenData = sessionStorage.getItem("token");
    if (tokenData) {
      return JSON.parse(tokenData).token;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const deleteToken = () => {
    sessionStorage.removeItem("token");
    setToken(null);
  };

  return {
    setToken: saveToken,
    removeToken: deleteToken,
    token,
  };
}

export default useToken;
