import { SearchIcon } from './icons.jsx';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
        <SearchIcon className="w-4 h-4" />
      </span>
      <input
        type="text"
        placeholder="Search recipes..."
        className="w-full pl-12 pr-4 py-3 bg-white rounded-full border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent text-sm"
      />
    </div>
  );
}
