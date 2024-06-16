import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
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
  const res=await fetch('/api/jobs',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newJob)
  })
  return;
}

const deleteJob=async(id)=>{
  const res=await fetch(`/api/jobs/${id}`,{
    method:'DELETE',
  })
  return;
}

//update job
const updateJob=async(job)=>{
  const res=await fetch(`/api/jobs/${job.id}`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(job)
  })
  return;
}
const router=createBrowserRouter(
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