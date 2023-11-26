import { TextField } from "@mui/material";

interface InputProps {
    label: string; 
    id: string;
    type?: string;
    autoComplete: string;
}
export default function PentziInput({ label, autoComplete, type, id }: InputProps) {
    return (
        <TextField
        label={label}
        variant="outlined"
        autoComplete={autoComplete}
        type={type}
        id={id}
        />
    );
};
