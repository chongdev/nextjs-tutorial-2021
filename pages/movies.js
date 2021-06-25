import React from "react";
import Image from "next/image";

const BASEIMG = "https://image.tmdb.org/t/p/w500"; // w1280

const posterLoader = ({ src, width, quality }) => {
  return BASEIMG + `${src}?q=${quality || 75}`;
};

export default function Movies({ randomData, movies }) {
  return (
    <div>
      <div>This Movie</div>

      <span>randomData: {randomData}</span>

      <div>
        {movies.map((movie, index) => {
          return (
            <div key={index} style={{ marginBottom: 15 }}>
              <div
                className="media"
                style={{ display: `flex`, alignItems: `flex-start` }}
              >
                <div style={{ width: 100 }}>
                  {/* <img
                    style={{ width: `100%` }}
                    src={BASEIMG + movie.poster_path}
                    alt={movie.original_title}
                  /> */}

                  <Image
                    loader={posterLoader}
                    src={movie.poster_path}
                    alt={movie.original_title}
                    width={100}
                    height={150}
                  />
                </div>

                <div
                  className="media-body"
                  style={{ flex: `1`, paddingLeft: 15 }}
                >
                  <div style={{ fontSize: 18, fontWeight: "bold" }}>{`${
                    index + 1
                  }. ${movie.title}`}</div>

                  <div style={{ color: "gray" }}>
                    {movie.release_date} - {movie.vote_average}
                  </div>

                  <div style={{ color: "gray" }}>{movie.overview}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* popularity poster_path release_date original_language */}
      {/* {<span>{JSON.stringify(movies)}</span>} */}
    </div>
  );
}

export async function getStaticProps(context) {
  // https://developers.themoviedb.org/4/account/get-account-lists
  const apikey = `40db937f4118e2b8c01861102eb89f4d`;
  const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGRiOTM3ZjQxMThlMmI4YzAxODYxMTAyZWI4OWY0ZCIsInN1YiI6IjYwZDU1MWVhMjE2MjFkMDA3ZmI0ZmRmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pJ8TImBgoJguAhoj45wpod4kC5YBt0AvAaeDVtqouc0`;

  const page = Math.floor(Math.random() * 10);

  const url = `https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=${apikey}`;

  // Allowed Values: , original_order.asc, original_order.desc, release_date.asc, release_date.desc, title.asc, title.desc, vote_average.asc, vote_average.desc

  // sort_by=popularity.desc
  // sort_by=revenue.desc

  // primary_release_year=2014

  const res = await fetch(url);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movies: data.results,
      randomData: Math.random().toString(),
    }, // will be passed to the page component as props
  };
}
