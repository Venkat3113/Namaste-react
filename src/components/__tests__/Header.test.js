import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load header component with login button", ()=>{
render(
    <BrowserRouter>
    <Provider store={appStore }>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginbutton = screen.getByRole("button");

    expect(loginbutton).toBeInTheDocument();
});

it("Should load header component with login button", ()=>{
render(
    <BrowserRouter>
    <Provider store={appStore }>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginbutton = screen.getByText("Login");

    expect(loginbutton).toBeInTheDocument();
});

it("Should load header component with login button", ()=>{
render(
    <BrowserRouter>
    <Provider store={appStore }>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginbutton = screen.getByRole("button", { name:"Login"});

    expect(loginbutton).toBeInTheDocument();
});

it("Should load header component with Cart - (0 items) button", ()=>{
render(
    <BrowserRouter>
    <Provider store={appStore }>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginbutton = screen.getByText("Cart - (0 items)");

    expect(loginbutton).toBeInTheDocument();
});

it("Should load header component with Cart button", ()=>{
render(
    <BrowserRouter>
    <Provider store={appStore }>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginbutton = screen.getByText(/Cart/);

    expect(loginbutton).toBeInTheDocument();
});

it("Should Change login button to logout onClick", ()=>{
render(
    <BrowserRouter>
    <Provider store={appStore }>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginbutton = screen.getByRole("button", { name:"Login"});

    fireEvent.click(loginbutton);

    const logoutbutton = screen.getByRole("button", { name:"Logout"});

    expect(logoutbutton).toBeInTheDocument();
});