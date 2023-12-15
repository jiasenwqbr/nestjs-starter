import { join } from 'path';

export default {
  type: 'mysql',
  host: '192.168.140.13',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nest',
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
  synchronize: true,
};
