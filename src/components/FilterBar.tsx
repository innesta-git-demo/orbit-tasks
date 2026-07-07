import type { StatusFilter } from "../filters/status";

const options: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "open", label: "Open" },
  { value: "done", label: "Done" },
];

interface FilterBarProps {
  status: StatusFilter;
  onChange: (status: StatusFilter) => void;
}

export function FilterBar({ status, onChange }: FilterBarProps) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={status === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
