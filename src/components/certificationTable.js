import { Table } from "react-bootstrap";
import "../styles/certificationTable.css";

const CertificationTable = ({ certs }) => {
  return (
    <Table
      hover
      borderless
      // striped
      //   size="sm"
      className="bg-transparent text-light table"
      variant="dark"
    >
      <thead>
        <tr>
          <th>Date</th>
          <th>Organization</th>
          <th>Certificate</th>
        </tr>
      </thead>
      <tbody>
        {certs.map((cert, index) => (
          <tr key={index} className="i-table">
            <td>{cert.date}</td>
            <td>{cert.organization}</td>
            <td>
              {" "}
              <a
                href={cert.link}
                target="_blank"
                style={{ color: "inherit" }}
                rel="noreferrer"
              >
                {cert.name}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CertificationTable;
