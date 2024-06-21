"use client";

import useMessageModal from "@/hooks/useMessageModal";
import useModal from "@/hooks/useModal";
import { axiosAuthapi } from "@/lib/axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ServiceCard from "@/components/ServiceCard";
import ServiceCardSeconde from "@/components/ServiceCardSeconde";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:mt-[-2.5rem]">
        <ServiceCard
          title="Imprimer extrait d'acte de naissance"
          description=""
          image="illustration_achat_de_timbre_oneci.svg"
          nni=""
          type="extrait"
        />
        <ServiceCard
          title="Imprimer acte de Mariage"
          description=""
          image="illustration_achat_de_timbre_oneci.svg"
          nni=""
          type="mariage"
        />
        <ServiceCard
          title="Imprimer acte de décès"
          description=""
          image="illustration_achat_de_timbre_oneci.svg"
          nni=""
          type="deces"
        />

        {/*  <ServiceCard
        title="CARTE TEMPORAIRE"
        description=""
        image="illustration_achat_de_timbre_oneci.svg"
        nni={params.nni}
        type="carte"
      /> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2 md:py-0 md:mt-[-2.5rem]">
        <ServiceCardSeconde
          title="Services d'identités"
          description=""
          image="illustration_services_vip_oneci.svg"
          nni=""
          type="service"
        />
        <ServiceCardSeconde
          title="Certificat de residence"
          description=""
          image="illustration_services_vip_oneci.svg"
          nni=""
          type="certificat"
        />
      </div>
    </>
  );
}
