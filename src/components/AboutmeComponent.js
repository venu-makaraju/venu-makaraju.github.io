import React from "react";
import { Grid, Box, Typography, Card, CardContent, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// Example data for "About Me" and "Education"
const educationDetails = [
	{
		institution: "NRI Institute of Technology",
		degree: "Department of Civil Engineering",
		location: "Agiripalli, Vijayawada, India",
		date: "Jul 2022",
		icon: faGraduationCap,
	},
];

const AboutMeComponent = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				padding: 4,
				backgroundColor: theme.palette.background.default,
				color: theme.palette.text.primary,
				transition: "background-color 0.3s ease, color 0.3s ease",
			}}
		>
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
								backgroundColor: theme.palette.primary.main,
								margin: "8px auto 0",
							},
						}}
					>
						About Me
					</Typography>
					<Typography variant="body1" paragraph sx={{ fontSize: "18px" }}>
						I am a creative and driven software engineer dedicated to building digital solutions that transform everyday challenges into intuitive experiences. I bring clarity and innovation to every project.
					</Typography>
					<Typography variant="body1" paragraph sx={{ fontSize: "18px" }}>
						My focus is on developing applications that are not only visually appealing but also highly functional. I value clean, efficient code and scalable design in all my work.
					</Typography>
					<Typography variant="body1" paragraph sx={{ fontSize: "18px" }}>
						I believe in continuous learning and collaboration, striving to grow professionally while delivering meaningful impact. I am committed to advancing technology with purpose and precision.
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
								backgroundColor: theme.palette.primary.main,
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
								backgroundColor: theme.palette.background.paper,
								boxShadow:
									theme.palette.mode === "dark"
										? "0 20px 45px rgba(0, 0, 0, 0.45)"
										: "0 20px 45px rgba(18, 78, 102, 0.15)",
								"&:hover": {
									boxShadow:
										theme.palette.mode === "dark"
											? "0 30px 65px rgba(0, 0, 0, 0.55)"
											: "0 30px 65px rgba(18, 78, 102, 0.25)",
								},
							}}
						>
							<CardContent sx={{ textAlign: "center", padding: 3 }}>
								<FontAwesomeIcon
									icon={education.icon}
									size="2x"
									style={{ color: theme.palette.primary.main }}
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
										color: theme.palette.text.secondary,
									}}
								>
									{education.location}
								</Typography>
								<Typography
									variant="body2"
									sx={{
										fontSize: { xs: "0.875rem", md: "1.1rem" }, // Default size on small screens, larger on desktop
										marginTop: 0.5,
										color: theme.palette.text.secondary,
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