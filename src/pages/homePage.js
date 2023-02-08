    /* eslint-disable array-callback-return */
    import coke from '../ads/coke.jpg'
    import jorden from '../ads/jorden.jpg'
    import watch from '../ads/watch.jpg'
    import jwellery from '../ads/jweller.jpg'
    import '@fortawesome/fontawesome-free/css/all.min.css';

    import './styles/homePage.css'
    import React, { useState } from "react";
    import useFetch from '../hook/useFetch';
    import useFetchImages from '../hook/images'

    import { Link } from 'react-router-dom';

    export default function HomePage() {

        let [cokeHide, setCokeHide] = useState(true);
        let [JordenHide, setJordenHide] = useState(true);
        let [watchHide, setWatchHide] = useState(true);
        let [jwelleryHide, setjwelleryHide] = useState(true);

        const { data, error, load } = useFetch("http://localhost:1337/api/tests")
        const { images, errors, loads } = useFetchImages("http://localhost:1337/api/upload/files")
        if (loads) return <p>Loading..........</p>
        if (errors) return <p> Error : </p>
        if (load) return <p>Loading..........</p>
        if (error) return <p> Error : </p>


        async function hideCokeAd() {
            setCokeHide(false)
        }
        async function hideWatchAd() {
            setJordenHide(false)
        }
        async function hideJordenAd() {
            setWatchHide(false)
        }
        async function hideJwelleryAd() {
            setjwelleryHide(false)
        }

        return (

            <div className="mt-4">
                <div className='d-flex justify-content-center slider ' >
                    {
                        images ? images.map(item => {
                            return (
                                // eslint-disable-next-line jsx-a11y/alt-text
                                <a href="http://dev.equipbid.com" rel='noreferrer' target="_blank"> <img className='me mb-5' src={`https://equipbid-strapi-cms.herokuapp.com${item.url}`} alt="img"></img> </a>
                            )
                        }) : null
                    }
                </div>


                <div className='mt-5'>
                    <table className="table table-dark table-striped text-center">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col" className='ml-3'>ID</th>
                                <th scope="col" className='ml-3'>Name</th>
                                <th scope="col" className='ml-3'>Test</th>
                                <th scope="col" className='ml-3'>Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => {
                                return (
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.attributes.Name}</td>
                                        <td>{item.attributes.test}</td>
                                        <td><Link to={`/tests/${item.id}`}> <button className='btn btn-outline-info'>info</button></Link></td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>


                <div className="cokeAd">
                    { cokeHide ?
                        <>
                            <button className="closeCokeAdButton" data-toggle="tooltip" data-placement="top" title="Close" onClick={hideCokeAd}> <i className="fa-solid fa-rectangle-xmark"></i> </button>
                            <a href="https://www.coca-colacompany.com/" rel="noreferrer" target="_blank"><button className="infoCokeAdButton" data-toggle="tooltip" data-placement="top" title="info"> <i className="fa-solid fa-circle-question"></i> </button></a>       
                            <a href='https://www.coca-colacompany.com/' rel="noreferrer" target="_blank"><img className='coke' src={coke} alt='coke' width="300px" height="400px"></img></a>
                        </>
                        : "" }
                </div>

                <div className="watchAd">
                    { watchHide ?
                        <>
                            <button className="closeWatchAdButton" data-toggle="tooltip" data-placement="top" title="Close" onClick={hideJordenAd}> <i className="fa-solid fa-rectangle-xmark"></i> </button>
                            <a href="https://www.michaelkors.global/en_IN/" rel="noreferrer" target="_blank"><button className="infoWatchAdButton" data-toggle="tooltip" data-placement="top" title="info"> <i className="fa-solid fa-circle-question"></i> </button></a>       
                            <a href='https://www.michaelkors.global/en_IN/' rel="noreferrer" target="_blank" ><img className='watch' src={watch} alt='watch' width="300px" height="400px"></img></a>
                        </>
                        : "" }
                </div>

                <div className='jordenAd'>
                    { JordenHide ?
                        <>
                            <button className="closeJordenAdButton" data-toggle="tooltip" data-placement="top" title="Close" onClick={hideWatchAd}> <i className="fa-solid fa-rectangle-xmark"></i> </button>
                            <a href="https://www.nike.com/jordan" rel="noreferrer" target="_blank"><button className="infoJordenAdButton" data-toggle="tooltip" data-placement="top" title="info"> <i className="fa-solid fa-circle-question"></i> </button></a>       
                            <a href='https://www.nike.com/jordan' rel="noreferrer" target="_blank"> <img className='jorden' src={jorden} alt='jorden' width="300px" height="400px"></img></a>
                        </>
                        : '' }
                </div>

                <div className='jwelleryAd'>
                    { jwelleryHide ?
                        <>
                            <button className="closeJwelleryAdButton" data-toggle="tooltip" data-placement="top" title="Close" onClick={hideJwelleryAd}> <i className="fa-solid fa-rectangle-xmark"></i></button>
                            <a href="https://www.caratlane.com/?ef_id=CjwKCAiApvebBhAvEiwAe7mHSD-e18VC9RaBX_jaD76BCmiQ_PCwGA3ftR86qwCZzBvlo1HKe2xGjxoCxLoQAvD_BwE:G:s&utm_campaign=Brand-Caratlane&AdGroup=25106743745&utm_device=c&utm_term=caratlane&matchtype=e&adposition=&utm_medium=cpc&utm_source=google&gclid=CjwKCAiApvebBhAvEiwAe7mHSD-e18VC9RaBX_jaD76BCmiQ_PCwGA3ftR86qwCZzBvlo1HKe2xGjxoCxLoQAvD_BwE" rel="noreferrer" target="_blank"><button className="infoJwelleryAdButton" data-toggle="tooltip" data-placement="bottom" title="info"> <i className="fa-solid fa-circle-question"></i> </button></a>       
                            <a href="https://www.caratlane.com/?ef_id=CjwKCAiApvebBhAvEiwAe7mHSD-e18VC9RaBX_jaD76BCmiQ_PCwGA3ftR86qwCZzBvlo1HKe2xGjxoCxLoQAvD_BwE:G:s&utm_campaign=Brand-Caratlane&AdGroup=25106743745&utm_device=c&utm_term=caratlane&matchtype=e&adposition=&utm_medium=cpc&utm_source=google&gclid=CjwKCAiApvebBhAvEiwAe7mHSD-e18VC9RaBX_jaD76BCmiQ_PCwGA3ftR86qwCZzBvlo1HKe2xGjxoCxLoQAvD_BwE" rel="noreferrer" target="_blank"> <img className='jwellery' src={jwellery} alt='jwellery' width="300px" height="400px"></img></a>
                        </>
                        : '' }
                </div>

            </div>
        )
    }