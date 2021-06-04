import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IVideo } from "./Video";
import * as VideoService from "./VideoServices";
import { toast } from "react-toastify";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id: string;
}

const VideoForm = () => {
  const history = useHistory();
  const params = useParams<Params>();

  const initialStateVideo = {
    title: "",
    description: "",
    url: "",
  };
  const [video, setVideo] = useState<IVideo>(initialStateVideo);

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (!params.id) {
      await VideoService.createVideo(video);
      toast.success("Canción agregada!!");
      setVideo(initialStateVideo);

    } else {
      await VideoService.updateVideo(params.id, video);
      toast.success("Canción actualizada!!");

    }


    history.push("/");
  };

  const getVideo = async (id:string) => {
    const res = await VideoService.getVideo(id);
    const {title , description, url} =  res.data;
    setVideo({title , description, url});
  }

  useEffect(() => {
    if (params.id) {
      getVideo(params.id);
    }
  }, []);

  return (
    <div className="row">
      <div className="col-md-12 offset-md-12 col-sm-12 col-lg-6 offset-lg-3">
        <div className="card">
          <div className="card-body">
            <h1>Agrega una canción</h1>

            <form onSubmit={handleSubmit}>
              <div className="div form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Escribe el nombre de la canción"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>
              <div className="div form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="Pega el link de la canción (youtube)"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>
              <div className="div form-group">
                <textarea
                  onChange={handleInputChange}
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="¿Por qué te gusta?"
                  value={video.description}
                ></textarea>
              </div>

              {params.id ? (
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Actualizar canción
                </button>
              ) : (
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Agregar canción
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
