# teaching-siteBackend_byRutuja
netlify:
https://teaching-site-by-rutuja.netlify.app/

frontEnd:
https://github.com/iam-rutuja/teaching_site_byRutuja

backend:
https://github.com/iam-rutuja/teaching-siteBackend_byRutuja 

video:
https://drive.google.com/file/d/1TEo6WgQn0nlvX2Mjx3L8bN12tBR16297/view?usp=sharing

Instructor
rutujayadav17@gmail.com
password:  rutuja

admin
adityakadam423@gmail.com
password: aditya

1. Starting with DB, I have created 4 collections which includes User, Instructor, Courses and Lectures collections.
2. User collection will have signed up user data.
3. Instructor collection will have all the instructors data.
4. Courses collection includes all the courses data with lectures information.
5. Lectures collection will have course id, date and instructor id which informs about specific course assigned to specific insructor and specific date.
6. User will have to signup to authenticate email.  http://localhost:3004/api/signup
7. User will be notified by email and will get link to signup clicking on which user data will be stored in db.  http://localhost:3004/api/account-activate
8. After signup user have to signin to check features.. http://localhost:3004/api/signin
9. Depending on user role i.e. admin or instructor, they will be redirected to the following page.  http://localhost:3004/api/user
10. If user is admin, they will be able to add course(http://localhost:3004/api/course) and retrive all the courses(http://localhost:3004/api/courses).
11. Admin user will also be able to assign specific lecture on specific date to instructor.
12. Same instructor will not be able to assign lecture on same date.
13. If user is admin, they will be able to see all the lectures assigned them with respective date.
14. After signin, user data will be stored in localstorage and user token will be stored in cookie.
15. User can also signout of the application which will delete token and user data from cookie and localstorage.
