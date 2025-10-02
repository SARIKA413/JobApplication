import React, { useState } from "react";
import "./App.css";
import loginBg from "./assets/login-bg.jpg";      // Add your login background
import profileBg from "./assets/profile-bg.jpg";  // Add your profile background

// ===== Login Page =====
const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const DEMO_EMAIL = "demo@example.com";
  const DEMO_PASS = "Password123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === DEMO_EMAIL && password === DEMO_PASS) {
      onLogin();
    } else {
      alert("Invalid credentials! Use demo@example.com / Password123");
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="demo@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

// ===== Profile Page =====
const ProfilePage = ({ onProfileComplete }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    skills: "",
    experience: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm({ ...form, resume: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.resume) {
      alert("Please upload your resume!");
      return;
    }
    onProfileComplete(form);
  };

  return (
    <div
      className="profile-page"
      style={{
        backgroundImage: `url(${profileBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="profile-page-overlay"></div>
      <div className="profile-form-container">
        <div className="profile-form">
          <h2 className="profile-title">Complete Profile</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label>Skills</label>
              <input
                type="text"
                name="skills"
                value={form.skills}
                onChange={handleChange}
                placeholder="Enter your skills"
                required
              />
            </div>

            <div>
              <label>Experience</label>
              <input
                type="text"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                placeholder="Your experience"
                required
              />
            </div>

            <div>
              <label>Upload Resume (PDF/DOC)</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
              {form.resume && <p>{form.resume.name}</p>}
            </div>

            <button type="submit">Submit Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ===== Jobs Page =====
const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    type: "",
    location: "",
    domain: "",
  });

  const jobs = [
    
  { id: 1, title: "Frontend Developer", company: "Google", location: "Delhi", type: "Full-time", domain: "Software Development", skills: ["React","JavaScript","CSS"], salary: "12 LPA", description: "Build and optimize web interfaces for large-scale applications.", applyLink: "https://careers.google.com/" },
  { id: 2, title: "Backend Developer", company: "Amazon", location: "Remote", type: "Remote", domain: "Software Development", skills: ["Node.js","Express","MongoDB"], salary: "15 LPA", description: "Design and maintain scalable backend systems.", applyLink: "https://amazon.jobs/" },
  { id: 3, title: "Data Scientist", company: "TCS", location: "Bengaluru", type: "Full-time", domain: "Data Science", skills: ["Python","SQL","Machine Learning"], salary: "10 LPA", description: "Analyze large datasets and build predictive models.", applyLink: "https://www.tcs.com/careers" },
  { id: 4, title: "AI Research Intern", company: "NVIDIA", location: "Remote", type: "Internship", domain: "Artificial Intelligence", skills: ["Deep Learning","PyTorch","TensorFlow"], salary: "30k/month", description: "Assist in AI model research and prototyping.", applyLink: "https://nvidia.wd5.myworkdayjobs.com/" },
  { id: 5, title: "Business Analyst", company: "Accenture", location: "Delhi", type: "Full-time", domain: "Business", skills: ["Excel","SQL","Business Strategy"], salary: "9 LPA", description: "Analyze business requirements and provide insights.", applyLink: "https://www.accenture.com/in-en/careers" },
  { id: 6, title: "Marketing Intern", company: "Byju’s", location: "Remote", type: "Internship", domain: "Business/Marketing", skills: ["SEO","Content Writing","Digital Marketing"], salary: "20k/month", description: "Support digital campaigns and market research.", applyLink: "https://byjus.com/careers/" },
  { id: 7, title: "Cybersecurity Analyst", company: "Infosys", location: "Pune", type: "Full-time", domain: "Cybersecurity", skills: ["Network Security","Penetration Testing"], salary: "11 LPA", description: "Monitor and secure enterprise systems.", applyLink: "https://www.infosys.com/careers" },
  { id: 8, title: "Remote Content Writer", company: "Fiverr", location: "Remote", type: "Part-time", domain: "Content Writing", skills: ["Writing","Editing","SEO"], salary: "15k/month", description: "Write engaging blogs and website content remotely.", applyLink: "https://www.fiverr.com/" },


    { id: 1, title: "Frontend Developer", company: "Google", location: "Bengaluru", type: "Full Time", domain: "Web Development", skills:["React","JS"], salary:"12 LPA", applyLink:"https://google.com/jobs/1"},
    { id: 2, title: "Backend Developer", company: "Amazon", location: "Hyderabad", type: "Full Time", domain: "Software Development", skills:["Node.js","Express"], salary:"15 LPA", applyLink:"https://amazon.jobs/2"},
    { id: 3, title: "Data Analyst Intern", company: "Flipkart", location: "Delhi", type: "Internship", domain: "Data Science", skills:["SQL","Python"], salary:"25k/month", applyLink:"https://flipkart.com/jobs/3"},
    { id: 4, title: "UI/UX Designer", company: "Zomato", location: "Bengaluru", type: "Full Time", domain: "Design", skills:["Figma","Sketch"], salary:"10 LPA", applyLink:"https://zomato.com/jobs/4"},
    { id: 5, title: "AI Engineer", company: "OpenAI", location: "Remote", type: "Full Time", domain: "AI", skills:["Python","ML"], salary:"20 LPA", applyLink:"https://openai.com/careers/5"},
    { id: 6, title: "UI/UX Designer", company: "Zomato", location: "Delhi", type: "Full-time", domain: "Design", skills: ["Figma","Adobe XD","Prototyping"], salary: "8 LPA", description: "Design user-friendly interfaces.", applyLink: "https://www.zomato.com/careers" },
    { id: 7, title: "AI Engineer", company: "OpenAI", location: "Remote", type: "Full-time", domain: "AI", skills: ["Python","TensorFlow","PyTorch"], salary: "25 LPA", description: "Develop and optimize AI models.", applyLink: "https://openai.com/careers" },
    { id: 8, title: "Part-time Web Developer", company: "FreelanceHub", location: "Remote", type: "Part-time", domain: "Web Development", skills: ["HTML","CSS","JavaScript"], salary: "50k/month", description: "Work on client projects.", applyLink: "https://www.freelancehub.com/jobs" },
    { id: 9, title: "Cybersecurity Analyst", company: "Infosys", location: "Pune", type: "Full-time", domain: "Cybersecurity", skills: ["Network Security","Python","Pen Testing"], salary: "12 LPA", description: "Monitor and secure systems.", applyLink: "https://www.infosys.com/careers" },
    { id: 10, title: "Marketing Intern", company: "Byju’s", location: "Mumbai", type: "Internship", domain: "Marketing", skills: ["Social Media","Content Writing","SEO"], salary: "15k/month", description: "Assist marketing campaigns.", applyLink: "https://byjus.com/careers" },
    { id: 11, title: "DevOps Engineer", company: "Paytm", location: "Noida", type: "Full-time", domain: "DevOps", skills: ["AWS","Docker","Kubernetes"], salary: "14 LPA", description: "Maintain deployment pipelines.", applyLink: "https://paytm.com/careers" },
    { id: 12, title: "Blockchain Developer", company: "Polygon", location: "Remote", type: "Full-time", domain: "Blockchain", skills: ["Solidity","Ethereum","Smart Contracts"], salary: "18 LPA", description: "Develop blockchain applications.", applyLink: "https://polygon.technology/careers" },
    { id: 13, title: "Game Developer", company: "Ubisoft", location: "Pune", type: "Full-time", domain: "Game Development", skills: ["Unity","C#","3D Modeling"], salary: "15 LPA", description: "Create engaging games.", applyLink: "https://www.ubisoft.com/careers" },
    { id: 14, title: "Remote Content Writer", company: "Contently", location: "Remote", type: "Part-time", domain: "Content Writing", skills: ["Writing","SEO","Research"], salary: "30k/month", description: "Write content for clients.", applyLink: "https://contently.com/careers" },
    { id: 15, title: "Full-stack Developer Intern", company: "CRED", location: "Bengaluru", type: "Internship", domain: "Web Development", skills: ["React","Node.js","MongoDB"], salary: "25k/month", description: "Work on full-stack projects.", applyLink: "https://cred.club/careers" },
    { id: 16, title: "Remote Graphic Designer", company: "Fiverr", location: "Remote", type: "Part-time", domain: "Design", skills: ["Photoshop","Illustrator","Creativity"], salary: "Variable", description: "Design graphics for clients.", applyLink: "https://www.fiverr.com/careers" },
    { id: 17, title: "Product Manager", company: "Meesho", location: "Bengaluru", type: "Full-time", domain: "Product Management", skills: ["Leadership","Communication","Analytics"], salary: "20 LPA", description: "Manage product roadmap.", applyLink: "https://meesho.com/careers" },
    { id: 18, title: "Remote Customer Support", company: "Freshdesk", location: "Remote", type: "Part-time", domain: "Customer Support", skills: ["Communication","Problem Solving","CRM"], salary: "20k/month", description: "Assist customers via chat/call.", applyLink: "https://freshdesk.com/careers" },
    { id: 19, title: "Data Scientist", company: "TCS", location: "Chennai", type: "Full-time", domain: "Data Science", skills: ["Python","Machine Learning","SQL"], salary: "10 LPA", description: "Analyze and interpret data.", applyLink: "https://www.tcs.com/careers" },
    { id: 20, title: "Remote Tutor", company: "Chegg", location: "Remote", type: "Part-time", domain: "Education", skills: ["Teaching","Subject Expertise","Communication"], salary: "25k/month", description: "Provide online tutoring.", applyLink: "https://www.chegg.com/careers" },
    { id: 21, title: "Business Analyst", company: "Accenture", location: "Hyderabad", type: "Full-time", domain: "Business Analysis", skills: ["Analytics","Excel","Communication"], salary: "12 LPA", description: "Analyze business requirements.", applyLink: "https://www.accenture.com/in-en/careers" },
    { id: 22, title: "Remote Social Media Manager", company: "Hootsuite", location: "Remote", type: "Part-time", domain: "Marketing", skills: ["Social Media","Content Creation","Analytics"], salary: "30k/month", description: "Manage social media accounts.", applyLink: "https://hootsuite.com/careers" },
    { id: 23, title: "Android Developer", company: "Samsung", location: "Bengaluru", type: "Full-time", domain: "Mobile Development", skills: ["Java","Kotlin","Android SDK"], salary: "15 LPA", description: "Develop Android applications.", applyLink: "https://www.samsungcareers.com" },
    { id: 24, title: "AI Research Intern", company: "NVIDIA", location: "Pune", type: "Internship", domain: "AI", skills: ["Python","Deep Learning","Research"], salary: "35k/month", description: "Assist in AI research projects.", applyLink: "https://www.nvidia.com/en-us/about-nvidia/careers/" },
    { id: 25, title: "Remote QA Tester", company: "Upwork", location: "Remote", type: "Part-time", domain: "QA", skills: ["Testing","Automation","Bug Reporting"], salary: "25k/month", description: "Test applications for clients.", applyLink: "https://www.upwork.com/careers" },
    { id: 26, title: "HR Intern", company: "Wipro", location: "Bengaluru", type: "Internship", domain: "Human Resources", skills: ["Communication","Recruitment","MS Office"], salary: "15k/month", description: "Support HR activities.", applyLink: "https://careers.wipro.com/" },
    { id: 27, title: "Remote Data Entry Operator", company: "Freelancer", location: "Remote", type: "Part-time", domain: "Data Entry", skills: ["Typing","MS Excel","Accuracy"], salary: "20k/month", description: "Perform data entry tasks.", applyLink: "https://www.freelancer.com/careers" },
    { id: 28, title: "Cloud Architect", company: "Oracle", location: "Bengaluru", type: "Full-time", domain: "Cloud Computing", skills: ["AWS","Azure","Architecture"], salary: "22 LPA", description: "Design cloud infrastructure.", applyLink: "https://www.oracle.com/corporate/careers/" },
    { id: 29, title: "Remote Digital Marketer", company: "HubSpot", location: "Remote", type: "Part-time", domain: "Marketing", skills: ["SEO","Ads","Analytics"], salary: "25k/month", description: "Manage digital marketing campaigns.", applyLink: "https://www.hubspot.com/careers" },
    { id: 30, title: "Financial Analyst", company: "Goldman Sachs", location: "Bengaluru", type: "Full-time", domain: "Finance", skills: ["Excel","Financial Modelling","Analytics"], salary: "20 LPA", description: "Analyze financial data.", applyLink: "https://www.goldmansachs.com/careers/" },

  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesType = !selectedFilters.type || job.type === selectedFilters.type;
    const matchesLocation = !selectedFilters.location || job.location === selectedFilters.location;
    const matchesDomain = !selectedFilters.domain || job.domain === selectedFilters.domain;

    return matchesSearch && matchesType && matchesLocation && matchesDomain;
  });

  return (
    <div className="app">
      <h1 className="main-title">Available Jobs</h1>
      <p className="sub-title">Explore jobs that match your skills</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title, company, or skills"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="content">
        <aside className="filters">
          <h2 className="filter-title">Job Filters</h2>

          <div className="filter-group">
            <h3>Job Type</h3>
            {["Full Time", "Part Time", "Remote", "Internship"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="type"
                  value={type}
                  checked={selectedFilters.type === type}
                  onChange={(e) =>
                    setSelectedFilters({ ...selectedFilters, type: e.target.value })
                  }
                />
                {type}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h3>Location</h3>
            {["Bengaluru", "Hyderabad", "Delhi", "Remote"].map((loc) => (
              <label key={loc}>
                <input
                  type="radio"
                  name="location"
                  value={loc}
                  checked={selectedFilters.location === loc}
                  onChange={(e) =>
                    setSelectedFilters({ ...selectedFilters, location: e.target.value })
                  }
                />
                {loc}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h3>Domain</h3>
            {["Web Development", "Software Development", "Data Science", "AI", "Design"].map(
              (domain) => (
                <label key={domain}>
                  <input
                    type="radio"
                    name="domain"
                    value={domain}
                    checked={selectedFilters.domain === domain}
                    onChange={(e) =>
                      setSelectedFilters({ ...selectedFilters, domain: e.target.value })
                    }
                  />
                  {domain}
                </label>
              )
            )}
          </div>
        </aside>

        <main className="job-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div className="job-card" key={job.id}>
                <h3>{job.title}</h3>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Domain:</strong> {job.domain}</p>
                <p><strong>Skills:</strong> {job.skills.join(", ")}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
                <button
                  className="apply-btn"
                  onClick={() => window.open(job.applyLink, "_blank")}
                >
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p>No jobs found. Try adjusting filters or search.</p>
          )}
        </main>
      </div>
    </div>
  );
};

// ===== Main App Component =====
const App = () => {
  const [step, setStep] = useState("login");
  const [profileData, setProfileData] = useState(null);

  return (
    <>
      {step === "login" && <LoginPage onLogin={() => setStep("profile")} />}
      {step === "profile" && (
        <ProfilePage
          onProfileComplete={(data) => {
            setProfileData(data);
            setStep("jobs");
          }}
        />
      )}
      {step === "jobs" && <JobsPage profile={profileData} />}
    </>
  );
};

export default App;


