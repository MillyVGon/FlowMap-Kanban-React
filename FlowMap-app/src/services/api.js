import axios from 'axios'

const api = axios.create({
    baseURL: 'https://flow-map-kanban-react-u3x4.vercel.app/'
})

export default api