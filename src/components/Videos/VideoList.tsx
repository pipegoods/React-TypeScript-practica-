import React, { useEffect, useState } from "react";
import { IVideo } from "./Video";
import * as VideoService from "./VideoServices";
import VideoItem from "./VideoItem";

export const VideoList = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  const loadvideos = async () => {
    const res = await VideoService.getVideos();

    const formatedVideos = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.updatedAt.getTime() - a.createdAt.getTime());

    setVideos(formatedVideos);
  };

  useEffect(() => {
    loadvideos();
  }, []);

  return (
    <div>
      <div className="row">
        {videos.map((video) => {
          return (
            <VideoItem video={video} key={video._id} loadVideos={loadvideos} />
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
