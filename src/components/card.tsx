import { PropertyTitle } from "./heading";
import { PropertyImage } from "./property-image";
import { PropertyDetails } from "./property-details";
export interface IProperty {
  property: {
    location: string;
    country: string;
    property_type: string;
    bedroom_count: number;
    bathroom_count: number;
    price: string;
    image_urls: string[];
    title: string;
    description: string;
  };
}

export const Card: React.FC<IProperty> = ({
  property: {
    title,
    location,
    country,
    property_type,
    image_urls,
    description,
    bedroom_count,
    bathroom_count,
    price,
  },
}) => {
  return (
    <div className="px-6 py-4">
      <PropertyTitle title={title} />
      <PropertyImage src={image_urls[0]} />

      <PropertyDetails details={location} />
      <PropertyDetails details={country} />
      <PropertyDetails details={property_type} />
      <PropertyDetails details={description} />
      <PropertyDetails details={bedroom_count} />
      <PropertyDetails details={bathroom_count} />
      <PropertyDetails details={price} />

      {/* <p>{location}</p>
      <p>{country}</p>
      <p>{property_type}</p>
      <p>{description}</p>
      <p>{bedroom_count}</p>
      <p>{bathroom_count}</p>
      <p>{price}</p>
     <img src={image_urls[0]} />  */}
    </div>
  );
};
