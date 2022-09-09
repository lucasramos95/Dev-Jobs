import { useState, useEffect } from 'react';
import ItemResult from './ItemResult';
import Search from './Search';

const Results = () => {
    const [jobs, setJobs] = useState(null);
    const [data, setData] = useState(null);
    const [filters, setFilters] = useState([]);
    

    useEffect(() => {
        fetch('data.json', {
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setJobs(data)
            setData(data)
        })
        .catch(err => console.log(err));
    }, [])

    const addedFilters = (filterValue) => { 
        const filtersArray = [...filters];
        if (filtersArray.indexOf(filterValue) === -1) {
            filtersArray.push(filterValue);
        }
        setFilters(filtersArray);

        const jobsArray = [...jobs];
        const newResults = jobsArray.filter(job => {
            if (job.level === filterValue) {
                return job.level === filterValue
            }
            if (job.role === filterValue) {
                return job.role === filterValue
            }
            if (job.languages.includes(filterValue)) {
                return job.languages.includes(filterValue)
            }
            if (job.tools.includes(filterValue)) {
                return job.tools.includes(filterValue)
            }
        })
       setJobs(newResults)
    }

    const removeOneFilter = (filterValue) => {
        const filtersArray = [...filters];
        const newArray = filtersArray.filter(item => item !== filterValue)
        setFilters(newArray);

        const originalArray = [...data];
        setJobs(originalArray);
        sortResults(newArray, originalArray);
    }

    const sortResults = (filtersArray, jobsArray) => {
        const newJobs = [];
        for (let i = 0; i < jobsArray.length; i++) {
            const job = jobsArray[i];
            var isFiltered = filterJob(job, filtersArray)
            if (isFiltered) {
                newJobs.push(job)
            }
        }
        setJobs(newJobs);
    }

    const filterJob = (job, filters) => {
        let filterHits = 0;
        for (let i = 0; i < filters.length; i++) {
            const filter = filters[i];
            filterHits += searchJobs(job, filter);
        }
        if (filterHits === filters.length) {
            return true
        }
        else {
            return false
        }
    }

    const searchJobs = (job, filter) => {
        var hits = 0;
        for (const key in job) {
            let value = job[key];
            if (Array.isArray(value)) {
                for (const item of value) {
                    if (item === filter) {
                        hits += 1
                    }
                }
            }
            else {
                if (value === filter) {
                    hits += 1
                }
            }
        }
        return hits;
    }

    const clearAllFilters = () => {
        setJobs(data);
        setFilters([]);
    }

    return ( 
        <div className="results">
            { (filters.length > 0) 
                && <Search 
                filters={ filters } 
                removeOneFilter={ removeOneFilter }
                clearAllFilters={ clearAllFilters }/> }
            { jobs && 
                <ItemResult 
                data={ jobs } 
                addedFilters={ addedFilters }/> }
        </div>
     );
}
 
export default Results;