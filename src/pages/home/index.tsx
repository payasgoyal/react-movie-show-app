import React, { useState, SetStateAction, useContext } from "react";
import Layout from "../../layout";
import {
  Box,
  Paper,
  InputBase,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MovieList from "../../components/movie-list/MovieList";
import MovieTrendList from "../../components/movie-list/MovieTrendList";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const trendingList = movies.filter((item) => item.isTrending === true);
  const recommendList = movies.filter((item) => item.isTrending !== true);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };

  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#1d4581",
            border: "none",
          }}
          elevation={5}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon fontSize="large" sx={{ color: "white" }} />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <div style={{ width: "100% " }}>
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Trending
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box>
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Recommended For You
              </Typography>
              <MovieList recommendList={recommendList} />
            </Box>
          </div>
        ) : (
          <Box width="100%">
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Found {searchList.length} results for "{search}"
            </Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
