// Notice: No React imports at the top!

export const title = "Gilberto Moreno";
export const layout = "layouts/default.tsx";
export const url = "/";

// Using the native Lume signature
export default (data: Lume.Data) => {
  return (
      <>
        <div className="profile-section">
          <div className="profile-container">
            <img
                src="/static/images/qxc_Squared.jpeg"
                alt="My Avatar"
                className="avatar profile-image"
            />
          </div>
          <div className="text-container">
            <h1>
              <span className="greeting">Hi, I'm</span>
              <span className="header-name-color"> Gilberto Moreno</span>
            </h1>
            <h2>Software Engineer & Gameplay Programmer</h2>
            <p>I like making things & games.</p>
            <a
                className="curriculum-vitae-button"
                href="https://drive.google.com/file/d/1-2MbmS8zoA6cRPZOukpPi7SlgJgG4L4K/view?usp=sharing"
            >
              Curriculum - Resume
            </a>
          </div>
        </div>
      </>
  );
};