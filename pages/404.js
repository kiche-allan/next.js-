import Link from "next/link";
import { useEffect } from "react";
import Head from 'next/head'
import Router, { useRouter } from "next/router";

const NotFound = () => {
      const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)

    }, [])
    return ( 
<>
        <Head>
          <title>Kiche List | 404 Error </title>
          <meta name='keywords' content='kiche'/>
        </Head>
        <div className="not-found">
            <h1>Oooops....</h1>
            <h2>That page cant be found </h2>
            <p>Go back to <Link href="/"><a >Homepage</a></Link></p>
        </div>
</>
     );
}
 
export default NotFound;