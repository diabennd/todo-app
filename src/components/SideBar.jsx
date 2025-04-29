import menuIcon from "../assets/images/menu.svg";

const menu = ["All", "Completed", "New"];

export default function SideBar() {
  return (
    <div className="flex flex-col min-w-[230px] m-2 bg-[#F5F5F5] h-screen border-none rounded-[10px]">
      <div className="flex flex-row justify-between m-3">
        <h1 className="font-bold text-base">Menu</h1>
        <img src={menuIcon} alt="" />
      </div>
      <div className="box-border flex flex-col items-start my-10 mx-3 ">
        {menu.map((menuItem) => (
          <button className="my-4 cursor-pointer active:border-b active:border-gray-500 hover:border-b hover:border-gray-500">{menuItem}</button>
        ))}
      </div>
    </div>
  );
}
