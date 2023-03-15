export interface InputProps {
  type: string;
  id: string;
  name: string;
  onChange: (value: any) => void;

}

export const Input = (props: InputProps) => {
  const { type, id, name } = props;

  return (
    <input
      className="input"
      type={type}
      id={id}
      name={name}
    />
  );
};
