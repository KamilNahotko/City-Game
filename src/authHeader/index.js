export function authHeader() {
  let userToken = JSON.parse(localStorage.getItem("auth"));

  if (userToken && userToken.access_token) {
    return { Authorization: "Bearer " + userToken.access_token };
  } else {
    return {};
  }
}
