import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://paper-route-app.onrender.com"
    : "http://localhost:4000";

/** API Class.
 * Static class tying together methods used to get/send to to the API.
 */

class QuickreaderApi {
  static async request(endpoint, method = "get", data) {
    const url = `${BASE_URL}/${endpoint}`;
    try {
      const response = await axios({ url, method, data });
      return response;
    } catch (err) {
      // More specific error handling
      if (err.response) {
        // Server responded with error
        const message = err.response.data.error?.message || "An error occurred";
        const status = err.response.status;
        throw new Error(`API Error (${status}): ${message}`);
      } else if (err.request) {
        // Request made but no response
        throw new Error(
          "No response from server. Please check your connection."
        );
      } else {
        // Request setup error
        throw new Error(`Request failed: ${err.message}`);
      }
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
