import axios from "axios";

// "https://paper-route-app.onrender.com"

const BASE_URL = "http://localhost:4000";

/** API Class.
 * Static class tying together methods used to get/send to to the API.
 */

class QuickreaderApi {
  static async request(endpoint, method = "get", data) {
    const url = `${BASE_URL}/${endpoint}`;

    try {
      return await axios({ url, method, data });
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // get recent entries from DB.
  static async getRecentSummaries() {
    let res = await this.request("recentsummaries");
    return res.data;
  }

  // get articles from NYT.
  static async getArticles(section) {
    let res = await this.request(`articles/${section}`);
    return res.data;
  }

  // send articles to ChatGPT.
  static async summarize(data) {
    let res = await this.request("summarize", "post", data);
    return res.data;
  }
}

export default QuickreaderApi;
