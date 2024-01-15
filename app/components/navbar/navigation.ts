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
  MONEY_BOX = "/money-box",
  GALLERY = "https://www.facebook.com/bialystokwosp/photos",
  MARATHONS = "/marathons",
  CONCERTS = "/concerts",
  PARTNERS = "/partners",
  SUPPORT = "/support",
}

export const navigations: NavigationElement[] = [
{
    name: "Aktualności",
    link: Links.NEWS,
    showInNavbar: false,
  },
  {
    name: "Partnerzy",
    link: Links.PARTNERS,
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
    name: "Wsparcie Finału",
    link: Links.SUPPORT,
    showInNavbar: true,
  },
  {
    name: "Strona główna",
    link: Links.HOME,
  },
  {
    name: "Dołącz do nas",
    link: Links.COLLABORATION,
    showInNavbar: false,
  },
  {
    name: "Biegi",
    link: Links.MARATHONS,
    showInNavbar: true,
  },
  {
    name: "Koncerty",
    link: Links.CONCERTS,
    showInNavbar: false,
  },
  {
    name: "Puszka stacjonarna",
    link: Links.MONEY_BOX,
    showInNavbar: true,
  },
  {
    name: "Galeria",
    link: Links.GALLERY,
    showInNavbar: true,
  },
  {
    name: "Aktualności",
    link: Links.NEWS,
    showInNavbar: false,
  },
];
