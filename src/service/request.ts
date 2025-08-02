import { getToken } from "../shared/utils/stroge-util";

const baseUrl = "https://nestjs-backend-nrvc.onrender.com/api/v1/";

export const post = async (path, body) => {
  const url = `${baseUrl}${path}`;
  var headers = { "Content-Type": "application/json" };
  if (!["user/signin", "user/signup"].includes(path)) {
    headers["Authorization"] = `Bearer ${getToken()}`;
  }
  try {
    const result = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    const response = await result.json();
    if (response["error"]) {
      if (Array.isArray(response["message"])) {
        throw response["message"].join(", ");
      } else {
        throw response["message"];
      }
    } else {
      return response;
    }
  } catch (e) {
    throw e;
  }
};

export const get = async (path) => {
  const url = `${baseUrl}${path}`;
  try {
    const result = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    const response = await result.json();
    if (response["error"]) {
      if (Array.isArray(response["message"])) {
        throw response["message"].join(", ");
      } else {
        throw response["message"];
      }
    } else {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const patch = async (path, body) => {
  const url = `${baseUrl}${path}`;

  try {
    const result = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(body),
    });
    const response = await result.json();
    if (response["error"]) {
      if (Array.isArray(response["message"])) {
        throw response["message"].join(", ");
      } else {
        throw response["message"];
      }
    } else {
      return response;
    }
  } catch (e) {
    throw e;
  }
};

export const del = async (path) => {
  const url = `${baseUrl}${path}`;
  try {
    const result = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    const response = await result.json();
    if (response["error"]) {
      if (Array.isArray(response["message"])) {
        throw response["message"].join(", ");
      } else {
        throw response["message"];
      }
    } else {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
function handleApiError(response) {
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Resource not found");
    } else if (response.status === 500) {
      throw new Error("Internal Server Error");
    } else {
      throw new Error("An error occurred while fetching data");
    }
  }

  return response.json();
}
