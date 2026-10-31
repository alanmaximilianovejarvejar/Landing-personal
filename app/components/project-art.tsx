type ProjectArtProps = { art: "store" | "bakery"; preview?: string };

export default function ProjectArt({ art, preview }: ProjectArtProps) {
  return (
    <div aria-hidden="true" className={`project-art ${art}${preview ? " project-art-with-image" : ""}`}>
      {preview ? (
          <img className="project-screenshot" src={preview} width={1440} height={1000} alt="" loading="lazy" decoding="async" />
      ) : (
        <div className="mock-browser">
          <div className="mock-top"><i /><i /><i /><b /></div>
          <div className="mock-content">
            <div className="mock-sidebar" />
            <div className="mock-main"><span /><span /><span /><span /></div>
          </div>
        </div>
      )}
    </div>
  );
}
