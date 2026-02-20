import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupDetailPage = ({ meetupData }) => {
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetail
        title={meetupData.title}
        image={meetupData.image}
        description={meetupData.description}
        address={meetupData.address}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.DB_URL);
  const db = client.db();
  const collection = db.collection("meetups");
  const meetups = await collection
    .find({}, { projection: { _id: 1 } })
    .toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(process.env.DB_URL);
  const db = client.db();
  const collection = db.collection("meetups");
  const meetup = await collection.findOne({ _id: new ObjectId(meetupId) });
  client.close();

  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        description: meetup.description,
        address: meetup.address,
      },
    },
  };
}

export default MeetupDetailPage;
