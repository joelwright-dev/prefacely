import { ArrowRight } from "tabler-icons-react";

const Details = ({ icon, title, subtitle, description, url, image }) => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        {icon}
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <a>
          Learn more <ArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Details;
