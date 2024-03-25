import { test, expect } from "@playwright/test";
import apiPaths from "../utils/apiPaths";
const bookingData = require("../data/booking-data.json");
const id1 = "1637";
const id2 = "abc";

test("should get booking by id success", async ({ request }) => {
  const responseBookingId = await request.get(
    `${apiPaths.books.getBooking}` + id1
  );
  expect(responseBookingId.status()).toBe(200);
  expect(responseBookingId.body).toHaveProperty("firstname");
  expect(responseBookingId.body).toHaveProperty("lastname");
  expect(responseBookingId.body).toHaveProperty("totalprice");
  expect(responseBookingId.body).toHaveProperty("depositpaid");
  expect(responseBookingId.body).toHaveProperty("checkin");
  expect(responseBookingId.body).toHaveProperty("checkout");
  const responseBody = JSON.parse(await responseBookingId.text());
  console.log(responseBody);
});

test("should get booking by id failed", async ({ request }) => {
  const responseBookingId = await request.get(
    `${apiPaths.books.getBooking}` + id2
  );
  expect(responseBookingId.status()).toBe(404);
});
