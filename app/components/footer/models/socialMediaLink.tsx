export type SocialMediaLink = {
  icon: React.ReactElement;
  link: string;
};

export const socialMediaLinks: SocialMediaLink[] = [
  {
    icon: <i className="bi bi-facebook"></i>,
    link: "https://www.facebook.com/bialystokwosp",
  },
  {
    icon: <i className="bi bi-instagram"></i>,
    link: "https://www.instagram.com/wosp.bialystok",
  },
  {
    icon: <i className="bi bi-tiktok"></i>,
    link: "https://www.tiktok.com/@wosp.bialystok",
  },
];
