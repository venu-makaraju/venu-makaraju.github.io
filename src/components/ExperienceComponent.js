import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Card, Chip, Fade } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";

const experienceData = [
	{
		type: "internship",
		role: "Web Development Intern",
		company: "Wipro",
		duration: "May 2022 - Jul 2022",
		achievements: [
			"Acquired proficiency in HTML, CSS, JavaScript, GitHub, and SQL fundamentals",
			"Collaborated with a team of 5 to design and develop an online flight booking portal",
		],
	},
	{
		type: "internship",
		role: "Web Development Intern",
		company: "Aspire Info Labs",
		duration: "May 2023 - Jul 2023",
		achievements: [
			"Developed full-stack applications using the MERN stack",
			"Gained hands-on expertise in React, React Native, API integration, GitHub version control, and AWS deployment",
		],
	},
	{
		type: "experience",
		role: "Software Development Engineer",
		company: "Aspire Info Labs",
		duration: "Jul 2023 - Present",
		achievements: [
			"Developed frontend components using React and React Native",
			"Designed layouts and prototypes in Figma and Canva",
			"Implemented server-side logic in Node.js and Express, tested APIs with Postman",
			"Managed code with GitHub and deployed to AWS",
			"Utilized Android Studio for mobile app development",
			"Integrated content management system (CMS) tools for efficient workflows",
		],
	},
];

const ExperienceComponent = () => {
	const [visible, setVisible] = useState(false);
	const internships = experienceData.filter((item) => item.type === "internship");
	const experiences = experienceData.filter((item) => item.type === "experience");

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById("experience");
		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	const renderExperience = (items, gradient) => {
		return items.map((item, index) => (
			<Fade key={index} in={visible} timeout={800 + index * 200}>
				<Box
					sx={{
						display: "flex",
						gap: { xs: 2, sm: 3, md: 4 },
						marginBottom: { xs: 4, sm: 5 },
						position: "relative",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							minWidth: { xs: "50px", sm: "60px" },
						}}
					>
						<Box
							sx={{
								width: { xs: "48px", sm: "56px" },
								height: { xs: "48px", sm: "56px" },
								borderRadius: "50%",
								background: gradient,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "#ffffff",
								boxShadow: `0 8px 24px ${gradient.includes("667eea") ? "rgba(102, 126, 234, 0.4)" : "rgba(240, 147, 251, 0.4)"}`,
								zIndex: 2,
								position: "relative",
							}}
						>
							{item.type === "internship" ? (
								<WorkIcon sx={{ fontSize: { xs: "24px", sm: "28px" } }} />
							) : (
								<BusinessIcon sx={{ fontSize: { xs: "24px", sm: "28px" } }} />
							)}
						</Box>
						{index < items.length - 1 && (
							<Box
								sx={{
									width: "2px",
									flex: 1,
									background: `linear-gradient(180deg, ${gradient.includes("667eea") ? "#667eea" : "#f093fb"} 0%, transparent 100%)`,
									marginTop: 1,
									minHeight: "40px",
								}}
							/>
						)}
					</Box>

					<Card
						elevation={0}
						sx={{
							flex: 1,
							padding: { xs: 3, sm: 4, md: 5 },
							background: "rgba(255, 255, 255, 0.03)",
							backdropFilter: "blur(20px)",
							borderRadius: "24px",
							border: "1px solid rgba(102, 126, 234, 0.2)",
							boxShadow: "0 8px 32px rgba(102, 126, 234, 0.1)",
							transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
							"&:hover": {
								transform: "translateX(12px) translateY(-4px)",
								boxShadow: "0 16px 48px rgba(102, 126, 234, 0.2)",
								borderColor: "rgba(102, 126, 234, 0.4)",
							},
						}}
					>
						<Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 2 }}>
							<Chip
								label={item.type === "internship" ? "Internship" : "Full-time"}
								sx={{
									fontFamily: "'Space Grotesk', sans-serif",
									background: gradient,
									color: "#ffffff",
									fontWeight: 600,
									fontSize: "0.875rem",
									padding: "6px 16px",
									height: "auto",
								}}
							/>
						</Box>
						<Typography
							variant="h5"
							sx={{
								fontFamily: "'Outfit', sans-serif",
								fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
								fontWeight: 700,
								color: "#ffffff",
								marginBottom: 1,
							}}
						>
							{item.role}
						</Typography>
						<Typography
							variant="h6"
							sx={{
								fontFamily: "'Space Grotesk', sans-serif",
								fontSize: { xs: "1rem", sm: "1.125rem" },
								background: gradient,
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
								fontWeight: 600,
								marginBottom: 1.5,
							}}
						>
							{item.company}
						</Typography>
						<Typography
							variant="body2"
							sx={{
								fontFamily: "'Space Grotesk', sans-serif",
								fontSize: "0.9rem",
								color: "rgba(255, 255, 255, 0.6)",
								marginBottom: 3,
								fontWeight: 500,
							}}
						>
							{item.duration}
						</Typography>
						<Box component="ul" sx={{ paddingLeft: 3, margin: 0 }}>
							{item.achievements.map((ach, idx) => (
								<Typography
									key={idx}
									component="li"
									variant="body1"
									sx={{
										fontFamily: "'Space Grotesk', sans-serif",
										fontSize: { xs: "0.95rem", sm: "1rem" },
										color: "rgba(255, 255, 255, 0.8)",
										lineHeight: 1.8,
										marginBottom: 1.5,
									}}
								>
									{ach}
								</Typography>
							))}
						</Box>
					</Card>
				</Box>
			</Fade>
		));
	};

	return (
		<Box
			id="experience"
			sx={{
				background: "linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%)",
				padding: { xs: "100px 20px", sm: "120px 40px", md: "140px 60px" },
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Background decoration */}
			<Box
				sx={{
					position: "absolute",
					bottom: "-20%",
					left: "-10%",
					width: "600px",
					height: "600px",
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(240, 147, 251, 0.15) 0%, transparent 70%)",
					filter: "blur(120px)",
					pointerEvents: "none",
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
								My Experience
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

						{internships.length > 0 && (
							<Box sx={{ marginBottom: { xs: 8, sm: 10 } }}>
								<Typography
									variant="h4"
									sx={{
										fontFamily: "'Outfit', sans-serif",
										fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
										fontWeight: 700,
										color: "#ffffff",
										marginBottom: { xs: 4, sm: 6 },
										textAlign: "center",
									}}
								>
									Internships
								</Typography>
								{renderExperience(internships, "linear-gradient(135deg, #667eea 0%, #764ba2 100%)")}
							</Box>
						)}

						{experiences.length > 0 && (
							<Box>
								<Typography
									variant="h4"
									sx={{
										fontFamily: "'Outfit', sans-serif",
										fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
										fontWeight: 700,
										color: "#ffffff",
										marginBottom: { xs: 4, sm: 6 },
										textAlign: "center",
									}}
								>
									Professional Experience
								</Typography>
								{renderExperience(experiences, "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)")}
							</Box>
						)}
					</Box>
				</Fade>
			</Container>
		</Box>
	);
};

export default ExperienceComponent;
