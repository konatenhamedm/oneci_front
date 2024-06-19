"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
//import { useRouter } from "next/navigation";
import Link from "next/link";
import path from "path";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [route, setRoute] = useState("/");
  const searchParams = useSearchParams();

  const doc = searchParams.get("doc") ?? "";
  const type = searchParams.get("type") ?? "";
  const operateur = searchParams.get("operateur") ?? "";
  const nombre = searchParams.get("nombre") ?? "";
  const [routeActuelle, setRouteActuelle] = React.useState("/");
  // alert(doc);
  useEffect(() => {
    const nni = pathname.replaceAll("/", " ").split(" ")[2];
    if (pathname.includes("/serviceIdentite")) {
      setRoute("/");
    }
    if (pathname.includes("/formulaire")) {
      setRoute("/");
    }
    if (
      pathname.includes("/achattimbre") ||
      pathname.includes("/carteresidence") ||
      pathname.includes("/suivietat")
    ) {
      setRoute("/serviceIdentite");
    }
    /* if (pathname.includes("/service")) {
      setRoute("/");
    } */
    if (pathname.includes("/verification")) {
      //alert(pathname);
      setRoute("/formulaire/" + "?type=" + type);
    }
    if (pathname.includes("/imprime")) {
      //alert(pathname);
      setRoute("/verification/" + nni + "?type=" + type);
    }
    if (pathname.includes("/operateur")) {
      setRoute("/imprime/" + nni + "?type=" + doc);
    }
    if (pathname.includes("/validation")) {
      setRoute("/operateur/" + nni + "?nombre=" + nombre + "&doc=" + doc);
    }
  }, [route, pathname, doc, operateur, nombre]);

  return (
    <>
      <div className="flex w-full justify-start bg-gradient-to-r from-[#75d4c3] to-[#f1a730] ">
        <Link
          //href={"#"}
          href={route}
          //onClick={() => router.push(route)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 "
        >
          <svg
            className=" text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </Link>

        <h3 className="text-white"> </h3>
      </div>
      <div className="grid grid-cols-3 gap-2 py-6 border-b-4 border-[#029a7e]">
        <div></div>
        <div>
          <Image
            width={250}
            height={100}
            style={{
              cursor: "pointer",
              width: "250px",
              height: "100px",
              // borderRadius: "50%",
              //objectFit: "cover",
              //border: "4px solid  grey ",
            }}
            src="/logo.png"
            alt="oneci"
          />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Header;
