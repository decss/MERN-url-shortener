import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)

        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                let message = data.message || 'Something goes wrong'
                if (data.errors && data.errors.length > 0) {
                    for (let i = 0; i < data.errors.length; ++i) {
                        message += (message ? "\r\n" : '') + ' - ' + data.errors[i].msg
                    }
                }
                throw new Error(message)
            }
            setLoading(false)

            return data

        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }

    }, [])

    const clearError = useCallback(() => setError(null), [])

    return {loading, request, error, clearError}
}