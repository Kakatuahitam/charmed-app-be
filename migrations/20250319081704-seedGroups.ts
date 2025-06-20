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

    const groups = [
      { _id: "6EGdP6", name: "Ungu", type: "Barung" },
      { _id: "iqOJik", name: "Merah", type: "Barung" },
      { _id: "QssMmk", name: "Orange", type: "Barung" },
      { _id: "gVeoRz", name: "Kuning", type: "Barung" },
      { _id: "lPBRld", name: "Pink", type: "Barung" },
      { _id: "oqdSHH", name: "Biru", type: "Barung" },
    ];

    try {
      await db.collection('groups').insertMany(groups);
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
    await db.collection('groups').drop();
};
