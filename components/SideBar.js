import { FaAmazon, FaAndroid, FaAngellist } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
		flex flex-col
		bg-gray-900 text-white shadow-lg
		"
    >
      <SideBarIcon icon={<FaAmazon size="28" />} text="Amazon" />
      <SideBarIcon icon={<FaAndroid size="28" />} text="Android" />
      <SideBarIcon icon={<FaAngellist size="28" />} text="Angel List" />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
