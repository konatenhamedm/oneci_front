import React from 'react';


interface countryOptions {
    value: string;
    label: string;
}

interface CountrySelect {
    options: countryOptions[];
}

// const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options }) => {
const CountrySelect: React.FC <CountrySelect > = ({ options }) => {
    return (
        <div>
            <label className="font-semibold text-sm text-gray-600 pb-1 block" htmlFor="countries">Pays de residence</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default CountrySelect;
