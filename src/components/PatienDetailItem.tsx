type PatienDetailItemProps = {
  label: string;
  value: string;
};

export default function PatienDetailItem({
  label,
  value,
}: PatienDetailItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {label}: <span className="font-normal normal-case">{value}</span>
    </p>
  );
}
