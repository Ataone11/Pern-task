
import Link from "next/link";
import { users } from "../../pages/login";

function TaskCard({ task }) {

  return (
     <div className=" container flex flex-row mx-auto justify-center">
      
      <Link  href={`/inicio/${task.id}/edit`}>

    <div
      className="bg-white p-3 rounded-lg shadow-lg px-10 my-2 hover:cursor-pointer hover:bg-slate-300 flex w-[80%] justify-between"
      
    >
      <h3 className="font-bold text-xl flex mx-6">{task.title}</h3>
      <p className="flex mx-6">{task.description}</p>

      {users.find((id)=> id.userid===task.userid)?.username}
      
      
    </div>
    </Link>
    </div>
  );
}

export default TaskCard;
