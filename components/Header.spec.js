import Header from "./Header";
import { mount } from "@cypress/react";

describe("Header", () => {
  it("Should hava a link with text Home", () => {
    mount(<Header />);
    cy.get("[data-e2e=header-home]").should("contain.text", "Home");
  });
});
