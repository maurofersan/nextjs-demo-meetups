import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://images.squarespace-cdn.com/content/v1/603709c4fe10c7013cc59c86/1643927361362-062ORYR7Q698R0GS4KOP/unsplash-image-PTRzqc_h1r4.jpg",
    title: "First meetup",
    address: "Some city 5, some street 12",
    description: "Some description for this frist meetup",
  },
  {
    id: "m2",
    image:
      "https://www.openaccessgovernment.org/wp-content/uploads/2021/06/49784143093_c6bcd09918_k-scaled.jpg",
    title: "Second meetup",
    address: "Some city 15, some street 112",
    description: "Some description for this second meetup",
  },
];

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   console.log("req:", req);

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
