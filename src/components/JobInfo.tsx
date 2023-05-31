import Duties from "./Duties";

export interface iJob {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

const JobInfo = ({ jobs,currentItem }: { jobs:iJob[],currentItem:number }) => {
  const {title, dates, duties, company } = jobs[currentItem];
  return (
    <article className="job-info">
      <h2>{title}</h2>
      <div className="job-company">{company}</div>
      <div className="job-date">{dates}</div>

      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
