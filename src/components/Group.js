import React from 'react'

const Group = ({ title, info, userid, about, url, isFinish }) => {

    return (
        <div>
            <h3>{title}</h3>
            <h4>{info}</h4>
            <h4>{about}</h4>
            <h4>{url}</h4>
            <h4>{isFinish}</h4>
        </div>
    )
}

export default Group;