import HomeListItem from "./_components/HomeListItem";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4">
      <span className={`mt-8 mb-4 text-2xl`}>Join us:</span>

      <ul className="flex flex-col gap-4">
        <HomeListItem title="Portland Flash Mob!" />

        <HomeListItem title="Neighborhood Caroling" />

        <HomeListItem title="Vigil-style Learn & Sing-a-long" />
      </ul>
    </main>
  );
}
