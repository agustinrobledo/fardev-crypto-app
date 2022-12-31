export default class Http {
  static instance = new Http();

  get = async (url: string) => {
    try {
      const req = await fetch(url);
      let json = await req.json();
      return json.data;
    } catch (error) {
      console.log("http error", error);
    }
  };

  post = async (url: string, body: any) => {
    try {
      let req = await fetch(url, {
        method: "POST",
        body,
      });
      let json = await req.json;
      return json;
    } catch (error) {
      console.log(error);
    }
  };
}
