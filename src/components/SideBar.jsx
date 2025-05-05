import burgerIcon from "../assets/images/menu.svg";

export default function SideBar({ setMenu }) {
  const tabs = ["All", "Current", "Completed"];

  return (
    <div className="flex flex-col min-w-[230px] m-2 bg-[#F5F5F5] h-screen border-none rounded-[10px]">
      <div className="flex flex-row justify-between m-3">
        <h1 className="font-bold text-base">Menu</h1>
        <img src={burgerIcon} alt="" className="cursor-pointer"/>
      </div>
      <div className=" flex flex-col justify-start my-10 mx-3 ">
        {tabs.map((tab, tabIndex) => (
          <button
            onClick={() => {
              setMenu(tab);
            }}
            key={tabIndex}
            className="flex pl-5 py-1 justify-start mt-4.5 w-full cursor-pointer "
          >
            {tab}
          </button>
        ))}
        {/* <button className="box-border my-4 w-full cursor-pointer active:border-b active:border-gray-500 hover:border hover:border-gray-500">New Task</button> */}
      </div>
    </div>
  );
}
