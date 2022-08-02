import React from "react";
import { useLocation } from 'react-router-dom'

export default function SingleNews() {

  const location = useLocation()
  const { singleNews } = location.state

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto mb-4">
            <img className="w-100" src={singleNews.urlToImage} alt="singleNews image" />
          </div>
          <div className="col-md-10 m-auto my-3">
            <h4>{singleNews.title}</h4>
          </div>
          <div className="col-md-10 mb-4 m-auto">
            <p style={{ color: "#818181" }}>{singleNews.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
