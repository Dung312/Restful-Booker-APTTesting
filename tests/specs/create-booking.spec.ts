import { test, expect } from "@playwright/test";
import apiPaths from "../utils/apiPaths";
const bookingData = require("../data/create-booking.json");
// import { faker } from "@faker-js/faker";

// const firstName = faker.person.firstName().toString();
// const lastName = faker.person.lastName().toString();
// const totalPrice = faker.commerce.price();
// const totalPriceTrim = totalPrice.replace(/\.00$/, "");
// const checkIn = faker.date.recent();
// const checkOut = faker.date.future();
// const additionalNeeds = "".toString();
// const depositPaid = faker.datatype.boolean();

// test("should create booking success", async ({ request }) => {
//   const responseBookingId = await request.post(apiPaths.books.createBooking, {
//     data: {
//       firstname: firstName,
//       lastname: lastName,
//       totalprice: totalPrice,
//       depositpaid: depositPaid,
//       bookingdates: {
//         checkin: checkIn,
//         checkout: checkOut,
//       },
//       additionalneeds: additionalNeeds,
//     },
//   });

//   expect(responseBookingId.status()).toBe(200);
//   const responseBody = JSON.parse(await responseBookingId.text());
//   console.log(responseBody);

//   expect(responseBody.booking).toHaveProperty("firstname", firstName);
//   expect(responseBody.booking).toHaveProperty("lastname", lastName);
//   expect(responseBody.booking).toHaveProperty("totalprice", totalPriceTrim);
//   expect(responseBody.booking).toHaveProperty("depositpaid", depositPaid);
//   expect(responseBody.booking).toHaveProperty(
//     "additionalneeds",
//     additionalNeeds
//   );
// });

test("should create booking success", async ({ request }) => {
  const responseBookingId = await request.post(apiPaths.books.createBooking, {
    data: bookingData,
  });

  expect(responseBookingId.status()).toBe(200);
  const responseBody = JSON.parse(await responseBookingId.text());
  console.log(responseBody);

  expect(responseBody.booking).toHaveProperty(
    "firstname",
    bookingData.firstname
  );
  expect(responseBody.booking).toHaveProperty("lastname", bookingData.lastname);
  expect(responseBody.booking).toHaveProperty(
    "totalprice",
    bookingData.totalprice
  );
  expect(responseBody.booking).toHaveProperty(
    "depositpaid",
    bookingData.depositpaid
  );
  expect(responseBody.booking).toHaveProperty(
    "additionalneeds",
    bookingData.additionalneeds
  );
});
