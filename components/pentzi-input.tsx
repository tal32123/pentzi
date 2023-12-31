import { TextField } from "@mui/material";

interface InputProps {
    required: boolean | undefined;
    label: string; 
    id: string;
    type?: string;
    autoComplete: string;
    value: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
