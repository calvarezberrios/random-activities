import { rest } from "msw";
import { v4 as uuid } from "uuid";

export const handlers = [
  // Handles a GET https://www.boredapi.com/api/activity request
  rest.get("https://www.boredapi.com/api/activity", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          accessibility: 0.1,
          activity: "Mock Activity",
          key: uuid(),
          link: "",
          participants: 1,
          price: 0,
          type: "mock",
        },
      })
    );
  }),
];
