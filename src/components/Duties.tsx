import { BiChevronsRight } from "react-icons/bi";

import { v4 as uuidv4} from 'uuid'

const Duties = ({duties}:{duties:string[]}) => {
  return (
    <section>
      {duties.map(duty => {
        const id = uuidv4();
        return (
          <div key={id} className="job-desc">
            <BiChevronsRight className="job-icon" />
            <p key={id}>
            {duty}
            </p>
          </div>
        )

      })}
    </section>
  );
};
export default Duties;
