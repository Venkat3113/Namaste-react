import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../Mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render restaurant card component with props data", () =>{
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Star Biryani Point");

    expect(name).toBeInTheDocument();
})