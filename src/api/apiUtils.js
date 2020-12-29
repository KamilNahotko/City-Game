import React from "react";

export const API_URL = "http://localhost:8080/api";

export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  console.error("API call failed. " + error);
  throw error;
}

export async function splxFetchData(url,setFunc, setErrFunc)
{
  await fetch(url)
  .then(response => response.json())
  // .then(json=>json.data)
  .then(data=>setFunc({data}))
  .catch((err) => {
    setErrFunc(err);
    console.log(err);
  });
}

// export async function splxFetchData(url, setFunc){
//   await fetch(url)
//   .then(response => response.json())
//   .then(json => json.data )
//   .then(data => setFunc({data}​​));
// }​​


export async function fetchData(url, setFunc, setErrFunc) {
  const res = await fetch(url);
  res
    .json()
    .then((res) => {
      setFunc(res);
    })
    .catch((err) => {
      setErrFunc(err);
      console.log(err);
    });
}

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const useApi = (url) => {
  const [data, setData] = React.useState({
    state: apiStates.LOADING,
    error: "",
    data: [],
  });

  const setPartData = (partialData) => setData({ ...data, ...partialData });

  React.useEffect(() => {
    setPartData({
      state: apiStates.LOADING,
    });
    fetch(url)
      .then((res) => res.json())
      .then((json) => json.data)
      .then((data) => {
        setPartData({
          state: apiStates.SUCCESS,
          data,
        });
      })
      .catch(() => {
        setPartData({
          state: apiStates.ERROR,
          error: "fetch failed",
        });
      });
  }, []);

  return data;
};
