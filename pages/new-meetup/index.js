import { useRouter } from "next/router";

import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const handleAddMeetup = async (meetupData) => {
    console.log("meetupData:", meetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("data:", data);
    router.push("/");
  };

  return (
    <>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </>
  );
};

export default NewMeetupPage;
