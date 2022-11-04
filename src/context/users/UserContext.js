import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const url = process.env.REACT_APP_GITHUB_URL;
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    fetchUser();
  }, []);

  // fetching the user
  const fetchUser = async () => {
    const response = await fetch(`${url}/users/josephe44`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
