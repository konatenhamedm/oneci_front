"use client";
import ServiceCard from "@/components/ServiceCard";
import ServiceIdentiteComponent from "@/components/ServiceIdentite";
import React from "react";

function Page() {
  return (
    <>
      <div className="grid grid-cols-6 gap-2">
        <div></div>
        <div className="col-span-4 gap-4">
          <ServiceIdentiteComponent
            title="Achat de timbre d'enrôlement"
            description=""
            image="illustration_achat_de_timbre_oneci.svg"
            nni=""
            type="service"
          />
          <ServiceIdentiteComponent
            title="Suivi des statuts et titres d'enrôlement"
            description=""
            image="illustration_verification_identite.svg"
            nni=""
            type="service"
          />
          <ServiceIdentiteComponent
            title="Carte de résidence"
            description=""
            image="illustration_suivi_statut_oneci.svg"
            nni=""
            type="service"
          />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Page;
