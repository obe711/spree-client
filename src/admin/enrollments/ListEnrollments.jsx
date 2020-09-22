import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EnrollTable from "../../_components/admin/enrollTable";

import { enrollService } from "@/_services";

function ListEnrollments({ match }) {
  const { path } = match;
  const [enrollments, setEnrollments] = useState(null);

  useEffect(() => {
    enrollService.getAll().then((x) => setEnrollments(x));
  }, []);

  function deleteEnrollment(id) {
    setEnrollments(
      enrollments.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    enrollService.deleteEnrollment(id).then(() => {
      setEnrollments((enrollments) => enrollments.filter((x) => x.id !== id));
    });
  }

  return (
    <div className="main">
      <div className="mt-5 pt-5">
        <div className="container">
          <h1>Enrollments</h1>
          <p>Current Student Enrollments</p>

          {enrollments && <EnrollTable data={enrollments} />}
        </div>
      </div>
    </div>
  );
}

export { ListEnrollments };
