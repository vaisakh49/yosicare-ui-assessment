export interface User {
  id: number;
  name: string;
  email: string;
  contact: string;
  age: number;
  country: string;
  status: "Verified" | "Rejected" | "Pending";
}

export const mockUsers: User[] = [
  {
    id: 102,
    name: "Ada Evans",
    email: "jablawpuh@gmail.com",
    contact: "+1 (232) 479-2902",
    age: 32,
    country: "St. Pierre & Miquelon",
    status: "Rejected",
  },
  {
    id: 34,
    name: "Adele McDaniel",
    email: "lig@gmail.com",
    contact: "+1 (227) 665-3977",
    age: 22,
    country: "Argentina",
    status: "Verified",
  },
  {
    id: 180,
    name: "Adele Mills",
    email: "hogmultep@gmail.com",
    contact: "+1 (303) 494-7324",
    age: 45,
    country: "Congo-Kinshasa",
    status: "Verified",
  },
  {
    id: 161,
    name: "Aiden Fletcher",
    email: "arhepop@gmail.com",
    contact: "+1 (412) 605-2121",
    age: 42,
    country: "Kuwait",
    status: "Rejected",
  },
  {
    id: 15,
    name: "Albert Wood",
    email: "hi@gmail.com",
    contact: "+1 (419) 627-2135",
    age: 39,
    country: "Caribbean Netherlands",
    status: "Rejected",
  },
  {
    id: 134,
    name: "Alice Bishop",
    email: "kisof@gmail.com",
    contact: "+1 (657) 598-8679",
    age: 55,
    country: "Senegal",
    status: "Rejected",
  },
  {
    id: 176,
    name: "Alma Gibbs",
    email: "liegi@gmail.com",
    contact: "+1 (326) 217-8189",
    age: 40,
    country: "Morocco",
    status: "Rejected",
  },
  {
    id: 162,
    name: "Alvin Price",
    email: "awa@gmail.com",
    contact: "+1 (517) 445-5660",
    age: 65,
    country: "Austria",
    status: "Pending",
  },
  {
    id: 65,
    name: "Amanda Gibbs",
    email: "ru@gmail.com",
    contact: "+1 (331) 350-1168",
    age: 61,
    country: "Togo",
    status: "Verified",
  },
];
