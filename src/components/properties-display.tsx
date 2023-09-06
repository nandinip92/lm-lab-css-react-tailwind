import { propertyData } from "../data/data";
import { Card } from "./card";

export const PropertiesDisplay = () => {
  console.log(propertyData.length);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <ul>
        {propertyData.map((p) => (
          <Card property={p} />
        ))}
      </ul>
    </div>
  );
};
