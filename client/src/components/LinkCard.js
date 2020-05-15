import React from 'react'

export const LinkCard = ({link}) => {
    return (
        <div className="row">
            <div className="col s12 m8 offset-m2 xl6 offset-xl3" style={{paddingTop: '2rem'}}>
                <h3>Link details</h3>
                <p>Shorten link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
                <p>Target link: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
                <p>Clicks: <strong>{link.clicks}</strong></p>
                <p>Created: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
            </div>
        </div>
    )
}