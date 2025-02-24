import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloud, faMedal } from "@fortawesome/free-solid-svg-icons"; // Example FA icons
import { faJava, faPython } from "@fortawesome/free-brands-svg-icons"; // AWS icon
import { faWindows } from "@fortawesome/free-brands-svg-icons/faWindows";

// Example certifications array with FA icons
const certifications = [
	{
		title: "Microsoft D365",
		date: "Sep 2024",
		icon: faWindows, // Use FA AWS icon
	},
	{
		title: "Programming Essentials of Python",
		date: "Jul 2024",
		icon: faPython, // Use check-circle icon for LambdaTest
	},
	{
		title: "Basics of Java",
		date: "Apr 2024",
		icon: faJava, // Use cloud icon for AWS Academy
	},
];

const CertificationsComponent = () => {
	return (
		<Box sx={{ padding: 4 }}>
			<Typography
				variant="h4"
				gutterBottom
				sx={{
					marginBottom: 4,
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
				My Certifications
			</Typography>
			<Grid container spacing={3}>
				{certifications.map((cert, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<Card
							variant="outlined"
							sx={{
								display: "flex",
								flexDirection: "column",
								height: "100%",
								border: "none", // Remove the border
								borderRadius: "16px", // Add border radius
								boxShadow: 3, // Add box shadow
								"&:hover": {
									boxShadow: 6, // Increase box shadow on hover
								},
							}}
						>
							<CardContent sx={{ textAlign: "center", padding: 4 }}>
								<FontAwesomeIcon
									icon={cert.icon}
									size="3x"
									style={{ color: "#124E66" }}
								/>
								<Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
									{cert.title}
								</Typography>
								<Typography variant="body2" color="textSecondary">
									{cert.date}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default CertificationsComponent;