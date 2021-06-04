import React from "react";
import { IVideo } from "./Video";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import {deleteVideo} from "./VideoServices";

import "./videoItem.css";

interface Props {
  video: IVideo;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const history = useHistory();

  const handleDelete = async (id: string) => {
    await deleteVideo(id);
    loadVideos();
  }

  return (
    <div className="col-12 col-md-6">
      <div className="video-card card text-white bg-secondary mb-3">
        <div className="card-header d-flex justify-content-between">
          {video.title}
          <div>
            <span className="text-danger m-3">
              <i className="fas fa-trash"
              onClick={() => video._id && handleDelete(video._id) }
              ></i>
            </span>
            <span
              style={{ cursor: "pointer", color: "#017fdf" }}
              onClick={() => history.push(`/update/${video._id}`)}
            >
              <i className="fas fa-edit"></i>
            </span>
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title">{video.description}</h4>
          <div className="card-text player-wrapper">
            <ReactPlayer
              controls={true}
              className="react-player"
              width="100%"
              height="100%"
              url={video.url}
            />
          </div>
        </div>
        <div className="card-footer text-muted">Fuente: youtube</div>
      </div>
    </div>
  );
};

export default VideoItem;
