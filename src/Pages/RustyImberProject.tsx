import CodecksOpenFrameWidget from "../components/CodecksOpenFrameWidget.tsx";

export const layout = "layouts/default.tsx";
export const url = "/projects/rusty-imber/";

const RustyImberProject = () => {
  return (
    <div className="project-page">
      <header className="project-header">
        <h1>Rusty Imber</h1>
        <p className="project-subtitle">Top Down Shooter</p>
      </header>

      <section className="project-overview">
        <h2>Overview</h2>
        <p>Game description, screenshots, etc...</p>
      </section>

      <section className="project-progress">
        <h2>Development Progress</h2>
        <CodecksOpenFrameWidget
          projectSlug="rusty-imber"
          title="Rusty Imber"
          className="project-codecks-rusty"
          height={"60rem"}
        />
      </section>

      {/*<section className="project-details">*/}
      {/*</section>*/}
    </div>
  );
};

export default RustyImberProject;
