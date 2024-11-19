import { useSelector } from "react-redux";

export default function Count() {
  const cars = useSelector((store) => store.car.cars);

  return (
    <div className="cars-list">
      {cars.map((item, index) => (
        <div key={index} className="car-item">
          <img src={item.logo} alt={item.name} className="car-logo" />
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
}
