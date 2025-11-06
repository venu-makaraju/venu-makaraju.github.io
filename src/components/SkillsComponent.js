import React, { useState, useEffect } from "react";
import {
	Box,
	Typography,
	Container,
	Grid,
	Card,
	Fade,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faNodeJs,
	faAws,
	faGitAlt,
	faAndroid,
	faFigma,
} from "@fortawesome/free-brands-svg-icons";

import {
	faCircle,
	faLaptopCode,
	faCode,
} from "@fortawesome/free-solid-svg-icons";

const skillIcons = {
	"React": faReact,
	"React Native": faReact,
	"Node.js": faNodeJs,
	"Express": faNodeJs,
	"AWS": faAws,
	"Git": faGitAlt,
	"GitHub": faGitAlt,
	"Postman": faLaptopCode,
	"Android Studio": faAndroid,
	"Figma": faFigma,
	"Canva": faCircle,
	"VS Code": faCode,
};

const skillsData = {
	skills: [
		{
			id: 1,
			category: "Frontend & Design",
			items: ["React", "React Native", "Figma", "Canva"],
			color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
		},
		{
			id: 2,
			category: "Backend & Server",
			items: ["Node.js", "Express"],
			color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
		},
		{
			id: 3,
			category: "Tools & Platforms",
			items: ["AWS", "Git", "GitHub", "Postman", "Android Studio", "VS Code"],
			color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
		},
	],
};

const SkillsComponent = () => {
	const [visible, setVisible] = useState(false);
	const [hoveredSkill, setHoveredSkill] = useState(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById("skills");
		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	const allSkills = skillsData.skills.flatMap((skill) => skill.items);

	return (
		<Box
			id="skills"
			sx={{
				background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)",
				padding: { xs: "100px 20px", sm: "120px 40px", md: "140px 60px" },
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Animated background elements */}
			<Box
				sx={{
					position: "absolute",
					top: "-30%",
					right: "-10%",
					width: "700px",
					height: "700px",
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
					filter: "blur(100px)",
					animation: "pulse 6s ease-in-out infinite",
				}}
			/>

			<Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, py: { xs: 4, sm: 6 } }}>
				<Fade in={visible} timeout={1000}>
					<Box>
						<Box sx={{ textAlign: "center", marginBottom: { xs: 6, sm: 8, md: 10 } }}>
							<Typography
								variant="h2"
								sx={{
									fontFamily: "'Outfit', sans-serif",
									fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5.5rem" },
									fontWeight: 800,
									marginBottom: 2,
									background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
									letterSpacing: "-1px",
								}}
							>
								My Skills
							</Typography>
							<Box
								sx={{
									width: "120px",
									height: "4px",
									background: "linear-gradient(90deg, #667eea, #764ba2, #f093fb)",
									margin: "0 auto",
									borderRadius: "2px",
								}}
							/>
						</Box>

						{/* Skills Grid */}
						<Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ marginBottom: { xs: 6, sm: 8 } }}>
							{allSkills.map((item, index) => (
								<Grid item xs={6} sm={4} md={3} key={index}>
									<Fade in={visible} timeout={500 + index * 100}>
										<Card
											elevation={0}
											onMouseEnter={() => setHoveredSkill(index)}
											onMouseLeave={() => setHoveredSkill(null)}
											sx={{
												padding: { xs: 2.5, sm: 3 },
												textAlign: "center",
												cursor: "pointer",
												background: hoveredSkill === index
													? "rgba(102, 126, 234, 0.1)"
													: "rgba(255, 255, 255, 0.03)",
												backdropFilter: "blur(20px)",
												borderRadius: "20px",
												border: "2px solid",
												borderColor: hoveredSkill === index
													? "rgba(102, 126, 234, 0.4)"
													: "rgba(102, 126, 234, 0.2)",
												boxShadow: hoveredSkill === index
													? "0 12px 40px rgba(102, 126, 234, 0.3)"
													: "0 4px 20px rgba(102, 126, 234, 0.1)",
												transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
												transform: hoveredSkill === index
													? "translateY(-12px) scale(1.05) rotateY(5deg)"
													: "translateY(0) scale(1) rotateY(0deg)",
												height: "100%",
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												minHeight: { xs: "140px", sm: "160px" },
											}}
										>
											<Box
												sx={{
													marginBottom: 2,
													display: "flex",
													justifyContent: "center",
													transform: hoveredSkill === index ? "scale(1.2) rotate(5deg)" : "scale(1)",
													transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
												}}
											>
												<FontAwesomeIcon
													icon={skillIcons[item] || faCircle}
													size="3x"
													style={{
														background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
														WebkitBackgroundClip: "text",
														WebkitTextFillColor: "transparent",
														backgroundClip: "text",
													}}
												/>
											</Box>
											<Typography
												variant="body1"
												sx={{
													fontFamily: "'Space Grotesk', sans-serif",
													fontSize: { xs: "0.9rem", sm: "1rem" },
													fontWeight: 600,
													color: "#ffffff",
												}}
											>
												{item}
											</Typography>
										</Card>
									</Fade>
								</Grid>
							))}
						</Grid>

						{/* Skill Categories */}
						{skillsData.skills.map((category, catIndex) => (
							<Fade
								key={category.id}
								in={visible}
								timeout={1000 + catIndex * 200}
							>
								<Box sx={{ marginBottom: { xs: 4, sm: 5 } }}>
									<Typography
										variant="h4"
										sx={{
											fontFamily: "'Outfit', sans-serif",
											fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
											fontWeight: 700,
											color: "#ffffff",
											marginBottom: 3,
										}}
									>
										{category.category}
									</Typography>
									<Box
										sx={{
											display: "flex",
											flexWrap: "wrap",
											gap: { xs: 1.5, sm: 2 },
										}}
									>
										{category.items.map((skill, idx) => (
											<Box
												key={idx}
												sx={{
													padding: { xs: "10px 24px", sm: "12px 28px" },
													borderRadius: "50px",
													background: category.color,
													color: "#ffffff",
													fontSize: { xs: "0.875rem", sm: "0.95rem" },
													fontWeight: 600,
													fontFamily: "'Space Grotesk', sans-serif",
													boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
													transition: "all 0.3s ease",
													cursor: "pointer",
													"&:hover": {
														transform: "translateY(-4px) scale(1.05)",
														boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
													},
												}}
											>
												{skill}
											</Box>
										))}
									</Box>
								</Box>
							</Fade>
						))}
					</Box>
				</Fade>
			</Container>

			<style>
				{`
					@keyframes pulse {
						0%, 100% {
							transform: scale(1);
							opacity: 0.5;
						}
						50% {
							transform: scale(1.1);
							opacity: 0.7;
						}
					}
				`}
			</style>
		</Box>
	);
};

export default SkillsComponent;
