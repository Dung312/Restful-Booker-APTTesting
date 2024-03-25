import { test, expect } from "@playwright/test";
import apiPaths from "../utils/apiPaths";
const updateBooking = require("../data/update-booking.json");
const id1 = "100";
const id2 = "20000000";

test("should update booking success", async ({ request }) => {
  const responseBookingId = await request.put(
    apiPaths.books.updateBooking + id1,
    {
      data: updateBooking,
    }
  );

  expect(responseBookingId.status()).toBe(200);
  const responseBody = JSON.parse(await responseBookingId.text());
  console.log(responseBody);

  expect(responseBody).toHaveProperty("firstname", updateBooking.firstname);
  expect(responseBody).toHaveProperty("lastname", updateBooking.lastname);
  expect(responseBody).toHaveProperty("depositpaid", updateBooking.depositpaid);
  expect(responseBody).toHaveProperty(
    "additionalneeds",
    updateBooking.additionalneeds
  );
});

test("should update bookingfailed", async ({ request }) => {
  const responseBookingId = await request.put(
    apiPaths.books.updateBooking + id2,
    {
      data: updateBooking,
    }
  );
  expect(responseBookingId.status()).toBe(404);
});
