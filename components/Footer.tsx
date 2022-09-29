import { Container } from "./index.ts";
import { siteConfig } from "../config/site.config.ts";

export default function Footer() {
  return (
    <footer class="flex flex-row w-full h-[200px] pt-10 pb-4 bg-gray-300">
      <Container>
        <div class="text-center">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.copyrightName} •{" "}
            <a class="hover:text-underline" href={siteConfig.viewSourceUrl}>
              View Source
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
