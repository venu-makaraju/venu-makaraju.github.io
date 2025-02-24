import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faJsSquare,
	faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const certifications = [
	{
		title: "Infosys Springboard - UI/UX",
		date: "June 2023",
		icon: faPalette,
	},
	{
		title: "Infosys Springboard - HTML",
		date: "July 2023",
		icon: faHtml5,
	},
	{
		title: "Infosys Springboard - JavaScript",
		date: "August 2023",
		icon: faJsSquare,
	},
	{
		title: "Infosys Springboard - Bootstrap",
		date: "September 2023",
		icon: faBootstrap,
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
			{/* 
        Use Grid with 'container' for layout and 'item' for each card. 
        'xs={12} sm={6}' means:
          - on extra-small screens (mobile): card is full width (12/12).
          - on small screens and above: card is half width (6/12), 
            resulting in two columns (2×2 for 4 cards).
      */}
			<Grid container spacing={3}>
				{certifications.map((cert, index) => (
					<Grid item xs={12} sm={6} key={index}>
						<Card
							variant="outlined"
							sx={{
								display: "flex",
								flexDirection: "column",
								height: "100%",
								border: "none",
								borderRadius: "16px",
								boxShadow: 3,
								"&:hover": {
									boxShadow: 6,
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
