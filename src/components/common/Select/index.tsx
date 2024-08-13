import { OptionProps } from "@/types";
import { Select as MantineSelect, SelectProps } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useMemo } from "react";
import classes from "./Select.module.scss";

interface ISelectProps extends SelectProps {
  options?: OptionProps[];
  disabled?: boolean;
  data?: string[];
}

const Select = ({
  data: _data,
  options,
  disabled,
  value = "",
  ...props
}: ISelectProps) => {
  const data = useMemo(() => {
    if (_data) {
      return _data.map((el, idx) => ({
        value: el,
        label: el,
        isLastOption: idx === _data?.length - 1,
      }));
    }
    return options?.map(({ value, label }, idx) => ({
      value: value.toString(),
      label,
      isLastOption: idx === options?.length - 1,
    }));
  }, [options, _data]);

  return (
    <MantineSelect
      data={data}
      value={value}
      disabled={disabled ?? (data?.length || 0) < 1}
      checkIconPosition="right"
      rightSection={<IconChevronDown size={16} />}
      classNames={{
        input: "c-catering-truncate",
        label: classes.label,
      }}
      {...props}
    />
  );
};

export default Select;
