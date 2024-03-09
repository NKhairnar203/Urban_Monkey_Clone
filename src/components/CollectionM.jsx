import "./CollectionM.css";

import data from "./db.json";

function CollectionM() {
  return (
    <>
      <div className="main-box">
        {data.collection.map((e, i) => (
          <div key={i} className="main-card">
            <img src={e.image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default CollectionM;
