import editIcon from "../assets/images/edit.svg";
import deleteIcon from "../assets/images/delete.svg";

const DetailPage = ({ showDetail }) => {

  return (
    <div className={showDetail ? "hidden" : "visible"}>
      <div className="flex flex-col max -w-[200px] ml-6 m-2 bg-[#F5F5F5] h-screen border-none rounded-[10px]">
        <h1 className="m-3 text-lg font-bold">Task:</h1>

        <div className="m-3">
          <p className="text-sm pb-3">Learn MySQL database</p>
          <div className="border-[.5px] border-[#e1e9ebc6] rounded-full h-2 bg-white"></div>
          <p className="my-5 font-bold ">Description: </p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            molestias, deserunt soluta unde vitae iusto temporibus nostrum illum
            libero assumenda nulla molestiae corrupti pariatur eos, commodi in
            ad dolorum et?
          </p>
        </div>

        <div className="flex gap-5 justify-center mt-20">
          <button className="flex cursor-pointer">
            <img src={editIcon} alt="" />
            <span>Edit Task</span>
          </button>
          <button className="flex cursor-pointer">
            <img src={deleteIcon} alt="" />
            <span>Delete Task</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
