import { OnboardingForm } from "@/components/OnboardingForm";
import { Progress } from "@/components/ui/progress";
import { useSession } from "@/lib/utils/supabase.session";
import { redirect } from "next/navigation";
import React from "react";

const OnboardingPage = async () => {
  // check if user already onboarded (for safety)
  const { response, session } = await useSession();
  const { data, error } = response;
  if (!error) {
    const user = data[0];

    if (user.first_name == "") {
      return (
        <div className='w-screen h-screen bg-green-500 flex flex-col items-center justify-center'>
          <div className='bg-white px-6 py-8 rounded-xl min-h-[40rem] flex flex-col gap-6'>
            <div>
              <Progress value={50} className='w-96' />
            </div>
            <div>
              <div className='font-semibold text-3xl'>Basic Info</div>
              <div className='text-md text-gray-500'>Tell us a bit more about yourself</div>
              <OnboardingForm />
            </div>
          </div>
        </div>
      );
    } else {
      redirect("/teacher/dashboard");
    }
  } else {
    return <div>Error</div>;
  }
};

export default OnboardingPage;
