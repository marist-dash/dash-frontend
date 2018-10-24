import React, {Component} from 'react';

class Help extends Component {
  render() {
      return (
          <div>
          
              <button disabled="true" className="w-200 p-4 m-8 pt-2 border-t-4 border-indigo-light rounded-b-lg shadow-lg bg-white text-xl font-bold">{"What is the purpose of this application?"}</button>

              <p className="mx-12">{"The purpose of this application is to allow Marist students to view their progression towards graduation in a user-friendly and easy to read manner. By logging into our applications, students can take the benefit of viewing their current standing, and if they would like detailed information about a specific course, they can always visit DegreeWorks and check that information"}</p>

              <button disabled="true" className="w-200 p-4 m-8 pt-2 border-t-4 border-indigo-light rounded-b-lg shadow-lg bg-white text-xl font-bold">{"How do I log in?"}</button><br></br>

              <p className="mx-12">{"You use the same credentials as you would to log in myMarist or iLearn"}</p>

              <button disabled="true" className="w-200 p-4 m-8 pt-2 border-t-4 border-indigo-light rounded-b-lg shadow-lg bg-white text-xl font-bold">{"Why does it take so long to load?"}</button><br></br>

              <p className="mx-12">{"There's a lot going on in the background: Logging into Degreeworks, pulling data, and building the charts"}</p>

              <button disabled="true" className="w-200 p-4 m-8 pt-2 border-t-4 border-indigo-light rounded-b-lg shadow-lg bg-white text-xl font-bold">{"Is my username and password being stored somewhere?"}</button><br></br>

              <p className="mx-12">{"No, your information is not stored anywhere within our program. After it is used to get the data your Degreeworks, it is not used, and your credentials are gone as soon as you close out this tab. That is why you have to log in every time you pull up the page"}</p>

   </div>
    );
  }
}

export default Help;
