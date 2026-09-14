import React from "react";
import previewTwo from "../assets/preview2.jpeg";
import previewOne from "../assets/preview1.jpeg";
export default function OurWork() {
  const projects = [
    {
      image: previewTwo,
      orientation: "portrait",
      name: "Wedding Reception",
      location: "Lagos, Nigeria",
    },
    {
      image: previewOne,
      orientation: "landscape",
      name: "Birthday Celebration",
      location: "Lagos, Nigeria",
    },
    {
      image: previewOne,
      orientation: "landscape",
      name: "Private Dinner",
      location: "Lekki, Lagos",
    },
    {
      image: previewTwo,
      orientation: "portrait",
      name: "Wedding Celebration",
      location: "Ikoyi, Lagos",
    },
  ];

  const rows = projects.reduce((acc, item, index) => {
    const rowIndex = Math.floor(index / 2);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(item);
    return acc;
  }, []);

  console.log("log out row ", rows);
  return (
    <>
      <section className="ourwork-pad">
        <div>
          <span>Our Work</span>
          <h1>Tables worth remembering.</h1>
          <p>
            A selection of HoneyDerby occasions, from intimate celebrations to
            generous wedding tables. Open any event to experience the full
            gallery
          </p>
        </div>
      </section>
      <section className="ourwork-pad">
        <div className="ourproject-display">
          {rows.map((row, rowIndex) => (
            <div className="project-row" key={rowIndex}>
              {row.map((item) => (
                <div
                  className={
                    item.orientation === "portrait" ? "portiat-sp" : "land-dp"
                  }
                  key={item.name}
                >
                  <div>
                    <img src={item.image} alt="" />
                    <div className="project-image">
                      <h1>Event: {item.name}</h1>
                      <h1>Location: {item.location}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
