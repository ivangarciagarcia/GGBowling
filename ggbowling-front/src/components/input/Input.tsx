export interface InputProps {
  type: string;
  id: string;
  name: string;
  onChange: (value: any) => void;
  max?: any;

}

export const Input = (props: InputProps) => {
  const { type, id, name, onChange, max } = props;

  return (
    <input
      className="input"
      type={type}
      id={id}
      name={name}
      onChange={(e) => {
        if (onChange) {
          onChange(e.target.value);
        }
      }}
      max={max}
    />
  );
};
