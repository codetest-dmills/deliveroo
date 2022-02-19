import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "hooks/reduxHooks";

// Pages
import Restaurants from "pages/Restaurants/Restaurants";

// Components
import NavBar from "components/NavBar/NavBar";
import Header from "components/Header/Header";

// Actions
import { fetchNeighborhoodData } from "store/slices/neighborhoodSlice";

// Styles
import "styles/App.scss";

function App() {
  const { neighborhood, restaurants } = useAppSelector((state) => state.neighborhood);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNeighborhoodData());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Header location={neighborhood} />
      <Restaurants restaurants={restaurants} />
    </>
  );
}

export default App;
