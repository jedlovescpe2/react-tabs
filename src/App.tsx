import { useEffect, useState } from "react";
import "./index.css";
import Loading from "./components/Loading";
import Alert from "./components/Alert";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
    } catch (error: any) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (hasError || !jobs) {
    return <Alert />;
  }

  if (isLoading)
    return (
      <section className="jobs-center">
        <Loading />
      </section>
    );

  return (
    
    <section className="jobs-center">
      <BtnContainer jobs={jobs}  
      setCurrentItem={setCurrentItem} 
      currentItem={currentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
