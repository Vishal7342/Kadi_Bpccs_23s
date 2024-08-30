import React, { useEffect, useState } from "react";

function MainContain() {
    const [userLogs, setUserLogs] = useState([]);

    useEffect(() => {
        // Fetch data from PHP API endpoint
        fetch('C:/Users/mauli/Desktop/kadi_ghandhinagar/react/hostel/hmsproject/pages/components/getUserLog.php')
            .then(response => response.json())
            .then(data => setUserLogs(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="ts-main-content">
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="page-title" style={{ marginTop: '2%' }}>Access Log</h2>
                            <div className="panel panel-default">
                                <div className="panel-heading">All Courses Details</div>
                                <div className="panel-body">
                                    <table id="zctb" className="display table table-striped table-bordered table-hover" cellSpacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Sno.</th>
                                                <th>User Id</th>
                                                <th>User Email</th>
                                                <th>IP</th>
                                                <th>City</th>
                                                <th>Country</th>
                                                <th>Login Time</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Sno.</th>
                                                <th>User Id</th>
                                                <th>User Email</th>
                                                <th>IP</th>
                                                <th>City</th>
                                                <th>Country</th>
                                                <th>Login Time</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {userLogs.map((log, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{log.userId}</td>
                                                    <td>{log.userEmail}</td>
                                                    <td>{log.userIp}</td>
                                                    <td>{log.city}</td>
                                                    <td>{log.country}</td>
                                                    <td>{log.loginTime}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContain;
