export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKN_POST(body) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    option: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + "/api/user",
    option: {
      method: "GET",
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}
