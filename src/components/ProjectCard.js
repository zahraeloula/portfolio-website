import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, tools }) => {
  return (
    <Col size={10} sm={7} md={5} className="d-flex flex-column offset-md-1">
      <div className="proj-imgbx d-flex flex-column fixed-card-size">
        <img src={imgUrl} alt={title} className="w-100 card-img" />
        <div className="proj-txtx d-flex flex-column justify-between flex-grow-1">
          <h4 className="mb-2">{title}</h4> {/* Reduced margin-bottom */}
          <span className="mb-3">{description}</span> {/* Reduced margin-bottom */}
          <div className="mt-2">
            {tools.map((tool, index) => (
              <button
                key={index}
                className="btn btn-sm btn-dark mx-1 text-white"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};
