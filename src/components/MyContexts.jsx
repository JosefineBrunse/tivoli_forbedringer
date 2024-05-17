"use client";
import { createContext, useState } from "react";

export const DataContext = createContext();
export const SetDataContext = createContext();

export const UserProvider = ({ children, data }) => {
  const [MyData, setMyData] = useState(data);
  console.log(data);

  return (
    <SetDataContext.Provider value={setMyData}>
      <DataContext.Provider value={MyData}>{children}</DataContext.Provider>
    </SetDataContext.Provider>
  );
};
