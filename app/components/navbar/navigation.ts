export type NavigationElement = {
  link: string;
  name: string;
  disabled?: boolean;
  showInNavbar?: boolean;
};

export enum Links {
  HOME = "/",
  FAQ = "/faq",
  CONTACT = "/contact",
  COLLABORATION = "/collaboration",
  NEWS = "https://www.facebook.com/bialystokwosp",
  VOLOUNTEERS = "/volounteers",
}

export const navigations: NavigationElement[] = [
  {
    name: "Aktualności",
    link: Links.NEWS,
    showInNavbar: true,
  },
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
    name: "Dołącz do nas",
    link: Links.COLLABORATION,
    showInNavbar: true,
  },
];
