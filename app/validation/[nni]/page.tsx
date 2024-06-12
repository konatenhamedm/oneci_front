"use client";
import Tuto from "@/components/Tuto";
import ValidationCard from "@/components/ValidationCard";
import useModal from "@/hooks/useModal";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function Page({ params }: { params: { nni: string } }) {
  const searchParams = useSearchParams();

  const modal = useModal();
  const operateur = searchParams.get("operateur") ?? "";
  const doc = searchParams.get("doc") ?? "";
  const nombre = searchParams.get("nombre") ?? "";

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-8 gap-2 justify-between ">
          <ValidationCard
            operateur={operateur}
            nombre={nombre}
            document={doc}
            nni={params.nni}
          />
        </div>
      </Suspense>
    </>
  );
}

export default Page;
