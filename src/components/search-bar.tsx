import React, { useState } from 'react';
import TextInput from './text-input';

type SearchBarProps = {
    onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch(value);
    };

    return (
        <div className="w-full">
            <TextInput
                label=""
                placeholder="Search"
                wrapperStyles="my-8"
                value={searchQuery}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default SearchBar;
