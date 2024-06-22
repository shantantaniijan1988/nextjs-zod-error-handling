import { SignupForm } from "@/app/components/SignupForm";

const SignupPage = () => {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-medium">axios</h1>
      <div className="mt-6 max-w-xs">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
