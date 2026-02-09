import { useState } from "react";
import DescriptionCard from "./DescriptionCard";

export default function Buttons({ language }) {
  const [clicked, setClicked] = useState(null);

  return (
    <>
      <section className="container">
        <div className="d-flex justify-content-around gap-4 m-5">
          {language.map((language) => {
            const isActive = clicked === language;
            return (
              <button key={language.id} className={isActive ? "btn btn-warning" : "btn btn-primary"} onClick={() => setClicked(clicked === language ? null : language)}>
                {language.title}
              </button>
            );
          })}
        </div>
        {clicked ? <DescriptionCard title={clicked.title} description={clicked.description}></DescriptionCard> : <div className="card p-4">Nessun linguaggio selezionato </div>}
      </section>
    </>
  );
}
