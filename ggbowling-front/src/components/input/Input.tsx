export interface InputProps {
  type: string;
  id: string;
  onChange: (value: any) => void;

}

export const Input = (props: InputProps) => {
  const { type, id } = props;

  return (
    <input
      className="input"
      type={type}
      id={id}
      
    />
  );
};
