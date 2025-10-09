import React from "react";
import HeaderLine from "../components/UI/HeaderLine";
import { li } from "motion/react-client";

const experienceList = [
  {
    company: "itm8",
    period: "2021-2022",
    location: "Dumaguete City",
    role: "Operation Specialist",
    job: "As a System Operation Specialist at itm8, I am responsible for providing comprehensive IT infrastructure support, specializing in troubleshooting various technologies such as Windows Server, Citrix, Microsoft, Veeam, and Azure. My role involves handling and resolving cases within defined SLAs, coordinating with clients and internal teams during critical incidents, and ensuring system reliability through manual server patching or automated updates via SCCM. I also manage the deployment and troubleshooting of Azure resources and execute both scheduled and emergency operational tasks to maintain optimal system performance and uptime.",
    skills: [
      "Active Directory",
      "DNS",
      "DHCP",
      "Virtualization (VMware / Hyper-V",
      "Windows Server Administration",
      "Citrix",
      "Azure",
      "PowerShell Scripting",
      "Network",
      "Backup",
      "Office 365 Administration",
    ],
  },
  {
    company: "itm8",
    period: "2021-2022",
    location: "Dumaguete City",
    role: "Operation Specialist",
    job: "As a System Operation Specialist at itm8, I am responsible for providing comprehensive IT infrastructure support, specializing in troubleshooting various technologies such as Windows Server, Citrix, Microsoft, Veeam, and Azure. My role involves handling and resolving cases within defined SLAs, coordinating with clients and internal teams during critical incidents, and ensuring system reliability through manual server patching or automated updates via SCCM. I also manage the deployment and troubleshooting of Azure resources and execute both scheduled and emergency operational tasks to maintain optimal system performance and uptime.",
    skills: [
      "Active Directory",
      "DNS",
      "DHCP",
      "Virtualization (VMware / Hyper-V",
      "Windows Server Administration",
      "Citrix",
      "Azure",
      "PowerShell Scripting",
      "Network",
      "Backup",
      "Office 365 Administration",
    ],
  },
];

function Experience() {
  return (
    <div className="w-[60%] mt-[4rem]">
      <h2 className="font-extrabold text-[3.5rem] mb-5 flex items-center text-accent-blue">
        <HeaderLine color="accent-blue" />
        Experience.
      </h2>{" "}
      <div className="grid gap-[2rem] Experience">
        {experienceList.map((exp, i) => (
          <div key={i} className="grid gap-4">
            <div className="flex justify-between">
              <h2 className="text-2xl font-extrabold text-fg">{exp.company}</h2>
              <p className="text-[1.1rem] font-bold">{exp.period}</p>
            </div>
            <div className="flex justify-between">
              <h2 className="text-2xl font-extrabold text-accent-blue">
                {exp.role}
              </h2>
              <p className="text-[1.1rem] font-bold">{exp.location}</p>
            </div>
            <p>{exp.job}</p>
            <ul>
              {exp.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className="my-[2rem]">
              <HeaderLine color="accent-blue" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
