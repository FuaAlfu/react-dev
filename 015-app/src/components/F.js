import { useEffect } from "react"; 

const F = () =>{
    const [news,setNews] = useEffect(null);
    useEffect(() => {
        const options ={
            method: 'GET',
            url: 'https://dummy-d-at-dummy.com/news',
            headers: {
                'X-Requested-With': 'X-Requested-With',
                'X-Requested-key': process.env.REACT_APP_DUMMY_KEY
            }
        }
    })
    return(
        <>
          <h1>h</h1>
        </>
        )
}

export default F;