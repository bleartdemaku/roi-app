import "../components/styles/TeamMember.styles.scss";

export default function TeamMember({
  item: { id, name, lastname, biography, jobTitle, image },
}) {
  return (
    <>
      <div className="card">
        <div>
          <h2>{jobTitle}</h2>
          <p>
            {id} : {name} {lastname}
          </p>
          <p>{biography}</p>
        </div>

        <div>
          <img src={`./images/${image}`} alt="loading..." />
        </div>
      </div>
    </>
  );
}
