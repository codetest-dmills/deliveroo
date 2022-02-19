// Styles
import RestaurantCard from "components/Card/RestaurantCard";
import "./Restaurants.scss";

interface RestaurantsProps {
  restaurants: any[];
}

function Restaurants({ restaurants = [] }: RestaurantsProps) {
  return (
    <div className="container restaurants">
      <p className="restaurants-count">{restaurants.length} Restaurants</p>
      <section className="restaurants-grid">
        {restaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
        })}
      </section>
    </div>
  );
}

export default Restaurants;
