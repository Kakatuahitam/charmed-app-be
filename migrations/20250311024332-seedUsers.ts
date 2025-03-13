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
      { _id: "ZAhlolGL3b", firstName: "Yuda Kurnia", lastName: "Nurul Fikri" },
      { _id: "P8rXDnneTB", firstName: "Yudi Kurnia", lastName: "Nuril Fikri" },
      { _id: "7LoQW1WmfG", firstName: "Yudo Kurnia", lastName: "Nurol Fikri" },
      { _id: "KjLd9TgX4m", firstName: "Agus", lastName: "Santoso" },
      { _id: "Qw8Vp2NZcL", firstName: "Budi", lastName: "Suharto" },
      { _id: "MvGzD1XKpT", firstName: "Dian", lastName: "Prasetyo" },
      { _id: "XJ72TpLv89", firstName: "Eka", lastName: "Widodo" },
      { _id: "TgL5VzKPQR", firstName: "Fajar", lastName: "Rahmat" },
      { _id: "YHXP92GZKd", firstName: "Gilang", lastName: "Saputra" },
      { _id: "LZ8QKTV1XW", firstName: "Hendra", lastName: "Putra" },
      { _id: "NWMQ4LZPTV", firstName: "Irfan", lastName: "Susanto" },
      { _id: "GXT8PKLZQW", firstName: "Joko", lastName: "Hartono" },
      { _id: "2V8XPQKTLZ", firstName: "Kiki", lastName: "Wahyudi" },
      { _id: "ZQKTL8XPVW", firstName: "Lutfi", lastName: "Maulana" },
      { _id: "XPQKTLZV8W", firstName: "Miko", lastName: "Hidayat" },
      { _id: "QLZT8XPVKD", firstName: "Nanda", lastName: "Fadillah" },
      { _id: "KTLZ8XPQWV", firstName: "Oka", lastName: "Septian" },
      { _id: "PQLZT8XKVW", firstName: "Pandu", lastName: "Ramadhan" },
      { _id: "TLZQ8XPVKD", firstName: "Qori", lastName: "Rizki" },
      { _id: "LZTQ8XPKVW", firstName: "Rian", lastName: "Sutanto" },
      { _id: "ZTQL8XPVKD", firstName: "Sandi", lastName: "Bachtiar" },
      { _id: "TQZL8XPKVW", firstName: "Taufik", lastName: "Iskandar" },
      { _id: "QZTL8XPVKD", firstName: "Udin", lastName: "Suryadi" },
      { _id: "ZTLQ8XPKVW", firstName: "Vino", lastName: "Kusuma" },
      { _id: "TLQZ8XPVKD", firstName: "Wahyu", lastName: "Jatmiko" },
      { _id: "LQZTL8XPVK", firstName: "Xavier", lastName: "Putrawan" },
      { _id: "QZTLX8PKVW", firstName: "Yoga", lastName: "Permadi" },
      { _id: "ZTLQX8PKVW", firstName: "Zaki", lastName: "Firmansyah" },
      { _id: "TLQZXP8PKD", firstName: "Alif", lastName: "Nurhadi" },
      { _id: "LQZTXP8PKW", firstName: "Bagas", lastName: "Saputra" },
      { _id: "QZTLXP8PKD", firstName: "Cahyo", lastName: "Gunawan" },
      { _id: "ZTLQXP8PKW", firstName: "Daffa", lastName: "Syahputra" },
    ];

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
