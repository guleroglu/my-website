import { Technologies } from "../../../utils/consts";
import "./index.css";

export default function Slider() {
  const repeatedTechnologies = [...Technologies, ...Technologies];

  return (
    <div className="slider">
      <div className="slide-track">
        {repeatedTechnologies.map((item, index) => (
          <div key={index} className="slide">
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
