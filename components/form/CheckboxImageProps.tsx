import React from 'react';

interface RadioOption {
    label: string;
    value: string;
    id: string;
    src: string;
}

interface RadioGroupProps {
    options: RadioOption[];
    selectedOption: string;
    onChange: (selectedOption: string) => void;
}

const CheckboxImage: React.FC<RadioGroupProps> = ({ options = [], selectedOption, onChange }) => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="inline-flex items-center space-x-1">
            {options.map(option => (
                <label key={option.value} className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor={option.value}>
                    <input
                        type="radio"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all"
                        id={option.value}
                        name="radioGroup"
                        value={option.value}
                        onChange={handleRadioChange}
                        //checked={selectedOption === option.value}
                    />
                    <img src={option.src} alt={option.label} />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </span>
                    <span className="mt-px font-light text-gray-700 cursor-pointer select-none">
                        {option.label}
                    </span>
                </label>
            ))}
        </div>
    );
}

export default CheckboxImage;