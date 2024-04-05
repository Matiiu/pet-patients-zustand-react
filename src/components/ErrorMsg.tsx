type ErrorMsgProps = {
  children: React.ReactNode;
};

export default function ErrorMsg({ children }: ErrorMsgProps) {
  return (
    <p className="text-center text-red-600 font-bold pt-1 uppercase text-[10.5px]">
      {children}
    </p>
  );
}
