import axios from 'axios'
import useSWR, { mutate } from 'swr'

const $host = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
})

$host.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
        config.headers['authorization'] = `Bearer ${token}`
    }
    return config
})

async function fetcher(url: string) {
    const { data } = await $host.get(`${url}`)
    return data
}

export function useApi<T>(url: string, options?: any) {
    const { data, error, mutate, isLoading } = useSWR<T>(url, fetcher, options)
    return {
        loading: !error && !data,
        data,
        isLoading,
        error,
        mutate,
    }
}

export const clearSWRCache = () => mutate(() => true, undefined, { revalidate: false })

export default $host
