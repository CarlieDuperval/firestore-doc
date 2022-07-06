import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import credentials from "./credentials-v8.js";

const db = () => {
  if (!getApps().length) {
    const app = initializeApp({
      credential: cert(credentials),
    });
  }
  return getFirestore();
};

const carCollection = db().collection("cars");

export const getAllcars = async () => {
  const result = await carCollection.get();

  const cars = result.docs.map((car) => {
    return { id: car.id, ...car.data() };
  });
  console.log(...cars);
  return cars;
};

// create car

const createCar = async (car) => {
  const result = await carCollection.add(car);
  console.log(result);
};

// create
// Car({
//     make: "Toyota",
//     modele:"Hilux",
//     year:"2018"
// })

// createCar({
//     make: "Nissan",
//     modele:"Kiks",
//     year:"1990"
// })

// delete

const deleteCar = async (carId) => {
  const result = await carCollection.doc(carId).delete();
  console.log();
};
//deleteCar("JUpj2ecGp0htZLC7ok2Y")

// const deleteCar = async (carId) => {
//   const result = await carCollection.doc(carId).collection.delete()
//   console.log()
// }
//deleteCar('D8DeiHKBfVpImAbsdE2C')

//update

const updateCarModel = async (carId, model) => {
  const result = await carCollection.doc(carId).update({
    model: model,
  });

  console.log(result);
};

//updateCarModel("TMFm7fEEWJPLoWtmoGiH", "charger")

//getAllcars()
