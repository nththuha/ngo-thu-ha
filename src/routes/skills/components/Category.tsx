type CategoryProps = {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
};

const Category = ({ name, icon, onClick }: CategoryProps) => {
  return <>{name}</>;
};

export default Category;
