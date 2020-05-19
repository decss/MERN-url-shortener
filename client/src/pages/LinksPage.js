import React, {useCallback, useContext, useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/Loader";
import {LinksList} from "../components/LinksList";


export const LinksPage = () => {
    const {token} = useContext(AuthContext)
    const [links, setLinks] = useState(null)
    const {request, loading} = useHttp()

    const fetchLink = useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(fetched)
        } catch (e) {
        }
    }, [token, request])

    useEffect(() => {
        fetchLink()
    }, [fetchLink])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && <LinksList links={links}/>}
        </>
    )
}