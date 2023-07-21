import axios from "axios";

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
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // get logged in user.
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // Get login token.
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  // sign up.
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  // update user profile.
  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  static async getArticles() {
    let res = await this.request("articles");
    console.log("attempting to retrieve articles");
    return res.data;
  }
}

export default QuickreaderApi;
