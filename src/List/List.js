import React, { useState } from 'react'

const List = ({ data }) => {

    // const download = url => {
    //   fetch(url).then(response => {
    //       response.arrayBuffer().then(function(buffer) {
    //         const url = window.URL.createObjectURL(new Blob([buffer]));
    //         const link = document.createElement("a");
    //         link.href = url;
    //         link.setAttribute("download", "image.png");
    //         document.body.appendChild(link);
    //         link.click();
    //       });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // };
    return (
        <div>
            {/* <center> */}
                {/* <h1>Search Your Favorite Movie</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /><br /><br />
                    <input type="submit" value="Search" style={{ borderRadius: '20px', border: '1px solid black', backgroundColor: 'green', color: 'white', fontWeight: 'bolder' }} />
                </form> */}
                <div style={{display: "flex" , flexWrap : "wrap" , justifyContent: "space-between"}} >
                    {data.length >= 1 ? data.map(movie =>
                        <div key={movie.imdbID}>
                            <div >
                                <img src={movie.Poster} style={{objectFit : "cover"}} alt={movie.Title} />
                                <div>
                                    <h4 className="card-title">{movie.Title}</h4>
                                    {/* <button className='btn btn-primary' download >Download</button> */}
                                    {/* <a className="btn btn-primary" onClick={()=>download(movie.Poster)}>Download Poster</a> */}
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            {/* </center> */}
        </div>
    )
}

export default List