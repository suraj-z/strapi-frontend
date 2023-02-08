import './styles/homePage.css'
import { useParams } from 'react-router-dom';
import React from "react";
import useFetch from '../hook/useFetch';
export default function ReviewDetails() {
    const { id } = useParams();
    console.log("id : ", id);
    const { data, error, load } = useFetch("https://equipbid-strapi-cms.herokuapp.com/api/tests/" + (id));

    if (load) return <p>Loading..........</p>
    if (error) return <p> Error : </p>
    console.log(data)
    return (
        <div>
            <p className='text'>User Details</p>
            <p className="text">

                <div>

                    <table className="table table-dark">
                        <thead>
                            <tr className='table-dark'>
                                <th className='m-5 text-center' scope="col">ID</th>
                                <th className='m-5 text-center' scope="col">Name</th>
                                <th className='m-5 text-center' scope="col">Test</th>
                                <th className='m-5 text-center' scope="col">Email</th>
                                <th className='m-5 text-center' scope="col">createdAt</th>
                                <th className='m-5 text-center' scope="col">updatedAt</th>
                                <th className='m-5 text-center' scope="col">publishedAt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-active mt-5'>
                                <th className='width' scope="row">{data.id}</th>
                                <td>{data.attributes.Name}</td>
                                <td>{data.attributes.test}</td>
                                <td>{data.attributes.email}</td>
                                <td>{data.attributes.createdAt}</td>
                                <td>{data.attributes.updatedAt}</td>
                                <td>{data.attributes.publishedAt}</td>
                            </tr>
                            
                        </tbody>
                    </table>

                </div>

            </p>

        </div>

    )
}