import { getServerSession } from "next-auth";
import Form from "./Form";
import {redirect} from "next/navigation"
const SignupPage = async() => {
  const session = await getServerSession();
  console.log('session in signup page, ',session)
  if(session){
    redirect("/dashboard");
  }
  return (
    <div>
      <h1>SignupPage</h1>
      <Form />
    </div>
  );
};

export default SignupPage;
