"use client";
import Navbar from "@/components/common/navbar";
import SurveyListNavbar from "@/components/common/surveyListNavbar"
import StyledComponentsRegistry from "./lib/registry";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "../styles/DefaultTheme";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html>
      <ThemeProvider theme={theme}>
        <body>
          <StyledComponentsRegistry>
            <Navbar />
            {/* {(pathname === "/" || pathname === "/login" || pathname === "/signup") &&
              <Navbar />
            } */}
            {/* {(pathname === '/instantWinSurveyList' || pathname === '/timeattackSurveyList' || pathname === '/instantWinConfirm') &&
              <SurveyListNavbar />
            } */}
            {children}
          </StyledComponentsRegistry>
        </body>
      </ThemeProvider>
    </html>
  );
}
