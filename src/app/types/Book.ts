import Service from "./Service";

type Book = {
  service: Service;
  referenceCode: string;
  schedule: string;
  status: string;
};

export default Book;
