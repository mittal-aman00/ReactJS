import React from 'react'

// Component for individual news item
const NewsItem = (props) => {
    return (
            <div className="my-3">
                <div className="card">
                <span className="position-absolute left-0 display-flex justifyContent-flex-end badge rounded-pill bg-secondary">{props.source}</span>
                        <img src={!props.imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : props.imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <p className="card-text"><small className="text-muted">By {props.author} on {new Date(props.date).toUTCString()}</small></p>
                            <a rel="noreferrer" href={props.newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>

                        </div>
                    </div>
                </div>
    )
}


export default NewsItem