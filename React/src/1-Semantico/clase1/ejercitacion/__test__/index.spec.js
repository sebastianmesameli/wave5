import Home from "../index"
const { render, screen } = require("@testing-library/react");
const { getByRole } = screen;
require("@testing-library/jest-dom/extend-expect");


beforeEach(() => render(<Home />));

xdescribe("PUNTO 1", () => {
	it("Debería existir una etiqueta 'nav'", () => {
		expect(getByRole("navigation")).toBeInTheDocument();
	});

	it("Debería existir una etiqueta 'header' con el role 'banner'", () => {
		const bannerRole = getByRole("banner");
		expect(bannerRole).toBeInTheDocument();
	});
	it("Debería existir una etiqueta 'main' ", () => {
		expect(getByRole("main")).toBeInTheDocument();
	});
});

xdescribe("PUNTO 2", () => {
	it("Debería existir la etiqueta 'section' con el role 'section' ", () => {
		const sectionTag = getByRole("section");
		expect(sectionTag).toBeInTheDocument();
	});
	it("Debería existir la etiqueta 'article'", () => {
		const sectionTag = getByRole("article");
		expect(sectionTag).toBeInTheDocument();
	});

	it("Debería existir la etiqueta 'figure'", () => {
		const sectionTag = getByRole("figure");
		expect(sectionTag).toBeInTheDocument();
	});
	it("Debería existir la etiqueta 'img'", () => {
		const sectionTag = getByRole("img");
		expect(sectionTag).toBeInTheDocument();
	});
});
xdescribe('PUNTO 3',()=>{
	it("Debería existir la etiqueta 'footer'", () => {
		const sectionTag = getByRole("contentinfo");
		expect(sectionTag).toBeInTheDocument();
	});

})

