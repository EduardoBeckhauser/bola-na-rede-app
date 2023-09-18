import api from '../plugins/api'

class CamisaService {
  async getAllCamisas() {
    const response = await api.get('/camisas/')
    return response.data
  }
  async saveCamisa(camisa) {
    const response = await api.post('/camisas/', camisa)
    return response.data
  }
  async deleteCamisa(camisa) {
    const response = await api.delete(`/camisas/${camisa.id}/`)
    return response.data
  }
}

export default new CamisaService()