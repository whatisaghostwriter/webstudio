/* eslint-disable */
/* This is a auto generated file for building the project */

import { Fragment, useState } from "react";
import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
import {
  Body as Body,
  Heading as Heading,
  Text as Text,
  Link as Link,
  Image as Image,
} from "@webstudio-is/sdk-components-react";

export const projectId = "d845c167-ea07-4875-b08d-83e97c09dcce";

export const lastPublished = "2024-07-29T12:50:07.515Z";

export const siteName = "";

export const breakpoints = [
  { id: "rKj-wYctg3-GnqL3WHN9I" },
  { id: "yH9RXhqCyeaVkrOt8MzLc", maxWidth: 991 },
  { id: "8nSCZbeS002IVwkTdoIes", maxWidth: 767 },
  { id: "7gBD25KrrbBdJYNDlhPz7", maxWidth: 479 },
];

export const favIconAsset: string | undefined = undefined;

// Font assets on current page (can be preloaded)
export const pageFontAssets: string[] = [];

export const pageBackgroundImageAssets: string[] = [];

export const CustomCode = () => {
  return <></>;
};

const Page = (_props: { system: any }) => {
  return (
    <Body className={`w-body c1jaw2zx cbipm55 ctniqj4 ctgx88l`}>
      <Heading className={`w-heading`}>{"Simple Project to test CLI"}</Heading>
      <Text className={`w-text cn3rfux`}>
        {"Please don't change directly in the fixture"}
      </Text>
      <Link href={"/another-page"} className={`w-link`}>
        {"Test another page link"}
      </Link>
      <Image
        src={"/assets/iconly_svg_converted-converted_zMaMiAAutUl8XrITgz7d1.svg"}
        width={14}
        height={16}
        className={`w-image c161qeci`}
      />
      <Image
        src={"https://picsum.photos/id/237/100/100.jpg?blur=4&grayscale"}
        className={`w-image`}
      />
    </Body>
  );
};

export { Page };
