import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create categories and store their real IDs
  const categoryData = [
    {
      title: "Action",
      image:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/01/10-most-anticipated-action-games-of-2024.jpg",
    },
    {
      title: "Adventure",
      image:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/02/action-adventure-games-better-played-on-a-small-screen.jpg",
    },
    {
      title: "RPG",
      image:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/10/geralt-from-the-witcher-aerith-from-ff7-remake-and-majima-from-yakuza-zero-side-by-side.jpg",
    },
    {
      title: "Strategy",
      image:
        "https://cdn.mos.cms.futurecdn.net/kmQpbNrmB8tJvQS5Nsy3Gm-1200-80.jpg",
    },
    {
      title: "Sports",
      image:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/12/split-imaages-of-nhl-24-nba-2k23-ufc-5-ea-sports-fc-24.jpg",
    },
    {
      title: "Simulation",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*0s0Qfl9XNOjJzjlRhRQCPg.jpeg",
    },
  ];

  const createdCategories = await prisma.category.createMany({
    data: categoryData,
  });

  // Fetch actual category records with IDs
  const categories = await prisma.category.findMany();
  console.log("📂 Categories created:", categories);

  // Create a Special Offer
  const specialOffer = await prisma.specialOffer.create({
    data: {
      title: "Summer Sale",
      description: "Save big on selected games during the summer sale!",
      coverImage:
        "https://images.steamusercontent.com/ugc/2424698188498043668/FDA4FDEB85A59563CF324600F9E23477861A02D5/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    },
  });

  console.log("🔥 Special Offer created:", specialOffer);

  // Map category titles to their actual IDs
  const categoryMap = new Map(categories.map((c) => [c.title, c.id]));

  // Create games with real category IDs and assign special offer ID to discounted games
  const games = [
    {
      title: "Cyberpunk 2077",
      description: "An open-world, action-adventure story set in Night City.",
      coverImage: "/placeholder.svg?height=600&width=1200",
      rating: 4.5,
      categoryId: categoryMap.get("RPG"),
      releaseDate: new Date("2020-12-10"),
      publisher: "CD Projekt Red",
      price: 59.99,
      discount: null,
    },
    {
      title: "Elden Ring",
      coverImage:
        "https://image.api.playstation.com/vulcan/img/rnd/202111/0506/hcFeWRVGHYK72uOw6Mn6f4Ms.jpg",
      rating: 4.9,
      categoryId: categoryMap.get("RPG"),
      releaseDate: new Date("2022-02-25"),
      publisher: "FromSoftware",
      price: 59.99,
      discount: 20, // 20% OFF
      specialOfferId: specialOffer.id, // Assign to Summer Sale
    },
    {
      title: "Baldur's Gate 3",
      coverImage:
        "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg",
      rating: 4.8,
      categoryId: categoryMap.get("RPG"),
      releaseDate: new Date("2023-08-03"),
      publisher: "Larian Studios",
      price: 59.99,
      discount: null,
    },
    {
      title: "Starfield",
      coverImage:
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg?t=1727384525",
      rating: 4.6,
      categoryId: categoryMap.get("RPG"),
      releaseDate: new Date("2023-09-06"),
      publisher: "Bethesda",
      price: 69.99,
      discount: null,
    },
    {
      title: "Diablo IV",
      coverImage:
        "https://image.api.playstation.com/vulcan/ap/rnd/202405/3021/7b622ad3b2ea4454c5e39caff4db1fd8302f2399abba606d.png",
      rating: 4.7,
      categoryId: categoryMap.get("RPG"),
      releaseDate: new Date("2023-06-06"),
      publisher: "Blizzard Entertainment",
      price: 69.99,
      discount: 15, // 15% OFF
      specialOfferId: specialOffer.id,
    },
    {
      title: "Hogwarts Legacy",
      coverImage:
        "https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/dR9KJAKDW2izPbptHQbh3rnj.png",
      rating: 4.5,
      categoryId: categoryMap.get("RPG"),
      releaseDate: new Date("2023-02-10"),
      publisher: "Portkey Games",
      price: 49.99,
      discount: null,
    },
    {
      title: "Resident Evil 4",
      coverImage:
        "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png",
      rating: 4.8,
      categoryId: categoryMap.get("Action"),
      releaseDate: new Date("2023-03-24"),
      publisher: "Capcom",
      price: 39.99,
      discount: 25, // 25% OFF
      specialOfferId: specialOffer.id,
    },
  ];

  await prisma.game.createMany({ data: games });

  console.log("🎮 Games created:", games.length);

  console.log("✅ Seeding complete!");
}

main().catch((e) => {
  console.error("❌ Error seeding database:", e);
  process.exit(1);
});
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
