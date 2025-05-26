interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, ...props }) => {
  const { className } = props;
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 my-10 ${className}`}>
      {children}
    </div>
  );
};

export default PageWrapper;
