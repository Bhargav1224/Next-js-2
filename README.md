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

### SSG-ISSUES ( Incremental Static Regeneration )

![SSG-issues](https://user-images.githubusercontent.com/77038785/161416757-ea3f4222-4300-4493-9489-fabe953aa51b.png)

![SSG-issues-2](https://user-images.githubusercontent.com/77038785/161416764-0cec4ca7-bcbe-4728-9851-0e8e9ca911c5.png)

![SSG-issue-3](https://user-images.githubusercontent.com/77038785/161416765-c9677c2a-5d70-448d-9c2d-e8cd9d47d22f.png)

![SSG-issues-4](https://user-images.githubusercontent.com/77038785/161416770-7d9578bd-873c-4c86-a5bf-74352c59299d.png)

### ISG (steal data)

![ISG](https://user-images.githubusercontent.com/77038785/161420167-58eb9953-a582-47eb-a8a2-9de162b0f156.png)

![stale-revalidate](https://user-images.githubusercontent.com/77038785/161424919-4ef30e23-feb3-4c01-9d5e-bad5f3c8553e.png)

![Regeneration](https://user-images.githubusercontent.com/77038785/161424943-456e453c-f07e-4023-9042-0c63cb655931.png)

### Static generation and it's problems
![pre-render](https://user-images.githubusercontent.com/77038785/161427691-f134b8b1-3cd9-4e09-aba2-f84178d3a092.png)

![problem-1](https://user-images.githubusercontent.com/77038785/161427781-16243e5e-6e40-4ba0-948b-c96065f60e07.png)

![problem-2](https://user-images.githubusercontent.com/77038785/161427863-b63b184b-4b0c-4738-ac14-0f1d3aa54b3e.png)

