import { render, screen } from "@testing-library/react";
import Post from "../components/post/Post";

const props = {
  votes: 10,
  title: "Test Post",
  author: "Tester",
  subreddit: "TestReact",
  video: null,
  bodyImg: null,
  postData: { data: { selftext: "Sample text" } },
  handleClick: jest.fn(),
};

it("Renders post title correctly", () => {
  render(<Post {...props} />);
  const titleElement = screen.getByText("Test Post");
  expect(titleElement).toBeInTheDocument();
});

it("Renders the votes correctly", () => {
  render(<Post {...props} />);
  const votesElement = screen.getByText("10");
  expect(votesElement).toBeInTheDocument();
});
