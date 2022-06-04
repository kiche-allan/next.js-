import Head from 'next/head'
import styles from '../../styles/kiche.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    //use it and return a value fro the function

    return {
        props: { kiche: data}

    }
}
const Kiche = ({kiche}) => {
    return ( 
<>
        <Head>
          <title>Kiche List | Pages </title>
          <meta name='keywords' content='kiche'/>
        </Head>

        <div>
            <h1>Allan Kiches Page</h1>
            {/* map thru the data and dsplay it */}
            {kiche.map(kiche => (
             <Link href = {'/kiche/'  + kiche.id} key = {kiche.id}>
                 <a className= {styles.single}>
                     <h3>{kiche.name}</h3>
                 </a>

             </Link>
            ))}
        </div>
</>
     );
}
 
export default Kiche;