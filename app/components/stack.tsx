const StackMe: React.FC = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="bg-white p-8 rounded-xl  border border-customBorder flex flex-col items-center ">
        <h1 className="text-lg font-sans text-black">Skills & Tools</h1>
        <ul className="list-disc font-sans text-[#9198A1]">
          <li>Java 11+</li>
          <li>Spring Boot, Spring Framework (MVC, Security, Data, Cloud)</li>
          <li>Hibernate, Criteria API</li>
          <li>REST, SOAP, Kafka (Avro, Schema Registry, Kafka Connect)</li>
          <li>PostgreSql, OracleDB</li>
          <li>JUnit, TestConteiners, Jacoco</li>
          <li>Docker, Cubernetes (Openshift), Linux</li>
          <li>Git, GitLab, Bitbucket, Jenkins</li>
        </ul>
      </div>
    </div>
  );
};

export default StackMe;
