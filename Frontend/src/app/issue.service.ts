import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  // This method is accepting four parameters (title, responsible, description and severity). With the values available
  // in those parameter a new issue object is created. By using the http.post method a HTTP POST request is initiated to
  // end point /issues/add and the new issue object is passed into the request’s body data.
  addIssue(title, responsible, description, severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  // a method for retrieving all available issues
  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  // a method for retrieving a single issue entry by ID
  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  // Update existing issues by sending a POST request to /issues/update/${id} and make sure to pass the updated
  // issue object as body data
  updateIssue(id, title, responsible, description, serverity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      serverity: serverity,
      status: status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  // Method for deleting issues
  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
