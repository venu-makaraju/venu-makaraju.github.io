import React from "react";
import { Grid, Box, Typography, Card, CardContent } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// Example data for "About Me" and "Education"
const educationDetails = [
	{
		institution: " Velagapudi Ramakrishna Siddhartha Engineering College",
		degree: "Department of Electronics and Communication Engineering",
		location: "Kanuru, Vijayawada, India",
		date: "Jul 2024",
		icon: faGraduationCap,
	},
];

const AboutMeComponent = () => {
	return (
		<Box sx={{ padding: 4 }}>
			<Grid
				container
				spacing={4}
				sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
			>
				{/* Left Section: About Me */}
				<Grid item xs={12} md={6}>
					<Typography
						variant="h4"
						gutterBottom
						sx={{
							"&::after": {
								content: '""',
								display: "block",
								width: "60px",
								height: "3px",
								backgroundColor: "#124E66",
								margin: "8px auto 0",
							},
						}}
					>
						About Me
					</Typography>
					<Typography variant="body1" paragraph sx={{ fontSize: "18px" }}>
						I am a passionate and detail-oriented engineer with a strong academic background in Electronics and Communication Engineering from Velagapudi Ramakrishna Siddhartha Engineering College, Kanuru. My academic journey has been complemented by outstanding achievements, including a CGPA of 8.82 during my undergraduate studies.
					</Typography>
					<Typography variant="body1" paragraph sx={{ fontSize: "18px" }}>
						Throughout my education, I have honed my technical skills through hands-on internships in diverse domains such as web development, data analytics, and embedded systems. My work includes implementing Machine Learning-based transcription systems, developing dynamic web pages, and integrating Controller Area Network protocols for reliable device communication.
					</Typography>
					<Typography variant="body1" paragraph sx={{ fontSize: "18px" }}>
						With a keen interest in technology and innovation, I aim to bridge theoretical concepts with practical applications, creating solutions that make a meaningful impact. My experiences have instilled in me a problem-solving mindset, a collaborative spirit, and a commitment to continuous learning.
					</Typography>
				</Grid>

				{/* Right Section: Education */}
				<Grid item xs={12} md={6}>
					<Typography
						variant="h4"
						gutterBottom
						sx={{
							"&::after": {
								content: '""',
								display: "block",
								width: "60px",
								height: "3px",
								backgroundColor: "#124E66",
								margin: "8px auto 0",
							},
						}}
					>
						Education
					</Typography>
					{educationDetails.map((education, index) => (
						<Card
							key={index}
							variant="outlined"
							sx={{
								padding: "60px 40px",
								marginBottom: 2,
								display: "flex",
								flexDirection: "column",
								borderRadius: "16px",
								boxShadow: 3,
								"&:hover": {
									boxShadow: 6,
								},
							}}
						>
							<CardContent sx={{ textAlign: "center", padding: 3 }}>
								<FontAwesomeIcon
									icon={education.icon}
									size="2x"
									style={{ color: "#124E66" }}
								/>
								<Typography variant="h6" sx={{ marginTop: 2 }}>
									{education.degree}
								</Typography>
								<Typography
									variant="body1"
									sx={{
										marginTop: 1,
										fontSize: { xs: "1rem", md: "1.25rem" }, // Default size on small screens, larger on desktop
									}}
								>
									{education.institution}
								</Typography>
								<Typography
									variant="body2"
									sx={{
										fontSize: { xs: "0.875rem", md: "1.1rem" }, // Default size on small screens, larger on desktop
										marginTop: 0.5,
									}}
								>
									{education.location}
								</Typography>
								<Typography
									variant="body2"
									sx={{
										fontSize: { xs: "0.875rem", md: "1.1rem" }, // Default size on small screens, larger on desktop
										marginTop: 0.5,
									}}
								>
									{education.date}
								</Typography>
							</CardContent>
						</Card>
					))}
				</Grid>
			</Grid>
		</Box>
	);
};

export default AboutMeComponent;