//this is a dynamic route, so we ut square brackets, coz its a route parameter


//what routes and pages to create at build time, so use getstticpaths
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();


    const paths = data.map(kiche => {
       
    //use it and return a value fro the function
    return {
        params: { id : kiche.id.toString() }
    }
    })

    return {
        paths, 
        fallback: false

    }}

    export const getStaticProps = async (context) => {
        const id = context.params.id
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        const data = await res.json();

        

        return {
            props: { kiche: data}
        }
    }
const Details = ( {kiche}) => {
    return ( 
       <div>
           <h1>{kiche.name}</h1>
           <p>{kiche.email}</p>
           <p>{kiche.website}</p>
           <p>{kiche.address.city}</p>
       </div>
        
     );
}
 
export default Details;