import axios from 'axios'

const baseURL = 'https://randomuser.me/api/'

async function fetchQuery(path) {
    let url = `${ baseURL }/${ path }`

    const response = await axios.get(url)
    const data = response.data

    return data
}

export { baseURL, fetchQuery }
