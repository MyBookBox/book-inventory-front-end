export const storeToken = (token) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("token", token);
    localStorage.setItem("token", token);
  }
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    let token = sessionStorage.getItem("token");
    const localToken = localStorage.getItem("token");

    if (localToken) token = localToken;
    return token;
  }

  return null;
};

export const storeUser = (user) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const getUser = () => {
  if (typeof window !== "undefined") {
    let user = sessionStorage.getItem("user");
    const localUser = localStorage.getItem("user");

    if (localUser) user = localUser;
    return JSON.parse(user);
  }

  return null;
};

export const removeStorage = () => {
  if (typeof window !== "undefined") {
    sessionStorage.clear();
    localStorage.clear();
  }
};
