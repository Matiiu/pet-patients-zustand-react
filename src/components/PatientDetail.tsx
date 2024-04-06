import { usePatientStore } from "../store/store";
import { toast } from "react-toastify";

import type { Patient } from "../types";

import PatienDetailItem from "./PatienDetailItem";

type PatientDetailProps = {
  patient: Patient;
};

export default function PatientDetail({ patient }: PatientDetailProps) {
  const { removePatient, getPatientById } = usePatientStore();

  const handleRemove = () => {
    removePatient(patient.id);
    toast.error(`El paciente ${patient.name} ha sido eliminado`);
  };

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <div>
        <PatienDetailItem label="ID" value={patient.id} />
        <PatienDetailItem label="Nombre" value={patient.name} />
        <PatienDetailItem label="Propietario" value={patient.caretaker} />
        <PatienDetailItem label="Email" value={patient.email} />
        <PatienDetailItem label="Fecha Alta" value={patient.date.toString()} />
        <PatienDetailItem label="Sintomas" value={patient.symptoms} />

        <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => getPatientById(patient.id)}
          >
            Editar
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleRemove}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
