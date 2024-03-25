import { test, expect } from "@playwright/test";
import apiPaths from "../utils/apiPaths";
const id = "120";

test("should delete booking success", async ({ request }) => {
  const responseBookingId = await request.delete(
    apiPaths.books.deleteBooking + id
  );
  expect(responseBookingId.status()).toBe(201);

  //confirm booking deleted
  const responseBookingDeleted = await request.get(
    apiPaths.books.getBooking + id
  );
  expect(responseBookingDeleted.status()).toBe(404);
});
