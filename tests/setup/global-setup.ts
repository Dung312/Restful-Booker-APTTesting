import { FullConfig, expect, request } from "@playwright/test";
import apiPaths from "../utils/apiPaths";

async function globalSetup(config: FullConfig) {
  const userName = process.env.USERNAME!;
  const password = process.env.PASSWORD!;
  const requestContext = await request.newContext();

  const responseAuth = await requestContext.post(apiPaths.account, {
    data: {
      userName: userName,
      password: password,
    },
  });
  expect(responseAuth.status()).toBe(200);
  expect(responseAuth.ok()).toBeTruthy();
  const body = await responseAuth.json();
  process.env.TOKEN = body.token;
}

export default globalSetup;
