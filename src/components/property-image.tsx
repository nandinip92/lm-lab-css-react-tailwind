export const PropertyImage: React.FC<{ src: string }> = ({ src }) => {
  return <img className="object-cover h-48 w-96" src={src} />;
};
