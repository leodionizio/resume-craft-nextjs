import { useDebounce } from "@/hooks/use-debounce";
import { Input } from "../input";
import Image from "next/image";

type IconInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const IconInput = ({ value, onChange, placeholder }: IconInputProps) => {
  const debouncedValue = useDebounce(value, 1000);

  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 min-w-8 rounded-full bg-white p-1,5">
        {!!debouncedValue && (
          <Image
            src={`https://cdn.simpleicons.org/${debouncedValue}`}
            alt="icon"
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
