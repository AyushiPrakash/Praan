import React from 'react'
import Pm1 from "./graphs/Pm1"

const Dashboard = ({data}) => {
    return (
        <>
            <Pm1 {...data}  />
        </>
    )
}

export default Dashboard;
