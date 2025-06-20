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

    // https://en.wikipedia.org/wiki/ISO/IEC_5218 ISO for human sex

    // Religion: Islam, Kristen Katolik, Kristen Protestan, Hindu, Budha, Kong Hu Chu
    // Needs new coll -> signup_period

    const users = [
      { _id: "aZxPqLkT01", fullname: "John Doe", nickname: "Johnny", parentName: "Jane Doe", sex: 1, religion: 1, golongan: 2, tingkatan: 5, groupID: "6EGdP6" },
      { _id: "MnOpQrStUv", fullname: "Alice Smith", nickname: "Ali", parentName: "Robert Smith", sex: 2, religion: 2, golongan: 3, tingkatan: 10, groupID: "iqOJik" },
      { _id: "XyZaBcDeF1", fullname: "Michael Tan", nickname: "Mike", parentName: "David Tan", sex: 1, religion: 6, golongan: 4, tingkatan: 12, groupID: "QssMmk" },
      { _id: "HiJkLmNoP2", fullname: "Emma Johnson", nickname: "Em", parentName: "Sophia Johnson", sex: 2, religion: 3, golongan: 2, tingkatan: 4, groupID: "gVeoRz" },
      { _id: "RsTuVwXyZ3", fullname: "David Lee", nickname: "Dave", parentName: "Kevin Lee", sex: 1, religion: 4, golongan: 3, tingkatan: 8, groupID: "lPBRld" },
      { _id: "BcDeFgHiJ4", fullname: "Sophia Brown", nickname: "Sophie", parentName: "Laura Brown", sex: 2, religion: 5, golongan: 1, tingkatan: 1, groupID: "oqdSHH" },
      { _id: "LmNoPqRsT5", fullname: "James Wilson", nickname: "Jim", parentName: "Richard Wilson", sex: 1, religion: 1, golongan: 3, tingkatan: 7, groupID: "6EGdP6" },
      { _id: "VwXyZaBcD6", fullname: "Olivia Martinez", nickname: "Liv", parentName: "Carla Martinez", sex: 2, religion: 2, golongan: 4, tingkatan: 12, groupID: "iqOJik" },
      { _id: "FgHiJkLmN7", fullname: "Ethan Taylor", nickname: "Ethan", parentName: "Megan Taylor", sex: 1, religion: 3, golongan: 1, tingkatan: 3, groupID: "QssMmk" },
      { _id: "PqRsTuVwX8", fullname: "Isabella Anderson", nickname: "Bella", parentName: "Samuel Anderson", sex: 2, religion: 4, golongan: 2, tingkatan: 5, groupID: "gVeoRz" },
      { _id: "ZaBcDeFgH9", fullname: "Daniel Thomas", nickname: "Dan", parentName: "Catherine Thomas", sex: 1, religion: 5, golongan: 3, tingkatan: 6, groupID: "lPBRld" },
      { _id: "JkLmNoPqRa", fullname: "Mia Garcia", nickname: "Mimi", parentName: "Anna Garcia", sex: 2, religion: 6, golongan: 4, tingkatan: 9, groupID: "oqdSHH" },
      { _id: "TuVwXyZaBb", fullname: "Benjamin Harris", nickname: "Ben", parentName: "Jonathan Harris", sex: 1, religion: 1, golongan: 2, tingkatan: 2, groupID: "6EGdP6" },
      { _id: "DeFgHiJkLc", fullname: "Charlotte Rodriguez", nickname: "Charlie", parentName: "Eduardo Rodriguez", sex: 2, religion: 2, golongan: 3, tingkatan: 10, groupID: "iqOJik" },
      { _id: "NoPqRsTuVd", fullname: "Henry White", nickname: "Harry", parentName: "Elizabeth White", sex: 1, religion: 3, golongan: 4, tingkatan: 13, groupID: "QssMmk" },
      { _id: "XyZaBcDeFe", fullname: "Amelia Walker", nickname: "Amy", parentName: "Michael Walker", sex: 2, religion: 4, golongan: 1, tingkatan: 4, groupID: "gVeoRz" },
      { _id: "HiJkLmNoPf", fullname: "Lucas Young", nickname: "Luke", parentName: "Sarah Young", sex: 1, religion: 5, golongan: 2, tingkatan: 6, groupID: "lPBRld" },
      { _id: "RsTuVwXyZg", fullname: "Evelyn King", nickname: "Evie", parentName: "James King", sex: 2, religion: 6, golongan: 3, tingkatan: 11, groupID: "oqdSHH" },
      { _id: "BcDeFgHiJh", fullname: "Alexander Scott", nickname: "Alex", parentName: "Robert Scott", sex: 1, religion: 1, golongan: 4, tingkatan: 12, groupID: "6EGdP6" },
      { _id: "LmNoPqRsTi", fullname: "Harper Green", nickname: "Harp", parentName: "Jessica Green", sex: 2, religion: 2, golongan: 1, tingkatan: 1, groupID: "iqOJik" },
      { _id: "VwXyZaBcDj", fullname: "Liam Adams", nickname: "Liam", parentName: "Sophia Adams", sex: 1, religion: 3, golongan: 2, tingkatan: 5, groupID: "QssMmk" },
      { _id: "FgHiJkLmNk", fullname: "Avery Nelson", nickname: "Aves", parentName: "David Nelson", sex: 2, religion: 4, golongan: 3, tingkatan: 8, groupID: "gVeoRz" },
      { _id: "PqRsTuVwXl", fullname: "Sebastian Carter", nickname: "Seb", parentName: "Daniel Carter", sex: 1, religion: 5, golongan: 4, tingkatan: 9, groupID: "lPBRld" },
      { _id: "ZaBcDeFgHm", fullname: "Ella Mitchell", nickname: "Ellie", parentName: "Matthew Mitchell", sex: 2, religion: 6, golongan: 1, tingkatan: 2, groupID: "oqdSHH" },
      { _id: "JkLmNoPqRn", fullname: "Mason Perez", nickname: "Mase", parentName: "Carlos Perez", sex: 1, religion: 1, golongan: 2, tingkatan: 3, groupID: "6EGdP6" },
      { _id: "TuVwXyZaBo", fullname: "Scarlett Torres", nickname: "Scar", parentName: "Victoria Torres", sex: 2, religion: 2, golongan: 3, tingkatan: 7, groupID: "iqOJik" },
      { _id: "DeFgHiJkLp", fullname: "Logan Bennett", nickname: "Log", parentName: "Christopher Bennett", sex: 1, religion: 3, golongan: 4, tingkatan: 10, groupID: "QssMmk" },
      { _id: "NoPqRsTuVq", fullname: "Grace Rivera", nickname: "Gracie", parentName: "Benjamin Rivera", sex: 2, religion: 4, golongan: 1, tingkatan: 4, groupID: "gVeoRz" },
      { _id: "XyZaBcDeFr", fullname: "Nathan Ramirez", nickname: "Nate", parentName: "Lucas Ramirez", sex: 1, religion: 5, golongan: 2, tingkatan: 6, groupID: "lPBRld" },
      { _id: "HiJkLmNoPs", fullname: "Chloe Hayes", nickname: "Chlo", parentName: "Samuel Hayes", sex: 2, religion: 6, golongan: 3, tingkatan: 9, groupID: "oqdSHH" },
    ];





    // const users = [
    //   { _id: "ZAhlolGL3b", fullName: "Yuda Kurnia Nurul Fikri", nickName: "Yuda", bday: new Date("2000-06-29"),
    //     sex: 1, religion: "Islam", status: "active",
    //
    //     golongan: "Pandega", tingkatan: "Pandega", group: {collection groups},
    //   },
    //
    // ];

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
