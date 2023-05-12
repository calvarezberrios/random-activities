import React from "react";
import { handlers } from "../mocks/handlers";
import { setupServer } from "msw/node";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import RandomActivity from "./RandomActivity";
import { rest } from "msw";
import { fetchSuccess } from "../reducers/activitiesSlice";

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("renders without errors", () => {
  renderWithProviders(<RandomActivity />);
});

test("fetches and renders random activities", async () => {
  renderWithProviders(<RandomActivity />);

  // Wait for the API request and response to be processed
  await waitFor(() => screen.getAllByTestId("activity-card"));

  // Check if the activity cards are rendered with the fetched data
  expect(screen.getAllByTestId("activity-card")).toHaveLength(1);
});

test("refreshes random activities on button click", async () => {
  renderWithProviders(<RandomActivity />);

  await waitFor(() => screen.getAllByTestId("activity-card"));

  server.use(
    rest.get("https://www.boredapi.com/api/activity", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            accessibility: 0.1,
            activity: "Mock Activity Refresh",
            key: "123456",
            link: "",
            participants: 1,
            price: 0,
            type: "mock-refresh",
          },
        })
      );
    })
  );

  const refreshButton = screen.getByRole("button");
  fireEvent.click(refreshButton);

  expect(screen.queryAllByTestId("activity-card")).toHaveLength(0);
  expect(screen.queryByText(/fetching your activities.../i)).not.toBeNull();

  await waitFor(() => screen.getAllByTestId("activity-card"));

  expect(screen.queryAllByTestId("activity-card")).toHaveLength(1);
  expect(screen.queryByText(/fetching your activities.../i)).toBeNull();
});

test("fetches random activities if localstorage is cleared", async () => {
  localStorage.clear();
  renderWithProviders(<RandomActivity />);

  expect(localStorage.getItem("activities")).toBeNull();

  expect(screen.queryByText(/fetching your activities.../i)).not.toBeNull();

  await waitFor(() => screen.getAllByTestId("activity-card"));

  expect(screen.queryAllByTestId("activity-card")).toHaveLength(1);
  expect(screen.queryByText(/fetching your activities.../i)).toBeNull();
});
