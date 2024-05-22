import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const postOne = await prisma.post.create({
    data: {
      title: 'Hello World',
      content: 'This is a new post',
      published: true,
      imageUrl: 'https://images.unsplash.com/photo-1606768666749-cd45fad1cc69',
    },
  });
  const postTwo = await prisma.post.create({
    data: {
      title: 'Hello World 2',
      content: 'This is another new post',
      published: true,
      imageUrl: 'https://images.unsplash.com/photo-1606768666749-cd45fad1cc69',
    },
  });
  const postThree = await prisma.post.create({
    data: {
      title: 'Hello World 3',
      content: 'This is a third new post',
      published: false,
      imageUrl: 'https://images.unsplash.com/photo-1542565506741-6483f00a150d',
    },
  });
  const postFour = await prisma.post.create({
    data: {
      title: 'Hello World 4',
      content: 'This is a fourth new post',
      published: true,
      imageUrl: 'https://images.unsplash.com/photo-1606768666749-cd45fad1cc69',
    },
  });
  const postFive = await prisma.post.create({
    data: {
      title: 'Hello World 5',
      content: 'This is a fifth new post',
      published: true,
      imageUrl: 'https://images.unsplash.com/photo-1542565506741-6483f00a150d',
    },
  });
  const postSix = await prisma.post.create({
    data: {
      title: 'Hello World 5',
      content: 'This is a sixth new post',
      published: false,
      imageUrl: 'https://images.unsplash.com/photo-1521200052569-1799509456d3',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
