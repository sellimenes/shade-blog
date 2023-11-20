"use client";

import { useState, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { getCategories } from "@/actions/categoryActions";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Category = {
  id: string;
  name: string;
  slug: string;
};

type Props = {
  onChange: (value: string) => void;
  valueProp?: string; // valueProp for the edit the post page.
};

function SelectCategoryCombobox({ onChange, valueProp }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  const handleGetCategories = async () => {
    const fetchedCategories = await getCategories();
    setCategories(fetchedCategories);
  };

  useEffect(() => {
    handleGetCategories();

    // Set value if valueProp is passed
    if (valueProp != undefined && valueProp.length > 0) {
      console.log(valueProp);
      setValue(
        categories.find((category) => category.id === valueProp)?.name ?? ""
      );
    }
  }, [valueProp]);

  function capitalizeFirstLetter(string: string): string {
    return string[0].toUpperCase() + string.slice(1);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? value : "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categories.map((category: Category) => (
              <CommandItem
                key={category.name}
                value={category.name}
                onSelect={(currentValue) => {
                  const newValue =
                    currentValue === value
                      ? ""
                      : capitalizeFirstLetter(currentValue);
                  setValue(newValue);
                  onChange(category.id);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category.name ? "opacity-100" : "opacity-0"
                  )}
                />
                {category.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default SelectCategoryCombobox;
