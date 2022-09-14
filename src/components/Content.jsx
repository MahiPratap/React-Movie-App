import React from "react";
import Loading from "./Loading";


const Content = (props) => {
   
  if (props.data === null) {
    return <Loading />;
  }

  if (props.data.length === 0) {
    return (
      <div className="text-center text-danger mt-4">
        <h1>
          <b style={{color:"yellowgreen"}}><i>Enjoy Your Movie</i></b>
        </h1>
      </div>
    );
  } else {
    return (
      <>
        <section id="content-back" className="text-center mt-5">
          <div className="container">
            <div className="row">
              {props.data.map((element) => {
                return (
                  <div className="col-md-3 mb-2">
                    <div class="hero-container mt-1">
                      <div class="main-container">
                        <div class="poster-container">
                          <a
                            href={element.show.url}
                            target="_blanck"
                            title="Know More"
                          >
                            {element.show.image ? (
                              <img
                                src={element.show.image.medium}
                                class="poster"
                                alt={element.show.name}
                              />
                            ) : (
                              <div
                                className="poster"
                                style={{ height: "325px" }}
                              >
                                <img
                                  src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                                  alt=""
                                  style={{ width: "230px", height: "325px" }}
                                />
                              </div>
                            )}
                          </a>
                        </div>
                        <div class="ticket-container">
                          <div class="ticket__content">
                            <p class="ticket__movie-slogan">
                              <strong>Premiered</strong>{" "}
                              {element.show.premiered}
                            </p>
                            <p class="movie_name">
                              {element.show.name}&nbsp;&nbsp;
                              <i
                                class="fa fa-star text-warning"
                                aria-hidden="true"
                              ></i>
                              &nbsp;{element.show.rating.average}
                            </p>
                            <p class="language">
                              Language : {element.show.language}
                            </p>
                            <button class="watch_now">Watch Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Content;
