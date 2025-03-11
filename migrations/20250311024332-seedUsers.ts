/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});

    const users = [
      { firstName: "Yuda Kurnia", lastName: "Nurul Fikri" },
      { firstName: "Yudi Kurnia", lastName: "Nuril Fikri" },
      { firstName: "Yudo Kurnia", lastName: "Nurol Fikri" },
    ]

    try {
      await db.collection('users').insertMany(users);
    } catch (e) {
      console.log(e);
    }
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db.collection('users').drop();
};
