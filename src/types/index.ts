export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type User = {
  id: number;
  email: String;
  username: String;
  password: String;
  name: {
    firstname: String;
    lastname: String;
  };
  address: {
    city: String;
    street: String;
    number: Number;
    zipcode: String;
    geolocation: {
      lat: String;
      long: String;
    };
  };
  phone: String;
};
