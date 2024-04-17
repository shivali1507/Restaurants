import RestaurantCards from "./pages/RestaurantCards";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <RestaurantCards />
      </main>
    </>
  );
}
