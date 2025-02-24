import React from "react";
import {
	Box,
	Typography,
	// Select,
	// MenuItem,
	Chip,
	// FormControl,
	// InputLabel,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faJava,
	faPython,
	faJsSquare,
	// faHtml5,
	// faCss3Alt,
	// faReact,
	// faNodeJs,
	// faAws,
	// faDocker,
	// faGitAlt,
	// faJira,
	// faBitbucket,
	// faAngular,
	faServicestack,
	faWindows,
} from "@fortawesome/free-brands-svg-icons";
import {
	faCogs,
	faCloud,
	faProjectDiagram,
	// faShieldAlt,
	faCubes,
	faFlask,
	// faCheck,
	faCircle,
	// faVial,
	faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

// Mapping skills to Font Awesome icons
const skillIcons = {
	C: faCogs,
	"C#": faCogs,
	Python: faPython,
	JavaScript: faJsSquare,
	SQL: faServicestack,
	MongoDB: faCloud,
	TensorFlow: faCubes,
	PyTorch: faCubes,
	"Scikit-learn": faFlask,
	Keras: faFlask,
	Numpy: faCogs,
	Pandas: faCogs,
	Django: faCogs,
	FastAPI: faCogs,
	ASPNET: faCloud,
	D365: faCloud,
	"Machine Learning": faProjectDiagram,
	"Web Development": faLaptopCode,
	"Data Structures & Algorithms": faProjectDiagram,
	MySQL: faCloud,
	"Basics of Java": faJava,
	"Microsoft D365 Certification": faWindows,
	"Programming Essentials of Python": faPython,
};



const skillsData = {
	skills: [
		{
			id: 1,
			category: "Programming Languages & Technologies",
			items: ["C", "C#", "Python", "JavaScript", "SQL", "MongoDB"],
		},
		{
			id: 2,
			category: "Frameworks & Libraries",
			items: [
				"TensorFlow",
				"PyTorch",
				"Scikit-learn",
				"Keras",
				"Numpy",
				"Pandas",
				"Django",
				"FastAPI",
			],
		},
		{
			id: 3,
			category: "Cloud & Databases",
			items: ["MySQL", "MongoDB"],
		},
		{
			id: 4,
			category: "Technologies & Interests",
			items: [
				"ASP.NET",
				"D365",
				"Machine Learning",
				"Web Development",
				"Data Structures & Algorithms",
			],
		},
		{
			id: 5,
			category: "Certifications",
			items: [
				"Microsoft D365 Certification",
				"Programming Essentials of Python",
				"Basics of Java",
			],
		},
	],
};



const SkillsComponent = () => {
	const allSkills = skillsData.skills.flatMap((skill) => skill.items);

	return (
		<Box
			sx={{
				p: { xs: 2, sm: 4 },
				textAlign: "left",
				backgroundColor: "#efefef",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography
				variant="h4"
				sx={{
					width: "100%",
					textAlign: "center",
					marginBottom: "20px",
					"&::after": {
						content: '""',
						display: "block",
						width: "60px",
						height: "3px",
						backgroundColor: "#748D92",
						margin: "8px auto 0",
					},
				}}
			>
				My Skills
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1,
					justifyContent: "center",
					width: {
						sm: "100%",
						lg: "80%",
					},
				}}
			>
				{allSkills.map((item, index) => (
					<Chip
						key={index}
						label={
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									gap: 1,
								}}
							>
								<FontAwesomeIcon
									icon={skillIcons[item] || faCircle}
									size="3x" // Larger size for the icon
								/>
								<Typography sx={{ textAlign: "center", fontSize: "20px" }}>
									{item}
								</Typography>
							</Box>
						}
						variant="outlined"
						// color={shouldColorSkill(item) ? "#3f51b5" : "default"}
						color={"default"}
						sx={{
							borderRadius: "8px",
							minWidth: "120px", // Ensure consistent size for chips
							minHeight: "120px", // To create space for the icon and text
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "transparent",
							// backgroundColor: shouldColorSkill(item)
							//   ? "#3f51b5"
							//   : "transparent",
							borderColor: "#124E66",
							color: "#124E66",
							// color: shouldColorSkill(item) ? "white" : "#3f51b5",
							cursor: "pointer",
							transition: "background-color 0.3s, color 0.3s",
							// "&:hover": {
							//   backgroundColor: shouldColorSkill(item)
							//     ? "#3f51b5"
							//     : "transparent",
							// },
						}}
					/>
				))}
			</Box>
		</Box>
	);
};

export default SkillsComponent;