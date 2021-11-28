import './SideBar.css';

const toggleClassForMargin = () => {
  const el = document.getElementById('box-container');
  el.className === 'main' ? el.className = 'toggleBoxMargin' : el.className = 'main';
}

const toggleClassForIcon = () => {
  const el = document.getElementById('sidebar-icon');
  el.className === 'gg-sidebar-open' ? el.className = 'gg-close-o' : el.className = 'gg-sidebar-open';
}

const toggleClasses = () => {
  toggleClassForMargin();
  toggleClassForIcon();
}

function SideBar() {
  return (
    <div className="sideBarMain">
      <input type="checkbox" className="openSideBar" id="openSideBarMenu" />
      <label htmlFor="openSideBarMenu" className="sideBarToggle">
        <div className="fas" onClick={toggleClasses}>
          <i className="gg-sidebar-open" id="sidebar-icon"></i>
        </div>
      </label>
      <div id="sideBarMenu">
        <div className="sidebar">
          <ul className="sideBarItems"></ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
