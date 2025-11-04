const { PrismaClient } = require('./generated/prisma');
const fs = require('fs');

const prisma = new PrismaClient();

async function restoreData() {
  try {
    console.log('Starting data restoration...');
    
    // Read the JSON data
    const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    
    // Clear existing data (in reverse order due to foreign keys)
    console.log('Clearing existing data...');
    await prisma.companies.deleteMany();
    await prisma.players.deleteMany();
    await prisma.roles.deleteMany();
    await prisma.wings.deleteMany();
    
    // Insert roles first (no dependencies)
    console.log('Inserting roles...');
    for (const role of data.tables.roles) {
      await prisma.roles.create({
        data: {
          id: role.id,
          name: role.name,
          description: role.description
        }
      });
    }
    
    // Insert wings (no dependencies)
    console.log('Inserting wings...');
    for (const wing of data.tables.wings) {
      await prisma.wings.create({
        data: {
          id: wing.id,
          name: wing.name,
          description: wing.description,
          max_people: wing.max_people
        }
      });
    }
    
    // Insert players (depends on roles)
    console.log('Inserting players...');
    for (const player of data.tables.players) {
      await prisma.players.create({
        data: {
          id: player.id,
          name: player.name,
          surname: player.surname,
          birthdate: player.birthdate ? new Date(player.birthdate) : null,
          phone: player.phone,
          dni: player.dni,
          role_id: player.role_id,
          password: player.password
        }
      });
    }
    
    // Insert companies (depends on wings)
    console.log('Inserting companies...');
    for (const company of data.tables.companies) {
      await prisma.companies.create({
        data: {
          id: company.id,
          name: company.name,
          CIF: company.CIF,
          description: company.description,
          phone: company.phone,
          email: company.email,
          website: company.website,
          wing_id: company.wing_id
        }
      });
    }
    
    console.log('Data restoration completed successfully!');
    
    // Verify the data
    console.log('\nVerifying restored data:');
    const rolesCount = await prisma.roles.count();
    const wingsCount = await prisma.wings.count();
    const playersCount = await prisma.players.count();
    const companiesCount = await prisma.companies.count();
    
    console.log(`- Roles: ${rolesCount}`);
    console.log(`- Wings: ${wingsCount}`);
    console.log(`- Players: ${playersCount}`);
    console.log(`- Companies: ${companiesCount}`);
    
  } catch (error) {
    console.error('Error restoring data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

restoreData();