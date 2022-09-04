import fs from 'fs/promises';
import path from 'path';
import faker from 'faker';

const meals = ['squash', 'fish', 'plums', 'crickets', 'sausage', 'apples', 'superworms', 'hay', 'carrot'];
const medication = ['lactulose', 'ivermektin', 'caniverm'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const domain: Array<{ PK: string; SK: string } & Record<string, any>> = Array(50)
  .fill(null)
  .flatMap(() => {
    const petId = faker.datatype.uuid();
    const userId = faker.datatype.uuid();
    const isDeleted = Math.random() > 0.8;
    return [
      {
        PK: `PET#${petId}`,
        SK: `PET#${petId}`,
        Name: faker.name.firstName(),
        Birthday: faker.date.past(),
        Kind: faker.animal.type(),
        Avatar: faker.image.animals(),
        Bio: faker.lorem.text(),
        FavoriteMeals: faker.random.arrayElements(meals),
        Created: faker.date.past(),
        CreatedBy: userId,
        Edited: faker.date.past(),
        EditedBy: userId,
        Deleted: isDeleted ? faker.date.past() : null,
        DeletedBy: isDeleted ? userId : null,
      },
      {
        PK: `PET#${petId}`,
        SK: `USER#${userId}`,
        Relationship: 'Owner',
        Created: faker.date.past(),
        CreatedBy: userId,
        Edited: faker.date.past(),
        EditedBy: userId,
        Deleted: isDeleted ? faker.date.past() : null,
        DeletedBy: isDeleted ? userId : null,
      },
      {
        PK: `USER#${userId}`,
        SK: `PET#${petId}`,
        Relationship: 'Owner',
        Created: faker.date.past(),
        CreatedBy: userId,
        Edited: faker.date.past(),
        EditedBy: userId,
        Deleted: isDeleted ? faker.date.past() : null,
        DeletedBy: isDeleted ? userId : null,
      },
      {
        PK: `USER#${userId}`,
        SK: `USER#${userId}`,
        Name: faker.name.findName(),
        UserName: faker.internet.userName(),
        Gender: faker.name.gender(),
        Email: faker.internet.email(),
        Phone: faker.phone.phoneNumber(),
        Bio: faker.lorem.text(),
        Avatar: faker.image.people(),
        Created: faker.date.past(),
        CreatedBy: userId,
        Edited: faker.date.past(),
        EditedBy: userId,
        Deleted: Math.random() > 0.8 ? faker.date.past() : null,
        DeletedBy: Math.random() > 0.8 ? userId : null,
      },
      ...Array(faker.datatype.number(10))
        .fill(null)
        .flatMap(() => {
          const date = faker.date.past();
          return {
            PK: `PET#${petId}`,
            SK: `ENTRY#${date.toISOString()}`,
            Meals: faker.random.arrayElements(meals, 3),
            Activity: faker.datatype.number(4) + 1,
            HasPooped: faker.datatype.boolean(),
            HasBeenCleaned: faker.datatype.boolean(),
            Medication:
              Math.random() > 0.8 ? `${faker.datatype.number(100)}ml ${faker.random.arrayElement(medication)}` : null,
            Created: date,
            CreatedBy: userId,
            Edited: faker.date.past(),
            EditedBy: userId,
            Deleted: Math.random() > 0.8 ? faker.date.past() : null,
            DeletedBy: Math.random() > 0.8 ? userId : null,
          };
        }),
    ];
  });

fs.writeFile(path.resolve(__dirname, 'domain.json'), JSON.stringify(domain, null, 2))
  // eslint-disable-next-line no-console
  .then(() => console.log('Done'))
  // eslint-disable-next-line no-console
  .catch((error) => console.error(error));
