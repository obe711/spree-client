import React, { useRef } from "react";
import ReactTable from "react-table-v6";
import moment from "moment";

const ContactsTable = (props) => {
  const replyRef = useRef();
  const columns = [
    {
      Header: "id",
      accessor: "_id",
      show: false,
    },
    {
      Header: "Unseen",
      accessor: "unseen",
      show: false,
    },
    {
      Header: (props) => <span className="text-dark">Name</span>,
      accessor: "name",
      Cell: (row) => (
        <span className={row.original.unseen ? "font-weight-bold" : ""}>
          {row.value}
        </span>
      ),
    },
    {
      Header: (props) => <span className="text-dark">Phone</span>,
      accessor: "phone",
      className: "text-center",
      Cell: (row) => (
        <span className={row.original.unseen ? "font-weight-bold" : ""}>
          {row.value}
        </span>
      ),
    },
    {
      Header: (props) => <span className="text-dark">Email</span>,
      accessor: "email",
      className: "text-center",
      Cell: (row) => (
        <span className={row.original.unseen ? "font-weight-bold" : ""}>
          {row.value}
        </span>
      ),
    },
    {
      Header: (props) => <span className="text-dark">Date</span>,
      accessor: "created_on",
      className: "text-center",
      Cell: (row) => (
        <span className={row.original.unseen ? "font-weight-bold" : ""}>
          {moment(row.value).calendar()}
        </span>
      ),
    },
  ];

  function handleSubmit(e, id) {
    e.preventDefault();
    props.sendReply(id, replyRef.current.value);
  }
  return (
    <ReactTable
      className="-highlight"
      data={props.data}
      columns={columns}
      defaultPageSize={10}
      SubComponent={(row) => {
        return (
          <React.Fragment>
            {!row.original.isLoading && (
              <div className="px-5 pb-3">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Message</h6>
                    <p>{row.original.message}</p>
                  </div>
                  <div className="col-md-6">
                    <h6>Quick Reply</h6>
                    {row.original.replied && (
                      <p>{`${moment(row.original.replied_on).calendar()} - ${
                        row.original.quickReply
                      }`}</p>
                    )}
                    {!row.original.replied && (
                      <form onSubmit={(e) => handleSubmit(e, row.original._id)}>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group is-filled">
                              <textarea
                                className="form-control"
                                rows="3"
                                id="replyText"
                                name="replyText"
                                ref={replyRef}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 text-left">
                            <button className="btn btn-sm btn-success btn-round">
                              <i className="material-icons">email</i> Send
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    {row.original.unseen && (
                      <button
                        onClick={() => props.toggleSeen(row.original._id)}
                        className="btn btn-sm btn-primary"
                        disabled={row.original.isToggling}
                      >
                        {row.original.isToggling ? (
                          <span className="spinner-border spinner-border-sm"></span>
                        ) : (
                          <span>Mark Read</span>
                        )}
                      </button>
                    )}
                    {!row.original.unseen && (
                      <button
                        onClick={() => props.toggleSeen(row.original._id)}
                        className="btn btn-sm btn-primary"
                        disabled={row.original.isToggling}
                      >
                        {row.original.isToggling ? (
                          <span className="spinner-border spinner-border-sm"></span>
                        ) : (
                          <span>Mark Unread</span>
                        )}
                      </button>
                    )}

                    <button
                      onClick={() => props.deleteRecord(row.original._id)}
                      className="btn btn-sm btn-danger"
                      disabled={row.original.isDeleting}
                    >
                      {row.original.isDeleting ? (
                        <span className="spinner-border spinner-border-sm"></span>
                      ) : (
                        <span>Delete</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
            {row.original.isLoading && (
              <div className="text-center">
                <span className="spinner-border spinner-border-lg align-center"></span>
              </div>
            )}
          </React.Fragment>
        );
      }}
    />
  );
};

export default ContactsTable;
