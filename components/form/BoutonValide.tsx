import React from "react";

interface BoutonValideProps {
  title: string;
  colorFrom: string;
  colorTo: string;
}

const BoutonValide = ({ title, colorFrom, colorTo }: BoutonValideProps) => {
  return (
    <div>
      <button
        /*  onClick={() =>
      router.push(
        "/operateur/" + params.nni + "?nombre=4&doc=" + doc
      )
    } */
        className={`bg-gradient-to-r from-[${colorFrom}] to-[${colorTo}] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[${colorTo}] hover:to-[${colorFrom}] transition ease-in-out duration-150`}
        type="submit"
      >
        {title}
      </button>
    </div>
  );
};

export default BoutonValide;
