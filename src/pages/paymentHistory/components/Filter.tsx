import React, { useState } from "react";
import {
  Drawer,
  useMantineTheme,
  Stack,
  Select,
  RangeSlider,
  Button,
} from "@mantine/core";
import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";
import { BsChevronDown } from "react-icons/bs";

const marks = [
  { value: 1000, label: "Min Expense" },
  { value: 9000, label: "Max Expense" },
];

type Props = {
  openFilter: boolean;
  setOpenFilter: Function;
};

const Filter = ({ openFilter, setOpenFilter }: Props) => {
  return (
    <Drawer
      overlayColor={"#323232"}
      overlayOpacity={0.7}
      opened={openFilter}
      onClose={() => setOpenFilter(false)}
      position="bottom"
      size="90%"
      padding={16}
      sx={{
        ".mantine-Drawer-header": {
          margin: 0,
        },
      }}
    >
      <Stack>
        <DateRangePicker
          label="Date"
          size="lg"
          sx={{
            input: {
              fontSize: 14,
            },
            ".mantine-DateRangePicker-label": {
              fontSize: 14,
            },
          }}
        />
        <Select
          label="Status"
          rightSection={<BsChevronDown size={18} />}
          defaultChecked
          sx={{
            input: {
              fontSize: 14,
            },
            ".mantine-Select-item": {
              fontSize: 14,
            },
            ".mantine-Select-label": {
              fontSize: 14,
            },
          }}
          value={"All"}
          data={[
            { value: "All", label: "All" },
            { value: "Success", label: "Success" },
            { value: "Pending", label: "Pending" },
            { value: "Failed", label: "Failed" },
          ]}
          size="lg"
        />
        <Select
          label="Category"
          rightSection={<BsChevronDown size={18} />}
          defaultChecked
          sx={{
            input: {
              fontSize: 14,
            },

            ".mantine-Select-item": {
              fontSize: 14,
            },
            ".mantine-Select-label": {
              fontSize: 14,
            },
          }}
          value="All"
          data={[
            { value: "All", label: "All" },
            { value: "Water", label: "Water" },
            { value: "Electricity", label: "Electricity" },
            { value: "Maintenance", label: "Maintenance" },
            { value: "Parking", label: "Parking" },
            { value: "Club Renewal", label: "ClubRenewal" },
            { value: "Others", label: "Others" },
          ]}
          size="lg"
        />
        <Select
          label="Category"
          rightSection={<BsChevronDown size={18} />}
          defaultChecked
          value="1"
          sx={{
            input: {
              fontSize: 14,
            },

            ".mantine-Select-item": {
              fontSize: 14,
            },
            ".mantine-Select-label": {
              fontSize: 14,
            },
          }}
          data={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
          ]}
          size="lg"
        />
        <RangeSlider
          defaultValue={[1000, 9000]}
          marks={marks}
          min={0}
          max={10000}
          mt={32}
          label={(value) => `${value} EGP`}
          size="lg"
          styles={{
            thumb: {
              borderWidth: 4,
              padding: 3,
              borderColor: "#CE9751",
              backgroundColor: "#323232",
            },
            track: {
              height: 5,
            },
          }}
          labelAlwaysOn
        />
        <Button mt={24}>Save</Button>
      </Stack>
    </Drawer>
  );
};

export default Filter;
