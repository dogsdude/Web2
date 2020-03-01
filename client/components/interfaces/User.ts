export interface User {
  _id: string;
  fullName: {
      firstName: string,
      middleName: string,
      lastName: string };
  username: string;
  email: string;
  __v: number;
}
