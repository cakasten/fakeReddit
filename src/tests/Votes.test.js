import { render, screen } from "@testing-library/react";
import Votes from "../components/votes/Votes";

const props = {
  votes0: 0,
  votesOver999: 3000,
  votesUnder1000: 999,
  votesMinus: -23,
  votesMinus1000: -2000,
};

describe("Votes", () => {
  it("displays '-' when votes is equal to 0", () => {
    render(<Votes votes={props.votes0} />);
    const votesElement = screen.getByText("-", { selector: "p.votes" });
    expect(votesElement.textContent).toBe("-");
  });

  it("displays entire number when votes is under 1000", () => {
    render(<Votes votes={props.votesUnder1000} />);
    const votesElement = screen.getByText("999", { selector: "p.votes" });
    expect(votesElement.textContent).toBe("999");
  });

  it("displays shortened number when votes is over 999", () => {
    render(<Votes votes={props.votesOver999} />);
    const votesElement = screen.getByText("3 K", { selector: "p.votes" });
    expect(votesElement.textContent).toBe("3 K");
  });

  it("displays shrotened number when votes is less than -999 (-1 k)", () => {
    render(<Votes votes={props.votesMinus1000} />);
    const votesElement = screen.getByText("-2 K", { selector: "p.votes" });
    expect(votesElement.textContent).toBe("-2 K");
  });
});
