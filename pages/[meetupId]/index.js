import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupDetailPage = ({ meetupData }) => {
  return (
    <MeetupDetail
      title={meetupData.title}
      image={meetupData.image}
      description={meetupData.description}
      address={meetupData.address}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: { meetupId: "m1" },
      },
      {
        params: { meetupId: "m2" },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log("meetupId:", meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "First meetup",
        image:
          "https://images.squarespace-cdn.com/content/v1/603709c4fe10c7013cc59c86/1643927361362-062ORYR7Q698R0GS4KOP/unsplash-image-PTRzqc_h1r4.jpg",
        description: "Some city 5, some street 12",
        address: "Some description for this frist meetup",
      },
    },
  };
}

export default MeetupDetailPage;
