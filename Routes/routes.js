const express=require('express')
const router=new express.Router()
projectController=require('../Controls/projectControls')


// admindetails
router.get('/admin/details',projectController.getAdmin)

// all projects
router.get('/projects/all',projectController.getAllProjects)

// login
router.post('/admin/login',projectController.login)

// add
router.post('/dashboard/add-project',projectController.add)

// add Notifications
router.post('/dashboard/add-careers',projectController.addCareer)

// all projects
router.get('/career/all',projectController.getAllCareers)

// add enquiries
router.post('/enquiry',projectController.addEnquiry)

// all enq
router.get('/dashboard/enquiries',projectController.getAllEnquiries)

// delete post
router.delete('/careers/:_id',projectController.deletePost)

// delete project
router.delete('/dashboard-projects/:_id',projectController.deleteProject)

// get one project
router.get('/edit-project/:_id',projectController.getSelectedProject)

// add enquiries
router.post('/edit-project/:_id',projectController.updateProject)

// delete enq
router.delete('/enquiries/:_id',projectController.deleteEnq)

module.exports=router