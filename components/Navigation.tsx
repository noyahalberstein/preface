"use client";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { redirect,usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname()


  return (
    <ToggleButtonGroup
      value={pathname}
      exclusive
      onChange={(_, value) => redirect(value)}
      aria-label="tabs"
      sx={{paddingY:'30px'}}
    >
      <Tab label="Reconcilation" value="/reconcile" />
      <Tab label="Stats" value="/stats" />
      <Tab label="Upload" value="/upload" />
    </ToggleButtonGroup>
  );
};

const Tab = ({ label, value }: { label: string; value: string }) => {
  return (
    <ToggleButton
      value={value}
      aria-label={value}
      sx={{ textTransform: "none", minWidth:'150px' }}
    >
      {label}
    </ToggleButton>
  );
};
