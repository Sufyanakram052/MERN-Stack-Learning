import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./CreatePost.css";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            window.alert(data.error);
          } else {
            window.alert("Create Post Successfully");
            navigate("/allpost");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [url]);

  const CreatePostData = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "kissan-Dost");
    data.append("cloud_name", "mernstack052");
    fetch("https://api.cloudinary.com/v1_1/mernstack052/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="card ">
          <div className="createposCard">
            <h2>Create a Post</h2>
            <input
              type="text"
              placeholder="title"
              className ='form-control'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="body"
              className ='form-control'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              className ='form-control'
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button type="submit" className =' btn btn-primary form-control form-control12'    onClick={() => CreatePostData()}>
            Submit Post
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
