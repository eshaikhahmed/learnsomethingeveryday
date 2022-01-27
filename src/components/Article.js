import React from "react";
import {
    Link
  } from "react-router-dom";
function Article({blg}){

    return (
        <React.Fragment>
              <article className="post blg-card--one-third ">      
                <figure>
                    <Link to={"/blog/"+blg.id+"/"+blg.seo_url}>
                        <img src={blg.head_image} alt={blg.title} className="hsg-deferred loading" data-was-processed="true" />
                    </Link>
                </figure>
                <div className="post-content">
                    <h3 className="post-title">
                        <Link to={"/blog/"+blg.id+"/"+blg.seo_url}>
                            {blg.title}
                        </Link>
                    </h3>
                    <div className="post-meta">
                        <Link to={"/blog/"+blg.id+"/"+blg.seo_url} className="blg-card__blg-link">
                            {blg.author}&nbsp;
                        </Link>
                        <Link to={"/blog/"+blg.id+"/"+blg.seo_url} className="blg-card__read-time">
                           | {blg.blog_read_time}
                        </Link>
                    </div>
                </div>
        </article>
        </React.Fragment>
    )
}

export default Article;