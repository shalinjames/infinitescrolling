import RestAPI from "../Common/RestAPI";

class Comments {
  static get() {
    return new Promise((resolve, reject) => {
      const myRequest = "https://jsonplaceholder.typicode.com/comments";
      RestAPI.get({ url: myRequest })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default Comments;
