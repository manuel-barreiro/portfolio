interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center w-full">
      {title}
      <span className="hidden sm:inline-flex md:w-60 lg:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
