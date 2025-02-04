import { createContext, useState, useEffect, useContext } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem("hasVisited") ? false : true;
  });

  useEffect(() => {
    if (!loading) return; 

    setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("hasVisited", "true"); 
    }, 2500);
  }, [loading]);

  return (
    <LoadingContext.Provider value={{ loading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
