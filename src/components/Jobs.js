import Job from "./Job";

const data = [
  {
    className: "job-red",
    title: "Full Time Sales Associate - Sydney Boutique",
    contractType: "CDI",
    country: "Australie",
    city: "Sydney",
  },
  {
    className: "job-green",
    title: "Agent de Sécurité - Pantin",
    contractType: "CDI",
    country: "France",
    city: "Pantin",
  },
  {
    className: "job-yellow",
    title: "Responsable d'Atelier (H/F)",
    contractType: "CDD",
    country: "France",
    city: "Paris",
  },
  {
    className: "job-blue",
    title: "Chef de Projets",
    contractType: "CDD",
    country: "France",
    city: "Paris",
  },
  {
    className: "job-pink",
    title: "Développeur React.js",
    contractType: "CDI",
    country: "France",
    city: "Paris",
  },
  {
    className: "job-red",
    title: "Sales Associate Stockholm",
    contractType: "CDI",
    country: "Suède",
    city: "Stockholm",
  },
  {
    className: "job-green",
    title: "Vendeur/se - Crans Montana",
    contractType: "CDI",
    country: "Suisse",
    city: "Crans Montana",
  },
  {
    className: "job-yellow",
    title: "CRM & Data Quality Analyst",
    contractType: "CDI",
    country: "USA",
    city: "New York",
  },
  {
    className: "job-blue",
    title: "Infirmier (H/F)",
    contractType: "CDI",
    country: "France",
    city: "Pantin",
  },
];

// Code ok but put in stand by to wait the lesson
// NB : Pas réussi avec une boucle for ....
// const Jobs = () => {
//   let jobs = data.map((elt) => (
//     <Job
//       key={elt.title} // this key property avoid to have the warning : Each child in a list should have a unique "key" prop
//       className={elt.className}
//       title={elt.title}
//       contractType={elt.contractType}
//       country={elt.country}
//       city={elt.city}
//     />
//   ));

//   return (
//     <div className="wrapper">
//       <div className="jobs">{jobs}</div>
//     </div>
//   );
// };

const Jobs = () => {
  return (
    <div className="wrapper">
      <div className="jobs">
        <Job
          className={data[0].className}
          title={data[0].title}
          contractType={data[0].contractType}
          country={data[0].country}
          city={data[0].city}
        />
        <Job
          className={data[1].className}
          title={data[1].title}
          contractType={data[1].contractType}
          country={data[1].country}
          city={data[1].city}
        />
        <Job
          className={data[2].className}
          title={data[2].title}
          contractType={data[2].contractType}
          country={data[2].country}
          city={data[2].city}
        />
        <Job
          className={data[3].className}
          title={data[3].title}
          contractType={data[3].contractType}
          country={data[3].country}
          city={data[3].city}
        />
        <Job
          className={data[4].className}
          title={data[4].title}
          contractType={data[4].contractType}
          country={data[4].country}
          city={data[4].city}
        />
        <Job
          className={data[5].className}
          title={data[5].title}
          contractType={data[5].contractType}
          country={data[5].country}
          city={data[5].city}
        />
        <Job
          className={data[6].className}
          title={data[6].title}
          contractType={data[6].contractType}
          country={data[6].country}
          city={data[6].city}
        />
        <Job
          className={data[7].className}
          title={data[7].title}
          contractType={data[7].contractType}
          country={data[7].country}
          city={data[7].city}
        />
        <Job
          className={data[8].className}
          title={data[8].title}
          contractType={data[8].contractType}
          country={data[8].country}
          city={data[8].city}
        />
      </div>
    </div>
  );
};

export default Jobs;
