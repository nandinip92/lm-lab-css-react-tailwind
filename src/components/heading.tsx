export const PropertyTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h2 className="font-bold text-xl mb-2 text-[#E74C3C] hover:text-[#F5B7B1] text-left">
      {title}
    </h2>
  );
};
