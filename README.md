### Static generation with data and pre-rendering

### NOTE
If user navigates from one page to other in the url, the html for that page will be pre-rendered.
If user navigates from one page to other via Links , the particular json files will be pre-loaded and no html or other contents be shown.

![getStaticprops](https://user-images.githubusercontent.com/77038785/161389159-a5046ddf-0187-4b8c-bd5f-5c94875f0753.png)

![getStatic](https://user-images.githubusercontent.com/77038785/161389243-3fc6e126-41df-48a8-9e7d-bb1b0c145e9f.png)

### npm run-script build
1. O--->(eg:- O/ or O/404)indicates it is a static page without data.
2. O--->O with filled(eg:- 0/users), indicates it is a static page with external data using getStaticProps function.
 
![nextbuild](https://user-images.githubusercontent.com/77038785/161389897-34a0a2bb-b9df-4ece-a9a5-3d69ff164c67.png)

### master-detail-UI-pattern
![master-detail-paaters](https://user-images.githubusercontent.com/77038785/161411668-f1d5d09d-3bd0-4c07-a138-9a7a5c58592e.png)
