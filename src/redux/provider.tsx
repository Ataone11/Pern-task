import { Provider } from "react-redux";
import {store} from "./store";

const Providers=({children}:any)=>{
  return <Providers store={store}>
    {children}
  </Providers>
}
export default Providers