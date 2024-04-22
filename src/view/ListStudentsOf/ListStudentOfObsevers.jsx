import React from "react";

import styles from "./ListStudentOfObsevers.module.css";

const ListStudentOfObsevers = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.name}>Listado de estudiantes</span>
        </div>
        <div className={styles.tables}>
          <div className={styles.div1}>
            <table border={1}>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Identifación</th>
                <th>Codigo</th>
              </tr>
              <tr>
                <td>Juan</td>
                <td>Pérez</td>
                <td>1234567</td>
                <td>ABCDE123</td>
              </tr>
              <tr>
                <td>Juan</td>
                <td>Pérez</td>
                <td>1234567</td>
                <td>ABCDE123</td>
              </tr>
              <tr>
                <td>Juan</td>
                <td>Pérez</td>
                <td>1234567</td>
                <td>ABCDE123</td>
              </tr>
              <tr>
                <td>Juan</td>
                <td>Pérez</td>
                <td>1234567</td>
                <td>ABCDE123</td>
              </tr>
              <tr>
                <td>Juan</td>
                <td>Pérez</td>
                <td>1234567</td>
                <td>ABCDE123</td>
              </tr>
              <tr>
                <td>Juan</td>
                <td>Pérez</td>
                <td>1234567</td>
                <td>ABCDE123</td>
              </tr>
              <tr>
                <td>Juan</td>
                <td>Pérez</td>
                <td>1234567</td>
                <td>ABCDE123</td>
              </tr>
              <tr>
                <td>Juan</td>
                <td>Pérez</td>
                <td>1234567</td>
                <td>ABCDE123</td>
              </tr>
              <tr>
                <td>Juan</td>
                <td>Pérez</td>
                <td>1234567</td>
                <td>ABCDE123</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListStudentOfObsevers;
