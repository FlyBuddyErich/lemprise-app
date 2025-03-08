import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <div
      className={`w-5 h-5 flex items-center justify-center border-2 rounded ${
        checked ? 'bg-[#1E1E1E] border-[#1E1E1E]' : 'bg-white border-gray-400'
      }`}
      onClick={() => onChange && onChange(!checked)}
    >
      {checked && (
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default Checkbox;