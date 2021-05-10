import {Txt} from './style';

const data = [
    {id:1, name: 'foo', age: 42},
    {id:2, name: 'hoo', age: 53},
    {id:3, name: 'goo', age: 64, credit: 'your credit: 9999999.00'},
]

function List(){
    return(
        <section>
            {data.map((item) =>{
               // return <Person key={item.id} name={item.name}></Person> //old but gold
                return <Person key={item.id} person={item}></Person> //pass entire object
              // return <Person key={item.id} {...item}></Person>  //use spread operator
            })}
        </section>
    )
}

//for spread
// const Person = ({name,age}) =>{
//     return <h1>{name} - {age}</h1>
// }

const Person = (props) =>{
    console.log(props);
    return (
        <Txt>
            <h1>Hi there !</h1>
            {/*<h2>{props.name}</h2>*/}
            <h2>{props.person.name} - {props.person.credit}</h2>
            <h1>your age</h1>
            <h2>{props.person.age}</h2>
            <p>---</p>
        </Txt>
        
    )
}

export default List