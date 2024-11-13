import prisma from './database/prismaClient.js';

async function seed() {
  // Verifica e cria o administrador Ramon
  const adminRamonExists = await prisma.admin.findUnique({
    where: {
      email: 'ramongodinho01@gmail.com',
    },
  });

  if (!adminRamonExists) {
    await prisma.admin.create({
      data: {
        nome: 'Ramon',
        email: 'ramongodinho01@gmail.com',
        isActive: true,
      },
    });
    console.log('Administrador Ramon criado com sucesso!');
  } else {
    console.log('Administrador Ramon já existe no banco!');
  }

  // Verifica e cria o administrador Magal
  const adminMagalExists = await prisma.admin.findUnique({
    where: {
      email: 'magaladm@gmail.com',
    },
  });

  if (!adminMagalExists) {
    await prisma.admin.create({
      data: {
        nome: 'Magal',
        email: 'magaladm@gmail.com',
        isActive: true,
      },
    });
    console.log('Administrador Magal criado com sucesso!');
  } else {
    console.log('Administrador Magal já existe no banco!');
  }

  // Verifica e cria o administrador Reduzinodev
  const adminReduzinodevExists = await prisma.admin.findUnique({
    where: {
      email: 'redux@gmail.com',
    },
  });

  if (!adminReduzinodevExists) {
    await prisma.admin.create({
      data: {
        nome: 'Reduzinodev',
        email: 'redux@gmail.com',
        isActive: true,
      },
    });
    console.log('Administrador Reduzinodev criado com sucesso!');
  } else {
    console.log('Administrador Reduzinodev já existe no banco!');
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
