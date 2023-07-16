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

describe("Post component", () => {
  it("Renders post title correctly", () => {
    render(<Post {...props} />);
    const titleElement = screen.getByText(props.title, {
      selector: "h1.title",
    });
    expect(titleElement).toBeInTheDocument();
  });

  it("Renders votes correctly", () => {
    render(<Post {...props} />);
    const votesElement = screen.getByText(props.votes, { selector: "p" });
    expect(votesElement).toBeInTheDocument();
  });

  it("Renders the author correctly", () => {
    render(<Post {...props} />);
    const authorElement = screen.getByText(`Posted by: ${props.author}`, {
      selector: "p.author",
    });
    expect(authorElement).toBeInTheDocument();
  });
});
