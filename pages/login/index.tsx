import Input from "../../src/components/Input"
import Arroba from '../../src/assets/login/Arroba'
import Password from '../../src/assets/login/Password'
import Button from "../../src/components/Button"
import { ChangeEvent, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { Dispatch } from 'redux'
import {useSelector, useDispatch } from "react-redux"
import { setAuthentication } from "../../src/redux/reducers/adminUserReducer"
import { addUser } from "../../src/redux/slice"
const SCREENS: any = {
  
}



export interface CredentialsInterface {
  username: string
  password: string
  recaptcha?: boolean
  userid?: number
}

const admins: CredentialsInterface[] = [
  {
    username: "daniel",
    password: '123',
    userid: 1
  },
  {
    username: "administrador",
    password: '123456',
    userid: 2
  }
]

export const users: CredentialsInterface[] = [
  {
    username: "daniell",
    password: '12345',
    userid: 5
  },
  {
    username: "daniela",
    password: '123456',
    userid: 4
  },
  {
    username: "user",
    password: '123456',
    userid: 6
  }
]
const Login = () => {
  const [credentials, setCredentials] = useState<CredentialsInterface>({
    username: '',
    password: '',
    recaptcha: false
  })

  
  const handleCredentials = (e: ChangeEvent<HTMLFormElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }
  const dispatch = useDispatch()
  const validateCaptcha = async (e: any) => {
    e.preventDefault()
    console.log(credentials)
    admins.map((option:any) => {
      if(credentials && credentials.username == option.username && credentials.password == option.password && credentials.recaptcha==true){

        dispatch(addUser(credentials.userid))
        
        console.log("inicio de secion exitoso como administrador")
        debugger
        window.location.href = "/inicio"
      }else{
        users.map((option:any)=>{
          if(credentials && credentials.username == option.username && credentials.password == option.password && credentials.recaptcha==true){
            dispatch(addUser(credentials.userid))
            console.log("inicio de secion exitoso como usuario")
            
            window.location.href = "/inicio"
          }else{
            console.log("inicio fallido")
          }
        })
      }

    })
    
  }
  
    return (
      
      <form
      className={`     flex flex-col h-screen  w-full  items-center `  }
      onSubmit={validateCaptcha}
        onChange={handleCredentials}
    >
      


      <div className=" container shadow-2xl  p-10 w-[380px] h-[450px] rounded-lg  my-auto ">
      <label className=" text-2xl font-bold my-10">
Login
      </label>
        {/* de este modo
      <Input
        placeholder="Usuario"
        Icon={<Arroba />}
        name="username"
        label="Usuario"
        type="text"
        required={true}
        autoComplete="on"
      />
       */} 
       <div className="w-full grid gap-[5px] py-5  font-semibold text-neutral-900 text-textSize7 lg:text-textSize6">
      <label  className="">
        Usuario
      </label>
      <div className="border-2 border-azulPrimary900 h-[40px] rounded-md  w-full flex items-center">
        <input
          id={"username"}
          name="username"
          placeholder="Usuario"
          className="focus:outline-none font-medium h-full text-neutral-600 w-full placeholder:text-textSize7 rounded-md placeholder:text-neutral-300"
        />
       <Arroba />
      </div>
    </div>
      {/* de este modo
      <Input
        placeholder="Contraseña"
        Icon={<Password />}
        name="password"
        label="Contraseña"
        type="password"
        required={true}
        autoComplete="on"
      />
       */} 
        <div className="w-full grid gap-[5px]  font-semibold text-neutral-900 text-textSize7 lg:text-textSize6">
      <label  className="">
      Contraseña
      </label>
      <div className="border-2 border-azulPrimary900 h-[40px] rounded-md  w-full flex items-center">
        <input
          id={"password"}
          name="password"
          type="password"
          placeholder="Contraseña"
          className="focus:outline-none font-medium h-full text-neutral-600 w-full placeholder:text-textSize7 rounded-md placeholder:text-neutral-300"
        />
       <Password />
      </div>
    </div>
      <small
        className="text-azulPrimary500 -mt-[20px] w-full text-right hover:underline cursor-pointer"
        
      >
        Olvidé mi contraseña
      </small>
      <ReCAPTCHA
            sitekey="6Ld2hnQpAAAAAIeVzEkfN0j4wHAUbSAsx0o1xXv8"
            onChange={() =>
              setCredentials({
                ...credentials,
                recaptcha: true
              })
            }
            className="  my-4"
          />
      <button
      type={"submit"}
      className={"h-[30px] bg-blue-600 text-white w-full rounded-[5px] text-textSize7 font-bold"}
    >
      Iniciar sesión
    </button>
     
      </div>
      
    </form>
    )
  
 
}

export default Login
