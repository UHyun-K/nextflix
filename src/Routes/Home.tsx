import { useQuery } from "react-query";
import { getMovies } from "../api";

function Home() {
    const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
    console.log(data, isLoading);
    return <div style={{ height: "200vh" }}></div>;
}
export default Home;