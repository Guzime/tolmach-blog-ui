const ExperienceMe: React.FC = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="bg-white p-8 rounded-xl  border border-customBorder flex flex-col items-center w-[800]">
        <h1 className="text-lg font-sans text-black">Experience</h1>
        <div className="flex justify-center gap-6">
          <div>
            <div className="flex gap-1 flex-row p-0.5">
              <img
                src="calendar.svg"
                alt="icon"
                className="w-5 h-5 object-contain"
              />
              <p className="font-sans text-[#9198A1] w-[130]">2021-2024</p>
            </div>
            <div className="flex gap-1 flex-row p-0.5">
              <img
                src="work.svg"
                alt="icon"
                className="w-5 h-5 object-contain"
              />
              <p className="font-sans text-[#9198A1] w-[110]">Digital League</p>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-sans text-black">
              Team Lead & Developer
            </h1>
            <p className="font-sans text-[#9198A1]">
              Self-Employed Professionals' Personal Account Led a team of three
              Java developers. Managed sprint planning, assigned tasks, and
              ensured timely delivery at each project stage following Agile
              methodologies. Established a structured code review process and
              implemented coding guidelines, maintaining test coverage above 80%
              across applications. Actively contributed to system architecture
              design. As a result, developed five microservices, achieving a
              steady monthly user growth of 10,000.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-6">
            <div>
          <div className="flex gap-1 flex-row p-0.5">
            <img
              src="calendar.svg"
              alt="icon"
              className="w-5 h-5 object-contain"
            />
            <p className="font-sans text-[#9198A1] w-[130]">2021-2024</p>
          </div>
          <div className="flex gap-1 flex-row p-0.5">
              <img
                src="work.svg"
                alt="icon"
                className="w-5 h-5 object-contain"
              />
              <p className="font-sans text-[#9198A1] w-[110]">Digital League</p>
            </div>
            </div>
          <div>
            <h1 className="text-lg font-sans text-black">Developer</h1>
            <p className="font-sans text-[#9198A1]">
              Card Delivery Rescheduling Service and Administration
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
              project. Increased test coverage by 2.5 times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperienceMe;
