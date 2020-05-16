import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({links}) => {
    if (!links || !links.length) {
        return <p className="center">There is no links yet</p>
    }

    return (
        <div className="row">
            <div className="col s12 m8 offset-m2 xl6 offset-xl3" style={{paddingTop: '2rem'}}>
                <h3>Links list</h3>
                <table>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Shorten</th>
                        <th>Target</th>
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>
                    { links.map((link, index) => {
                        return (
                            <tr key={link._id}>
                                <td>{index + 1}</td>
                                <td>{link.to}</td>
                                <td>{link.from}</td>
                                <td>
                                    <Link to={`detail/${link._id}`}>Show info</Link>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}