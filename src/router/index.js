import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
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
    /*
     * This is how to use lazy loading. 
     * That way, the JS code for the page will be loaded only when the user navigates to it,
     * not initially when the app is loaded.
     */
    // component: () => import('../views/About.vue'),
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
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  /*
   * catchall 404
   * catchAll() will get all routes which match the pattern passed as an argument (.*).
   */
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  // This enables navigation to the previous and next page on the browser
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
