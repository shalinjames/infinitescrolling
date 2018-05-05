class RestAPI {
  static request({ url, method }) {
    return fetch(url, { method, "Content-Type": "application/json" }).then(
      response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      }
    );
  }
  static get({ url }) {
    const method = "GET";
    return this.request({ url, method });
  }
  static post({ url }) {
    const method = "POST";
    return this.request({ url, method });
  }
}

export default RestAPI;
