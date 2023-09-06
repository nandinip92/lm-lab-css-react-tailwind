export const PropertyDetails: React.FC<{ details: string | number }> = ({
  details,
}) => {
  return <p className="text-base text-left">{details}</p>;
};
