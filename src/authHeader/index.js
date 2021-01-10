export function authHeader() {
  let userToken = JSON.parse(localStorage.getItem("auth"));

  if (userToken && userToken.user.access_token) {
    return { Authorization: "Bearer " + userToken.user.access_token };
  } else {
    return {};
  }
}
