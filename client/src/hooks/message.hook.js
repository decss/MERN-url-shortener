import {useCallback} from 'react'

export const useMessage = () => {
    return useCallback(text => {
        if (window.M && text) {
            text = text.replace(/(?:\r\n|\r|\n)/g, '<br>');
            window.M.toast({html: text})
        }
    }, [])
}