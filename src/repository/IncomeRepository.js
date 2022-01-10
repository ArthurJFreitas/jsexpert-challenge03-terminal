import http from 'http';

const API_BASE_URL = 'http://localhost:3000';

class IncomeRepository {
  async makeRequest(url) {
    const req = new Promise((resolve, reject) => {
      http.get(url, (response) => {
        response.on("data", (data) => resolve(JSON.parse(data)));
        response.on("error", reject);
      })
    });

    return req;
  }

  async getConversions() {
    const conversions = await this.makeRequest(`${API_BASE_URL}/convert`)
    return conversions;
  }
}

export default IncomeRepository;
