import { useState } from 'react';

function InputField() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleToggleDisable = () => {
    setIsDisabled(!isDisabled);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        disabled={isDisabled}
        className={`
          border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400
          ${isDisabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white'}
        `}
        placeholder="Enter text here"
      />
      <button
        onClick={handleToggleDisable}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isDisabled ? 'Enable' : 'Disable'} Input
      </button>
    </div>
  );
}

export default InputField;