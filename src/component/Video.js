import React from "react";
import { useParams } from "react-router-dom";
import "./video.css";
import Comments from "./Comments"

export default function Video() {
  let { id } = useParams();
  let videoURl = `https://www.youtube.com/embed/${id}`;

  return (
     <> 
     {/* //added the empty so that I could render the comments on the same lvl or I couldve used React Fragment// */}
      <div className="iframe">
        <iframe
          width="560"
          height="315"
          src={videoURl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <Comments/>
      </div>
    </>
  );
}


