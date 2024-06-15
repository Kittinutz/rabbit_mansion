import "./globals.css";
import { saoChingCha } from "./font";


export const metadata = {
  title: "Rabbitmansion",
  description: "Rabbit Mansion, established in 2004 and located in Patong, Phuket, Thailand, is a locally owned hotel offering a variety of amenities and room types suitable for both leisure and business travelers, with contact information available for further details.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={saoChingCha.className}>{children}</body>
    </html>
  );
}
