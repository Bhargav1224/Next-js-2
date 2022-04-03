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

### FallBack(true,false,blocking)
fallback is mandatory to have getStaticPaths function, it accepts 3-values i.e; true, false, blocking
### fallback: false

![fallback-0](https://user-images.githubusercontent.com/77038785/161413349-b353d659-2965-47ca-9b5e-c82d3cbdec7d.png)

![fallback1](https://user-images.githubusercontent.com/77038785/161413419-5dea61de-4adc-41ba-b2bb-fadd73b54ab0.png)

![fallback-2](https://user-images.githubusercontent.com/77038785/161413367-e58495c9-6679-44b7-9f1e-8aa0f26b1700.png)

### fallback: true
![fallback-true-1](https://user-images.githubusercontent.com/77038785/161414291-6b86a5ba-5fab-45c7-9ca3-5bc707242579.png)

![fallback-true-2](https://user-images.githubusercontent.com/77038785/161415507-18a707ac-a909-4bd0-b3c8-231e9bb3de02.png)

### fallback: blocking

![fallback-blocking](https://user-images.githubusercontent.com/77038785/161416423-2e78f992-9c86-4932-ab8d-ba4737606af7.png)

![fallback-blocing-2](https://user-images.githubusercontent.com/77038785/161416427-9b678e27-df7e-40e5-8f84-88a6e8de871c.png)




