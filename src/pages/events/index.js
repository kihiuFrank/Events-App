import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events Page</h1>

      <div>
        {data.map((event) => (
          <Link key={event.id} href={`/${event.id}`} passHref>
            <Image
              width={300}
              height={300}
              src={event.image}
              alt={event.title}
            />
            <h2>{event.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("data/data.json");
  console.log(events_categories);
  return { props: { data: events_categories } };
}
