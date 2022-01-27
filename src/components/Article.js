import React from "react";

function Article({blg}){

    return (
        <React.Fragment>
              <article className="post blg-card--one-third ">      
                <figure>
                    <a href={"/blog/"+blg.id+"/"+blg.seo_url}>
                        <img src={blg.head_image} alt={blg.title} className="hsg-deferred loading" data-was-processed="true" />
                    </a>
                </figure>
                <div className="post-content">
                    <h3 className="post-title">
                        <a href={"/blog/"+blg.id+"/"+blg.seo_url}>
                            {blg.title}
                        </a>
                    </h3>
                    <div className="post-meta">
                        <a href={"/blog/"+blg.id+"/"+blg.seo_url} className="blg-card__blg-link">
                            {blg.author}&nbsp;
                        </a>
                        <a href={"/blog/"+blg.id+"/"+blg.seo_url} className="blg-card__read-time">
                           | {blg.blog_read_time}
                        </a>
                    </div>
                </div>
        </article>
        </React.Fragment>
    )
}

export default Article;