import React from "react";

function Article({blg}){

    return (
        <React.Fragment>
              <article className="post blg-card--one-third ">      
                <figure>
                    <a href="#">
                        <img src={blg.head_image} alt={blg.title} className="hsg-deferred loading" data-was-processed="true" />
                    </a>
                </figure>
                <div className="post-content">
                    <h3 className="post-title">
                        <a href="#">
                            {blg.title}
                        </a>
                    </h3>
                    <div className="post-meta">
                        <a href="#" className="blg-card__blg-link">
                            {blg.author}&nbsp;
                        </a>
                        <a href="#" className="blg-card__read-time">
                           | {blg.blog_read_time}
                        </a>
                    </div>
                </div>
        </article>
        </React.Fragment>
    )
}

export default Article;