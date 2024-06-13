"use client";
import OperateurCard from "@/components/OperateurCard";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function Page({ params }: { params: { nni: string } }) {
  const useSearchParam = useSearchParams();
  const doc = useSearchParam.get("doc") ?? "";
  const nombre = useSearchParam.get("nombre") ?? "";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
        <OperateurCard
          title="Orange Money"
          color="#000000"
          description="Orange est là"
          image="orange"
          type="orange"
          doc={doc}
          nombre={nombre}
          nni={params.nni}
        />
        <OperateurCard
          title="MTN Money"
          color="#f7c201"
          description="Everywhere you go"
          image="mtn"
          type="mtn"
          doc={doc}
          nombre={nombre}
          nni={params.nni}
        />
        <OperateurCard
          title="MOOV Money"
          color="#0063ad"
          description="Un monde nouveau vous appelle"
          image="moov"
          type="moov"
          doc={doc}
          nombre={nombre}
          nni={params.nni}
        />
        <OperateurCard
          title="Wave"
          color="#1dc4ff"
          description="Un monde nouveau vous appelle"
          image="wave"
          type="wave"
          doc={doc}
          nombre={nombre}
          nni={params.nni}
        />
      </div>
    </Suspense>
  );
}

export default Page;
