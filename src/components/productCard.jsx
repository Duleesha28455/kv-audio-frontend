import "./productCard.css";
  export default function ProductCard(props){
  console.log(props)



  return(
    <div>
      <img src={props.photoUrl}/>
      <span>{props.name}</span>
      <span>
        LKR. {props.price}
      </span>
      <p>
         {props.description}
      </p>
    </div>
  )
}