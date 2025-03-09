import ExperienceItem from "./experince_item";

const ExperienceMe: React.FC = () => {
  return (
    <div className="flex justify-center mt-3">
      <div className="bg-white p-8 rounded-xl  border border-customBorder flex flex-col items-center w-[800]">
        <h1 className="text-xl font-medium font-sans text-black">Experience</h1>
        <ExperienceItem
          year="2024-2025"
          company="Diasfot"
          title="Tech Lead & Developer"
          descriprion="Developed two key modules of an ERP system from scratch: Decision-Making Center and Production Supply. Established and optimized development processes within the team, ensuring efficient collaboration among members. Led the development team, managed task distribution, and oversaw execution. Regularly conducted meetups to facilitate knowledge sharing, discuss technical solutions, and improve development workflows. "
        />
        <ExperienceItem
          year="2023-2024"
          company="Digital League"
          title="Team Lead & Developer"
          descriprion="Self-Employed Professionals' Personal Account Led a team of three
              Java developers. Managed sprint planning, assigned tasks, and
              ensured timely delivery at each project stage following Agile
              methodologies. Established a structured code review process and
              implemented coding guidelines, maintaining test coverage above 80%
              across applications. Actively contributed to system architecture
              design. As a result, developed five microservices, achieving a
              steady monthly user growth of 10,000."
        />

        <ExperienceItem
          year="2021-2023"
          company="Digital League"
          title="Developer"
          descriprion="Card Delivery Rescheduling Service and Administration
              Functionality Integrated with WSO2 using the SOAP protocol.
              Significantly optimized the bank’s card delivery process. Client
              Bankruptcy Product Blocking Configured the first Kafka integration
              with SSL, Kerberos, and krb5 in an OpenShift cluster. My
              DeploymentConfig reduced the initial application deployment time
              in the cluster by three times. Unified Application for Data Export
              to FTP Server Developed an application for exporting .csv files
              from the master system with flexible configuration. Payroll
              Services (Corporate Salary Project) Implemented functionality for
              large-scale business processes. Set up TestContainers for the
              project. Increased test coverage by 2.5 times."
        />
      </div>
    </div>
  );
};
export default ExperienceMe;
