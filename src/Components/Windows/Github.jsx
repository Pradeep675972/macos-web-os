import React from "react";
import Macwindow from "./Macwindow";
import githubdata from "../../assets/github.json";
import "./github.scss";
const Github = ({windowName, setwindowstate}) => {
  let Gitcard = ({
    data = {
      id: 1,
      image: "",
      title: "",
      description: "",
      tags: [],
      repoLink: "",
      demoLink: "",
    },
  }) => {
    return (
        <div className="card">
                <img src={data.image} alt="" />
                <h1>{data.title}</h1>
                <p className="description">{data.description}</p>
                <div className="tags">
                    {
                        data.tags.map((ele,idx)=>{
                        
                            return <p key={idx} className="tag">{ele}</p>
                        })
                    }
                </div>

                <div className="urls">
                    <a href={data.repoLink}>Repository</a>
                    <a href={data.demoLink}>Demo</a>
                </div>
        </div>
    )
  };

  return (
    <div>
      <Macwindow windowName={windowName}  setwindowstate={setwindowstate}>
        <div className="cards">
          {githubdata.map((ele ,idx) => {
            return <Gitcard key={idx} data={ele} />;
          })}
        </div>
      </Macwindow>
    </div>
  );
};

export default Github;
