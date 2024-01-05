import { getServerSession } from "next-auth";
import Form from "./Form";

const SignInPage = async() => {
  const session = await getServerSession();
  if(session){
    redirect("/dashboard");
  }
  return (
    <div>
      <h1 className="text-xl p-2 ">SignIn </h1>
      <Form />
    </div>
  );
};

export default SignInPage;
