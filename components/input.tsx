import { TextField } from "@mui/material";

interface InputProps {
    required: boolean | undefined;
    label: string; 
    id: string;
    type?: string;
    autoComplete: string;
    value: string;
    onChange: () => void;
}
export default function PentziInput(props: Partial<InputProps>) {
    return (
        <TextField
        label={props.label}
        variant="outlined"
        autoComplete={props.autoComplete}
        type={props.type}
        id={props.id}
        value={props.value || ''}
        required={props.required}
        onChange={props.onChange}
        />
    );
}
