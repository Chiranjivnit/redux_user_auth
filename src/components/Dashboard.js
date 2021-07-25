import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard(props) {

    const globalStore = useSelector(state => state.AuthReducer)

    const logout = () => {
        return props.history.push("/");
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-primary justify-content-between">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <a onClick={logout} className="navbar-brand">Logout</a>
            </nav>
            {globalStore && globalStore.user && globalStore.user[0] ? globalStore.user[0].map((itm, indx) => {
                return (
                    <table key={indx} className="table table-dark table-striped">
                        <thead>
                            {/* <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Phone</th>
                                <th scope="col">gender</th>
                            </tr> */}
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{itm.id}</th>
                                <td>{itm.name}</td>
                                <td>{itm.age}</td>
                                <td>{itm.phone}</td>
                                <td>{itm.gender}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            }) : <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>}
        </>
    )
}
export default Dashboard;