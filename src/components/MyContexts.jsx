"use client";
import { createContext, useState } from "react";

export const DataContext = createContext();
export const SetDataContext = createContext();
export const UserContext = createContext();
export const SetUserContext = createContext();

export const UserProvider = ({ children, data }) => {
  const [MyData, setMyData] = useState(data);
  const [myUser, setMyUser] = useState();

  return (
    <SetUserContext.Provider value={setMyUser}>
      <UserContext.Provider value={myUser}>
        <SetDataContext.Provider value={setMyData}>
          <DataContext.Provider value={MyData}>{children}</DataContext.Provider>
        </SetDataContext.Provider>
      </UserContext.Provider>
    </SetUserContext.Provider>
  );
};
