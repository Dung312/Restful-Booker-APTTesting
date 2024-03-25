import { test, expect } from "@playwright/test";
import apiPaths from "../utils/apiPaths";
const bookingData = require("../data/booking-data.json");

test("should get all bookings", async ({ request }) => {
  const responseBookingId = await request.get(`${apiPaths.books.getBookings}`);
  expect(responseBookingId.status()).toBe(200);
  const responseBody = JSON.parse(await responseBookingId.text());
  console.log(responseBody);
});

test("should get booking by firstname", async ({ request }) => {
  const responseBookingId = await request.get(`${apiPaths.books.getBookings}`, {
    params: {
      firstname: bookingData.firstname,
    },
  });
  expect(responseBookingId.status()).toBe(200);
  const responseBody = JSON.parse(await responseBookingId.text());
  console.log(responseBody);
});

test("should get booking by lastname", async ({ request }) => {
  const responseBookingId = await request.get(`${apiPaths.books.getBookings}`, {
    params: {
      lastname: bookingData.lastname,
    },
  });
  expect(responseBookingId.status()).toBe(200);
  const responseBody = JSON.parse(await responseBookingId.text());
  console.log(responseBody);
});

test("should get booking by totalprice", async ({ request }) => {
  const responseBookingId = await request.get(`${apiPaths.books.getBookings}`, {
    params: {
      totalprice: bookingData.totalprice,
    },
  });
  expect(responseBookingId.status()).toBe(200);
  const responseBody = JSON.parse(await responseBookingId.text());
  console.log(responseBody);
});

test("should get booking by checkin date", async ({ request }) => {
  const responseBookingId = await request.get(`${apiPaths.books.getBookings}`, {
    params: {
      checkin: "2018-01-01",
    },
  });
  expect(responseBookingId.status()).toBe(200);
  const responseBody = JSON.parse(await responseBookingId.text());
  console.log(responseBody);
});

test("should get booking by checkout date", async ({ request }) => {
  const responseBookingId = await request.get(`${apiPaths.books.getBookings}`, {
    params: {
      checkout: "2018-03-05",
    },
  });
  expect(responseBookingId.status()).toBe(200);
  const responseBody = JSON.parse(await responseBookingId.text());
  console.log(responseBody);
});
