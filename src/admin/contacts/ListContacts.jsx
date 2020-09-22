import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactsTable from "../../_components/admin/contactsTable";
import LeadsTable from "../../_components/admin/leadsTable";

import { contactService, emailLeadService } from "@/_services";

function ListContacts({ match }) {
  const { path } = match;
  const [contacts, setContacts] = useState(null);
  const [leads, setLeads] = useState(null);
  const [contactsIsLoading, setContactsIsLoading] = useState(false);
  const [leadsIsLoading, setLeadsIsLoading] = useState(false);

  useEffect(() => {
    contactService.getAll().then((x) => setContacts(x));
    emailLeadService.getAll().then((x) => setLeads(x));
  }, []);

  useEffect(() => {
    if (contactsIsLoading) {
      contactService.getAll().then((x) => setContacts(x));
      setContactsIsLoading(false);
    }
  }, [contactsIsLoading]);

  useEffect(() => {
    if (leadsIsLoading) {
      emailLeadService.getAll().then((x) => setLeads(x));
      setLeadsIsLoading(false);
    }
  }, [leadsIsLoading]);

  //Contacts Functions
  function deleteContact(id) {
    setContacts(
      contacts.map((x) => {
        if (x._id === id) {
          x.isDeleting = true;
          x.isLoading = true;
        }
        return x;
      })
    );
    contactService.deleteMessage(id).then(() => {
      setContacts((contacts) => contacts.filter((x) => x._id !== id));
    });
    setContactsIsLoading(true);
  }
  function toggleSeenContact(id) {
    setContacts(
      contacts.map((x) => {
        if (x._id === id) {
          x.isLoading = true;
        }
        return x;
      })
    );
    contactService.toggleSeenMessage(id).then(() => {
      setContacts((contacts) =>
        contacts.map((x) => {
          if (x._id === id) {
            x.unseen = !x.unseen;
            x.isLoading = false;
          }
          return x;
        })
      );
    });
    setContactsIsLoading(true);
  }
  function replyContacts(id, reply) {
    setContacts(
      contacts.map((x) => {
        if (x._id === id) {
          x.isLoading = true;
        }
        return x;
      })
    );
    contactService.sendReply(id, reply).then(() => {
      setContacts((contacts) =>
        contacts.map((x) => {
          if (x._id === id) {
            x.quickReply = reply;
            x.isLoading = false;
          }
          return x;
        })
      );
    });
    setContactsIsLoading(true);
  }
  //Leads Functions
  function deleteLead(id) {
    setLeads(
      leads.map((x) => {
        if (x._id === id) {
          x.isDeleting = true;
          x.isLoading = true;
        }
        return x;
      })
    );
    emailLeadService.deleteLead(id).then(() => {
      setLeads((leads) => leads.filter((x) => x._id !== id));
    });
    setLeadsIsLoading(true);
  }
  function toggleSeenLead(id) {
    setLeads(
      leads.map((x) => {
        if (x._id === id) {
          x.isLoading = true;
        }
        return x;
      })
    );
    emailLeadService.toggleSeenLead(id).then(() => {
      setLeads((leads) =>
        leads.map((x) => {
          if (x._id === id) {
            x.unseen = !x.unseen;
            x.isLoading = false;
          }
          return x;
        })
      );
    });
    setLeadsIsLoading(true);
  }
  function replyLeads(id, reply) {
    setLeads(
      leads.map((x) => {
        if (x._id === id) {
          x.isLoading = true;
        }
        return x;
      })
    );
    emailLeadService.sendReply(id, reply).then(() => {
      setLeads((leads) =>
        leads.map((x) => {
          if (x._id === id) {
            x.quickReply = reply;
            x.isLoading = false;
          }
          return x;
        })
      );
    });
    setLeadsIsLoading(true);
  }

  return (
    <div className="mt-5 pt-5">
      <div className="container">
        {contacts && (
          <React.Fragment>
            <div className="container">
              <div class="card">
                <div class="card-header card-header-icon card-header-primary">
                  <div class="card-icon">
                    <h2>
                      <i class="material-icons">phone</i> Contacts
                    </h2>
                  </div>
                </div>
                <div className="card-body">
                  <ContactsTable
                    data={contacts}
                    delete={deleteContact}
                    toggleSeen={toggleSeenContact}
                    sendReply={replyContacts}
                    deleteRecord={deleteContact}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        )}

        {leads && (
          <React.Fragment>
            <div className="container mt-5">
              <div class="row">
                <div class="col">
                  <div class="card">
                    <div class="card-header card-header-icon card-header-warning">
                      <div class="card-icon">
                        <h2>
                          <i class="material-icons">email</i> Leads
                        </h2>
                      </div>
                    </div>
                    <div className="card-body">
                      <LeadsTable
                        data={leads}
                        delete={deleteLead}
                        toggleSeen={toggleSeenLead}
                        sendReply={replyLeads}
                        deleteRecord={deleteLead}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export { ListContacts };
