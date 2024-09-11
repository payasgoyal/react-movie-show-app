import React, { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";
import { Box, Card, CardContent, Stack, Grid, Typography } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieIcon from "@mui/icons-material/Movie";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

interface MovieTrendCardProps {
  movie: MovieDataType;
}

const MovieTrendCard = ({ movie }: MovieTrendCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOOGLE BOOKMARK", id });
  };

  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: "transparent", color: "#E0E0E0", my: 3, border: "none" }}
    >
      <CardContent sx={{ p: 0, position: "relative" }}>
        <Grid container spacing={1}>
          <Grid item>
            <img
              src={movie.thumbnail.regular.large}
              alt=""
              style={{ width: "400px", height: "180px", borderRadius: "8px", filter: "blur(2px)" }}
            />
          </Grid>
          <Stack
            mt="6"
            spacing={0}
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            p={4}
          >
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Typography
                  fontSize={15}
                  color="#E0E0E0"
                  aria-label="year of movie"
                >
                  {movie.year}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    bg: "#E0E0E0",
                    borderRadius: "full",
                  }}
                />
              </Grid>
              <Grid item>
                <div>
                  {movie.category === "Movies" ? <MovieIcon /> : <LiveTvIcon />}
                </div>
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="movie category"
                >
                  {movie.category}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    bg: "#E0E0E0",
                    borderRadius: "full",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={15}
                  color="#E0E0E0"
                  aria-label="movie rating"
                >
                  {movie.rating}
                </Typography>
              </Grid>
            </Grid>
            <Typography color="#E0E0E0" padding={0} aria-label="movie title">
              {movie.title}
            </Typography>
          </Stack>
          <Grid
            item
            xs={2}
            sx={{ position: "absolute", top: 0, right: 0 }}
            
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                p: "1rem",
              }}
            >
              <Box
                sx={{
                  p: "1rem",
                  backgroundColor: "black",
                  borderRadius: "100%",
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
                onClick={() => handleToggleBookmark(movie.id)}
              >
                {movie.isBookmarked ? (
                  <BookmarkIcon fill={"#E0E0E0"} />
                ) : (
                  <BookmarkBorderOutlinedIcon />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MovieTrendCard;
