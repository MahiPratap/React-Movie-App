import React from "react";
import Loading from "./Loading";

const Actors = (props) => {

  if (props.error != null) {
    return (
      <h1 className="text-center">
        No Result Found.
      </h1>
    );
  }
  if (props.data === null) {
    return <Loading />;
  }

  if (props.data.length === 0) {
    return (
      <div className="text-center text-danger mt-4">
        <h2>
         Search more by Actors name...
        </h2>
      </div>
    );
  } else {
    return (
      <>
        <section className="text-center mt-5">
          <div className="container">
            <div className="row">
              {props.data.map((element) => {
                  
                  return (
                    <div className="col-md-3-mb-2">
                      <div class="hero-container mt-1">
                        <div class="main-container">
                          <div class="poster-container">
                            <a
                              href={element.person.url}
                              target="_blanck"
                              title="Know More"
                            >
                              {element.person.image ? (
                                <img
                                  src={element.person.image.medium}
                                  class="poster"
                                  alt={
                                    element.person.name != null
                                      ? element.person.name
                                      : "Not found"
                                  }
                                />
                              ) : (
                                <div
                                  className="poster"
                                  style={{ height: "325px" }}
                                >
                                  <img
                                    src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                                    style={{ width: "230px", height: "325px" }}
                                  />
                                </div>
                              )}
                            </a>
                          </div>
                          <div class="ticket-container">
                            <div class="ticket__content">
                              <p class="ticket__movie-slogan">
                                <strong>Score :</strong> {element.score}
                              </p>
                              <p class="movie_name">
                                {element.person.name != null
                                  ? element.person.name
                                  : "Not found"}
                                &nbsp;&nbsp;
                                <i
                                  class="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </p>
                              <p class="language">
                                 lang :
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

export default Actors;
