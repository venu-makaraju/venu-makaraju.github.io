import React from "react";
import { Card, CardContent, Typography, Grid, Box, useTheme } from "@mui/material";
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
		date: "June 2025",
		icon: faPalette,
	},
	{
		title: "Infosys Springboard - HTML",
		date: "July 2025",
		icon: faHtml5,
	},
	{
		title: "Infosys Springboard - JavaScript",
		date: "August 2025",
		icon: faJsSquare,
	},
	{
		title: "Infosys Springboard - Bootstrap",
		date: "September 2025",
		icon: faBootstrap,
	},
];

const CertificationsComponent = () => {
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
						backgroundColor: theme.palette.primary.main,
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
							<CardContent sx={{ textAlign: "center", padding: 4 }}>
								<FontAwesomeIcon
									icon={cert.icon}
									size="3x"
									style={{ color: theme.palette.primary.main }}
								/>
								<Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
									{cert.title}
								</Typography>
								<Typography
									variant="body2"
									sx={{ color: theme.palette.text.secondary }}
								>
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
