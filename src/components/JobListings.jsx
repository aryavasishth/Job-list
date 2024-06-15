import React from 'react'
import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner.jsx';

const JobListings = ({isHome=false}) => {
    // const JobListings=isHome?jobs.slice(0,3):jobs;
    const [jobs,setJobs]=useState([]);
    const[loading,setloading]=useState(true);

    useEffect(()=>{
      const fetchJobs=async()=>{
        const apiurl=isHome?'/api/jobs?_limit=3':'/api/jobs';
        try{
        const res=await fetch(apiurl)
        const data=await res.json();
        setJobs(data);
        }
      catch (error){
        console.log('Error fetching data',error)
      }finally{
        setloading(false)
      }
    }
      fetchJobs();
    },[]);
  return (
        <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
         {isHome? 'Recent Jobs':'Browse Jobs'}
        </h2>
          {loading?(<Spinner loading={loading}/>) :
          (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {jobs.map((job)=>(
<JobListing key={job.id} job={job}/>
            ))}
          </div>
          )}
           
        
      </div>
    </section>

  )
}

export default JobListings