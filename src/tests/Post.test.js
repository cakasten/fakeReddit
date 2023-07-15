import { render, screen } from "@testing-library/react";
import Post from "../components/post/Post";

it("Renders post title correctly", () => {
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

  render(<Post {...props} />);
  const titleElement = screen.getByText("Test Post");
  expect(titleElement).toBeInTheDocument();
});
