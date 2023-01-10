interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: Props) => {
  return (
    <button className='button' {...rest}>
      {children}
    </button>
  );
};

export default Button;
