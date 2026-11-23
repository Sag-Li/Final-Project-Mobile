export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Shelter {
  longitude: number;
  latitude: number;
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates: Coordinates;
  animalCount: number;
}