const data = [
    {id:1, name: 'foo', age: 42},
    {id:2, name: 'hoo', age: 53},
    {id:3, name: 'goo', age: 64},
]

function List(){
    return(
        <section>
            {data.map((item) =>{
                return <Person key={item.id}></Person>
            })}
        </section>
    )
}

const Person = (props) =>{
    console.log(props);
    return <h2> a person</h2>
}