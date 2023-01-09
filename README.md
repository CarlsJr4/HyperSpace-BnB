![enter image description here](https://cdn.sanity.io/images/nof1t6y8/projects/9fb18bab2ef31fd05b6fac5fc45737d905121568-2535x1248.png)

## Live Project: [HyperSpace BnB](https://hyperspace-bnb.vercel.app/)

See [**Components styled with TailwindCSS**](https://github.com/CarlsJr4/HyperSpace-BnB/tree/main/components) \
See [**Data fetching with getStaticProps**](https://github.com/CarlsJr4/HyperSpace-BnB/blob/main/pages/locations.js)
See [**Custom pagination component**](https://github.com/CarlsJr4/HyperSpace-BnB/blob/main/components/locations/Pagination.js) \

Hyperspace BnB is a twist on the modern vacation-booking websites of today. It includes a landing page, an informational page, and a mini-application to query listings for hotels (on other planets). It is fully-responsive and includes beautiful SVG graphics from undraw.co.

NextJS was utilized for its excellent developer experience as well as its server-side rendering capabilities. Upon visiting the "locations" page, the user is greeted with paginated listings of space hotels. This data comes from a mock API (mockend), which was configured to generate various combinations of sci-fi sounding names as well as placeholder data for each "hotel".

I utilized the getStaticProps() function to serve this data, as it is completely static. This results in a quick-loading page that is able to be parsed by search engines.

I also took the initiative to learn TailwindCSS, as its reusable utility classes took much of the hassle out of styling this website.

- Designed custom pagination and sorting functions to filter fetched data based on user input
- Utilized getStaticProps() to fetch data from a mock API and pre-render the page to the user
- Developed and styled responsive layouts using TailwindCSS
- Created reusable functional components using React hooks
