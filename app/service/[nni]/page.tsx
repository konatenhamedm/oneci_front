"use client";
import ServiceCardSeconde from "@/components/ServiceCardSeconde";
import ServiceCard from "@/components/ServiceCard";
import React from "react";

function Page({ params }: { params: { nni: string } }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 ">
        <ServiceCard
          title="Extrait d'acte de naissance"
          description=""
          image="illustration_achat_de_timbre_oneci.svg"
          nni={params.nni}
          type="extrait"
        />
        <ServiceCard
          title="Acte de Mariage"
          description=""
          image="illustration_achat_de_timbre_oneci.svg"
          nni={params.nni}
          type="carte"
        />
        <ServiceCard
          title="Acte de deces"
          description=""
          image="illustration_achat_de_timbre_oneci.svg"
          nni={params.nni}
          type="carte"
        />

        {/*  <ServiceCard
          title="CARTE TEMPORAIRE"
          description=""
          image="illustration_achat_de_timbre_oneci.svg"
          nni={params.nni}
          type="carte"
        /> */}
      </div>

      <div className="grid grid-cols-2 gap-2 mt-[-2.5rem]">
        <ServiceCardSeconde
          title="Services d'identités"
          description=""
          image="illustration_services_vip_oneci.svg"
          nni={params.nni}
          type="carte"
        />
        <ServiceCardSeconde
          title="Certificat de residence"
          description=""
          image="illustration_services_vip_oneci.svg"
          nni={params.nni}
          type="carte"
        />
      </div>
    </>
  );
}

export default Page;
