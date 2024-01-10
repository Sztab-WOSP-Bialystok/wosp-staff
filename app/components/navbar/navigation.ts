export interface NavigationElement {
  link?: string;
  name: string;
  disabled?: boolean;
  showInNavbar?: boolean;
}

export interface NavigationElementGroup extends NavigationElement {
  elements: NavigationElement[];
}

export enum Links {
  HOME = "/",
  FAQ = "/faq",
  ERROR = "/error",
  CONTACT = "/contact",
  COLLABORATION = "/collaboration",
  NEWS = "https://www.facebook.com/bialystokwosp",
  VOLOUNTEERS = "/volounteers",
  MONEY_BOX = "/money-box",
  GALLERY = "https://www.facebook.com/bialystokwosp/photos",
  MARATHONS = "/marathons",
  CONCERTS = "/concerts",
}

export const navigations: NavigationElement[] = [
  {
    name: "Pytania",
    link: Links.FAQ,
    showInNavbar: true,
  },
  {
    name: "Kontakt",
    link: Links.CONTACT,
    showInNavbar: true,
  },
  {
    name: "Strona główna",
    link: Links.HOME,
  },
  {
    name: "Bądź na bieżąco",
    elements: [
      {
        name: "Aktualności - Facebook",
        link: Links.NEWS,
        showInNavbar: true,
      },
    ],
  } as NavigationElementGroup,
  {
    name: "Wsparcie Finału",
    elements: [
      {
        name: "Dołącz do nas",
        link: Links.COLLABORATION,
        showInNavbar: true,
      },
      {
        name: "Puszka stacjonarna",
        link: Links.MONEY_BOX,
        showInNavbar: true,
      },
    ],
  } as NavigationElementGroup,
  {
    name: "Wydarzenia i imprezy",
    elements: [
      {
        name: "Maratony",
        link: Links.MARATHONS,
        showInNavbar: true,
      },
      {
        name: "Koncerty",
        link: Links.CONCERTS,
        showInNavbar: true,
      },
    ],
  } as NavigationElementGroup,
  {
    name: "Galeria - Facebook",
    link: Links.GALLERY,
    showInNavbar: true,
  },
];
