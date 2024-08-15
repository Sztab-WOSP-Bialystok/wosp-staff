export type WospInternalLink = {
  key: string;
  link: string;
  description: string;
};

export const wospInternalLinks: WospInternalLink[] = [
  {
    key: "main_staff",
    link: "https://www.wosp.org.pl/",
    description: "Strona głównego sztabu",
  },
  {
    key: "volounteer_info",
    link: "https://www.wosp.org.pl/final/dla-wolontariuszy",
    description: "Jak zostać wolontariuszem",
  },
  {
    key: "iwolontariusz",
    link: "https://iwolontariusz.wosp.org.pl/",
    description: "Rejestracja wolontariuszy",
  },
];
