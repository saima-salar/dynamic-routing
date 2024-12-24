import Link from "next/link";

export default async function  products  (props:{params:{proDetail:string}}){
  let res =await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.proDetail}`)
let posts =await res.json()
console.log(posts);

  return(
    <div className="flex justify-center flex-col  items-center">
        <h1 className="text-2xl font-bold ">Product Detail</h1>
        <p>{posts.id}{posts.body}</p>
 
    </div>
  )

}