import { render, screen } from "@testing-library/react";
import Votes from "../components/votes/Votes";

const props = {
  votes0: 0,
  votesOver999: 3000,
  votesUnder1000: 999,
  votesMinus: -23,
  votesMinus1000: -2000,
};

const renderVotesComponent = (votes) => {
  render(<Votes votes={votes} />);
};

const testVotesDisplay = (votes, expectedText) => {
  renderVotesComponent(votes);
  const votesElement = screen.getByTestId("votes");
  expect(votesElement.textContent).toBe(expectedText);
};

describe("Votes component", () => {
  it("displays '-' when votes is equal to 0", () => {
    testVotesDisplay(props.votes0, "-");
  });

  it("displays entire number when votes is under 1000", () => {
    testVotesDisplay(props.votesUnder1000, "999");
  });

  it("displays shortened number when votes is over 999", () => {
    testVotesDisplay(props.votesOver999, "3 K");
  });

  it("displays shrotened number when votes is less than -999 (-1 k)", () => {
    testVotesDisplay(props.votesMinus1000, "-2 K");
  });
});
