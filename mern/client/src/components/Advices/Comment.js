import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../App";
import "./Comment.css";

const Comment = () => {
  const [useData, setUseData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  // Get users Post

  useEffect(() => {
    fetch("/allpost", {
      headers: {
        "Accept" : "application/json  ",        
        "Content-Type": "application/json",
      },
      credentials : 'include'
    })
      .then((res) => res.json())
      .then((result) => {
        setUseData(result.posts);
      })
      .catch((err) => {
        console.log(err);
        navigate("/signin");
      });
  }, []);

  console.log(useData);

  // like the post

  const likePost = (id) => {
    fetch("/like", {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = useData.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setUseData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Unlike the post

  const unLikePost = (id) => {
    fetch("/unlike", {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = useData.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setUseData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Comment On Post

  const makeComment = (text, postId) => {
    fetch("/comment", {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        postId,
        text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = useData.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setUseData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Delete Post

  const deletePost = (postid) => {
    fetch(`/deletepost/${postid}`, {
      method: "delete",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = useData.filter((item) => {
          return item._id !== result._id;
        });
        setUseData(newData);
      });
  };
console.log(useData);
  return (
    <>
      <div className="container">
        {useData.map((result) => {
          return (
            <div className="card mt-5 cardHome" key={result._id}>
              <div className="cardName">
                <h5>{result.postedBy.name}</h5>
                {result.postedBy._id == state._id && (
                  <i
                    className="zmdi zmdi-delete zmdi-hc-lg"
                    onClick={() => deletePost(result._id)}
                  ></i>
                )}
              </div>
              <img
                className="card-img cardimage"
                src={result.photo}
                alt="Users"
              />
              {result.likes.includes(state._id) ? (
                <i
                  className="zmdi zmdi-thumb-down zmdi-hc-lg"
                  onClick={() => {
                    unLikePost(result._id);
                  }}
                ></i>
              ) : (
                <i
                  className="zmdi zmdi-thumb-up zmdi-hc-lg"
                  onClick={() => {
                    likePost(result._id);
                  }}
                ></i>
              )}
              <h6>{result.likes.length} likes </h6>
              <div className="card-content cardcontent">
                <h5 className="card-title">{result.title}</h5>
                <p className="card-body">{result.body}</p>
                <h3 className="ui dividing header ">
                  <span className="commentss"></span> Comments
                </h3>
                {result.comments.map((record) => {
                  return (
                    <h6 key={record._id } className='commentinfo' >
                      <span>
                      <span style={{ fontWeight: "500" }}>
                        {record.postedBy.name}
                      </span>
                      <span>{result.updatedAt}</span>
                      </span>
                      {record.text}
                    </h6>
                  );
                })}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    makeComment(e.target[0].value, result._id);
                  }}
                >
                  <input type="text" className ='form-control' placeholder="add a comment" />
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Comment;
