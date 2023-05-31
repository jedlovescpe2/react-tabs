import { iJob } from "./JobInfo";

const BtnContainer = ({
  jobs,
  setCurrentItem,
  currentItem,
}: {
  jobs: iJob[];
  setCurrentItem: (id: number) => void;
  currentItem: number;
}) => {
  return (
    <div className="btn-container">
      {jobs.map((job,index) => {
        return (
          <button
            key={job.id}
            className={index===currentItem ? 'job-btn active-btn':'job-btn'}
            onClick={()=>setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
