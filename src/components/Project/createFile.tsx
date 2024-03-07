import { HiPlus } from "react-icons/hi2";

interface props {
  onClick: () => void;
  root?: boolean;
}
const CreateFile: React.FC<props> = ({ onClick, root }) => {
  return (
    <div
      className={`addFile p-1 hover:bg-neutral-200 ${!root && "invisible group-hover:visible"
        } z-20 w-fit rounded-md cursor-pointer`}
      title="Create file"
      onClick={onClick}
    >
      <HiPlus />
    </div>
  );
};
export default CreateFile;
