 import { handleResponse } from "../Services/HandleResponse";

export function getPosts() {
  return (dispatch) => {
     let url = "http://127.0.0.1:8001/api/get_data";
    return fetch(url,  {method: 'GET'})
      .then((response) => handleResponse(response))
      .then((response) => {
       dispatch({
          type: "getPosts",
          payload: response,
        });
  });
  };
}




