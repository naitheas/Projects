import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import Card from "./Card";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});
it('works when you click on the left and right arrows', function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(
    queryByAltText('Photo by Richard Pasquarella on Unsplash')
  ).toBeInTheDocument();
  expect(
    queryByAltText('Photo by Pratik Patel on Unsplash')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId('right-arrow');
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    queryByAltText('Photo by Richard Pasquarella on Unsplash')
  ).not.toBeInTheDocument();
  expect(
    queryByAltText('Photo by Pratik Patel on Unsplash')
  ).toBeInTheDocument();

  // move backward in the Carousel
  const leftArrow = queryByTestId('left-arrow');
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second or third
  expect(
    queryByAltText('Photo by Josh Post on Unsplash')
  ).not.toBeInTheDocument();
  expect(
    queryByAltText('Photo by Pratik Patel on Unsplash')
  ).not.toBeInTheDocument();
  expect(
    queryByAltText('Photo by Richard Pasquarella on Unsplash')
  ).toBeInTheDocument();
});
test("card renders without crashing",()=> {
  render(<Card />);
});
test("card matches snapshot",()=>{
  const {asFragment} = render(<Card/>);
	expect(asFragment()).toMatchSnapshot();
});

test("carousel renders without crashing",()=> {
  render(<Carousel />);
});
test("carousel matches snapshot",()=>{
  const {asFragment} = render(<Carousel/>);
	expect(asFragment()).toMatchSnapshot();
});

it('does not show the left arrow on the first card and does not show the right arrow on the third card', () => {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  let leftArrow = queryByTestId('left-arrow');
  const rightArrow = queryByTestId('right-arrow');
  expect(leftArrow).not.toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();

  // Click Right Arrow twice to move to third card
  fireEvent.click(rightArrow);
  leftArrow = queryByTestId('left-arrow');
  expect(leftArrow).toBeInTheDocument();
  fireEvent.click(rightArrow);
  expect(rightArrow).not.toBeInTheDocument();
});