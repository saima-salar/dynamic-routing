import Link from "next/link";

export default async function products (){
  let res =await fetch("https://jsonplaceholder.typicode.com/posts")
let posts =await res.json()
console.log(posts);

  return(
    <div className="flex justify-center flex-col  items-start pl-10">
        <h1>Product List</h1>
        {
        posts.map((item:any,i:number) =>{
          return (
        <div>
          <ul>
            <li>
              <Link href={`/products/${item.id}`}>{i+1}:{item.title}</Link>
            </li>
          </ul>
        </div>
          )

        })

        }
   
    </div>
  )

}