import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    // Allows to pass any route parameters as props. That way, we do not need do declare them in data().
    props: true
  }
]

const router = createRouter({
  // This enables navigation to the previous and next page on the browser
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
