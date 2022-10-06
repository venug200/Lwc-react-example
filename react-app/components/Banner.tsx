import * as React from "react";
import { Breadcrumb, BreadcrumbItem, Link } from "ng-carbon-components-react";

interface BannerProps {
  navigationItems: { text: string; link: string }[];
  heading: string;
  description: string;
}

function Banner({ navigationItems, heading, description }: BannerProps) {
  return (
    <div className="bx--row banner">
      <div className="bx--grid">
        <div className="bx--col-lg-12">
          <Breadcrumb
            className="banner-page-navigation"
            noTrailingSlash
            aria-label="Page navigation"
          >
            {(navigationItems || []).map(({ text, link }) => (
              <BreadcrumbItem key={link}>
                <Link href={link}>{text}</Link>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <h3 className="banner-heading">{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
