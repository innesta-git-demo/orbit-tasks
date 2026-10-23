import type { StatusFilter } from "../filters/status";

const options: { value: StatusFilter; label: string; description: string }[] = [
  { value: "all", label: "All", description: "Show every task" },
  { value: "open", label: "Open", description: "Show the tasks still to do" },
  { value: "done", label: "Done", description: "Show the completed tasks" },
];

interface FilterBarProps {
  status: StatusFilter;
  onChange: (status: StatusFilter) => void;
}

export function FilterBar({ status, onChange }: FilterBarProps) {
  return (
    <div className="filter-bar" role="group" aria-label="Show tasks by status">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          title={option.description}
          aria-pressed={status === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
