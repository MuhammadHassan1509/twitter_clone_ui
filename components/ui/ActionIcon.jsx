// components/ui/ActionIcon.jsx
const ActionIcon = ({ icon, count }) => (
  <div className="hover:cursor-pointer hover:text-gray-300 flex items-center gap-1">
    <span className="material-symbols-outlined">{icon}</span> {count}
  </div>
);

export default ActionIcon;
