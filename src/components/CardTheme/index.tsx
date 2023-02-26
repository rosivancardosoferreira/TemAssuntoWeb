import React from "react";
import { type CardThemeProps } from "@/_types/CardTheme";
import { ContainerCardTheme } from "./style";
import Image from "next/image";
import Link from "next/link";

export function CardTheme({
  label,
  image,
  destiny
}: CardThemeProps): JSX.Element {
  return (
    <ContainerCardTheme>
      <Link href={destiny ?? "#"}>
        <>
          <Image
            src={image}
            alt={`É ${label}`}
            width={300}
            height={190}
            className="theme__picture"
          />
          <div className="theme__bottom">
            <p className="theme__label">{label}</p>
          </div>
        </>
      </Link>
      <div className="theme__line" />
    </ContainerCardTheme>
  );
}
