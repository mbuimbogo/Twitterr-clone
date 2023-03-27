import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "mbui Ptah",
      username: "mbui Ptah",
      userImg: "https://pps.whatsapp.net/v/t61.24694-24/266085040_763312398451113_5669021778600555408_n.jpg?ccb=11-4&oh=01_AdQGgiBhMM9hcVyr4FAhFENGFQSe79pSq2a1sxZU33Loow&oe=6426B67A",
      img: "https://images.unsplash.com/photo-1679872996121-5454e8f11968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text:"Very nais",
      timestamp: "2 hours ago"
    },
    {
      id: "2",
      name: "mbui Ptah",
      username: "mbui Ptah",
      userImg: "https://pps.whatsapp.net/v/t61.24694-24/266085040_763312398451113_5669021778600555408_n.jpg?ccb=11-4&oh=01_AdQGgiBhMM9hcVyr4FAhFENGFQSe79pSq2a1sxZU33Loow&oe=6426B67A",
      img: "https://images.unsplash.com/photo-1585255318860-23b5d5ea2f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjA0MzU1fHxlbnwwfHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&q=60",
      text:"Amazing",
      timestamp: "5 hours ago"
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
            <SparklesIcon className="h-5"/>
        </div>
      </div>
      <Input/>
      {posts.map((post) =>(
        <Post key={post.id} post={post}/>
      ))}
    </div>
  )
}
