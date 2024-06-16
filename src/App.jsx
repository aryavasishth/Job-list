import React from 'react'
import {Route,createHashRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import HomeCards from './components/HomeCards'
// import JobListings from './components/JobListings'
// import ViewAllJobs from './components/ViewAllJobs'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage,{jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
//   return (
//     <>
//     <Navbar />
//     <Hero title='Become a React Dev' subtitle='Find the React job that fits your skills and needs' />
//     {/* this card is for for developer and for employers */}
//     <HomeCards />
// <JobListings />

// <ViewAllJobs/>
//     </>

const addJob=async(newJob)=>{
  //add new job
  const response=await fetch('https://gist.githubusercontent.com/aryavasishth/1c6fed37e3108b825a20bcd369ccff54/raw/bafd9d036c1ed43e56b41d587068654e43c9af1c/jobs.json',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newJob)
  })
  return await response.json()
}

const deleteJob=async(id)=>{
  const response=await fetch(`https://gist.githubusercontent.com/aryavasishth/1c6fed37e3108b825a20bcd369ccff54/raw/bafd9d036c1ed43e56b41d587068654e43c9af1c/jobs.json/${id}`,{
    method:'DELETE',
  })
  return;
}

//update job
const updateJob=async(job)=>{
  const response=await fetch(`https://gist.githubusercontent.com/aryavasishth/1c6fed37e3108b825a20bcd369ccff54/raw/bafd9d036c1ed43e56b41d587068654e43c9af1c/jobs.json/${job.id}`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(job)
  })
  return await response.json();;
}
const router=createHashRouter(
  createRoutesFromElements(
    // any routes inside this will use mainlayout
    <Route path='/' element={<MainLayout/>}> 
  <Route index element={<HomePage/>} />
  <Route path='/jobs' element={<JobsPage/>} />
  {/* : it signifies dynamic id is variable used for whatever the id we are using*/}
  <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} />
  <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
  <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}  />
  <Route path='*' element={<NotFoundPage/>} />
  </Route>
  )
);
return <RouterProvider router={router}/>
};

export default App