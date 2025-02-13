'use client'
import React from 'react'
import { Search } from 'lucide-react'

interface SearchBarProps {
    placeholder?: string
    onSearch?: (query: string) => void
}

export function SearchBox({ placeholder = 'Search...', onSearch }: SearchBarProps) {
    const [query, setQuery] = React.useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (onSearch) {
            onSearch(query)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="relative w-full max-w-md">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full py-1.5 pl-4 pr-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            />
            <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-500 focus:outline-none"
            >
                <Search className="w-5 h-5" />
            </button>
        </form>
    )
}

