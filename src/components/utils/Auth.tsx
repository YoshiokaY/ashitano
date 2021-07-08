import User from "components/utils/firebase";
import React, { createContext, useEffect, useState } from "react";

import auth from "components/utils/firebase";

// Contextの型を用意
interface IAuthContext {
  currentUser: any;
}

// Contextを宣言。Contextの中身を {currentUser: undefined} と定義
const AuthContext = createContext<IAuthContext>({ currentUser: undefined });

const AuthProvider = (props: any) => {
  // Contextに持たせるcurrentUserは内部的にはuseStateで管理
  const [currentUser, setCurrentUser] = useState<any>(
    undefined
  );

  useEffect(() => {
    // Firebase Authのメソッド。ログイン状態が変化すると呼び出される
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
