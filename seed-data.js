const DATA = require('./data')
const pgPromise = require('pg-promise');
const dbDetails = {
  database: 'robots',
};
const robotDB = pgPromise(robotDB);

robotDB
  .task('drop-table', (task) => (
    task.none('DROP TABLE robots')
))
  .then( () => (
    robotDB.task('create-table', () => (
      task.none(`
        CREATE TABLE robots (
          ID SERIAL primary key,
          "username" varchar(30) NOT NULL,
          "name" varchar(40) NOT NULL,
          "avatar" varchar(100),
          "email" varchar(50),
          "university" varchar(50),
          "job" varchar(40),
          "company" varchar(50),
          "phone" varchar(25),
          "street_num" varchar(10),
          "street_name" varchar(50),
          "city" varchar(30),
          "state_or_province" varchar(40),
          "postal_code" varchar(10),
          "country" varchar(50)
        );
      `)
    ))
  ))
  .then( () => {
    console.log('DB seeded')
    robotData.forEach(robot => {
      const newRobot = {
        username: robot.username,
        name: robot.name,
        avatar: robot.avatar,
        email: robot.email,
        university: robot.university,
        job: robot.job,
        company: robot.company,
        phone: robot.phone,
        street_num: robot.address.street_num,
        street_name: robot.address.street_name,
        city: robot.address.city,
        state_or_province: robot.address.state_or_province,
        postal_code: robot.address.postal_code,
        country: robot.address.country,
      }
    })
  })
