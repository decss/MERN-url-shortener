import React from 'react'

export const linkCard = ({link}) => {
    return (
        <div>
            <h2>Linl</h2>
            <p>Shorten link: <a href="{link.to}" target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>Target link: <a href="{link.from}" target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Clicks: <strong>{link.clicks}</strong></p>
            <p>Created: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </div>
    )
}