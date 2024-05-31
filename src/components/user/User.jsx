import { useParams } from "react-router-dom"

const User = () => {

  const { userid } = useParams()

  return (
    <div className="flex items-center justify-center w-full h-[85vh]">
      <h1 className="font-sans font-black text-[100px]">
        User { userid ? ` : ${userid}` : "" }
      </h1>
    </div>
  )
}

export default User