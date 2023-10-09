import { FC, HTMLAttributes, ReactNode } from 'react';

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
}

const Field: FC<FieldProps> = (props) => {
  // props
  const { label } = props;

  // render
  return (
    <div className="">
      <label htmlFor="">{label}</label>
      <input type="text" />
    </div>
  );
};

Field.displayName = 'Field';

export type { FieldProps };
export default Field;
