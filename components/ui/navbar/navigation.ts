export interface NavigationElement {
  link?: string;
  name: string;
  disabled?: boolean;
  showInNavbar?: boolean;
}

export interface NavigationElementGroup extends NavigationElement {
  showInNavbar: boolean;
  elements: NavigationElement[];
}

export enum Links {
  HOME = "/",
  FAQ = "/faq",
  CONTACT = "/contact",
  COLLABORATION = "/collaboration",
  NEWS = "https://www.facebook.com/bialystokwosp",
  VOLOUNTEERS = "/volounteers",
  MONEY_BOX = "/money-box",
  GALLERY = "https://www.facebook.com/bialystokwosp/photos",
  MARATHONS = "/marathons",
  CONCERTS = "/concerts",
  PARTNERS = "/partners",
  SUPPORT = "/support",
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
    name: "Wsparcie Finału",
    link: Links.SUPPORT,
    showInNavbar: false,  //repeairs temporary bug (router.push(newsNavigation.link)) in home.tsx s
  },
  {
    name: "Strona główna",
    link: Links.HOME,
  },
  {
    name: "Aktualności",
    showInNavbar: true,
    elements: [
      {
        name: "Strona Facebook",
        link: Links.NEWS,
        showInNavbar: true,
      },
    ],
  } as NavigationElementGroup,
  {
    name: "Wsparcie Finału",
    showInNavbar: true,
    elements: [
      {
        name: "Formy wsparcia",
        link: Links.SUPPORT,
        showInNavbar: true,
      },
      {
        name: "Dołącz do Sztabu",
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
    name: "Wydarzenia",
    showInNavbar: true,
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
    name: "Patnerzy",
    link: Links.PARTNERS,
    showInNavbar: true,
  },
  {
    name: "Galeria",
    link: Links.GALLERY,
    showInNavbar: true,
  },
  {
    name: "Aktualności - Facebook",
    link: Links.NEWS,
    showInNavbar: false,  //repeairs temporary bug (router.push(newsNavigation.link)) in home.tsx s
  },
];
