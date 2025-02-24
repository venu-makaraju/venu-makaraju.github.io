import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const experienceData = [
	{
		role: "Web Development/ ML Intern",
		company: "IIT Delhi",
		duration: "Feb 2024 - Jun 2024",
		achievements: [
			"Utilized Machine Learning-based audio-to-text transcription using Whisper Model and Implemented Grammar correction using T5 Large Language Model and made an UI for users to upload their files with help of HTML, CSS, JS"
		],
	},
	{
		role: "Web Development Intern",
		company: "Aspire Info Labs",
		duration: "May 2023 - Jul 2023",
		achievements: [
			"Delved into HTML and CSS, crafting login web pages and gained insights into how JavaScript facilitates interaction with the backend, deepening understanding of web development dynamics."
		],
	},
	{
		role: "Data Analyst Intern",
		company: "LDU Business Services",
		duration: "Dec 2023 - Apr 2024",
		achievements: [
			"Gained an understanding of SAP and ERP concepts, particularly in Vendor Tables Management, Product Tables Analysis and Customer Tables Management.Additionally, a Court Case Tracker system was developed to notify clients of daily court cases through WhatsApp and Gmail."
		],
	},
	{
		role: "Embedded Systems Intern",
		company: "Efftronics Systems Pvt.Ltd",
		duration: "May 2022 - Oct 2023",
		achievements: [
			"Conducted a comprehensive study on the LPC1769 microcontroller and Integrated the Controller Area Network protocols to transfer the message from transmitter to Receiver using a couple of ICs facilitating the reliable communication between the devices."
		],
	},
];

const ExperienceComponent = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#212A31", // Dark background
				p: { xs: 1, sm: 4 },
				color: "#fff",
				minHeight: "100vh", // Ensure the container has enough height
			}}
		>
			<Typography
				variant="h4"
				align="center"
				sx={{
					margin: "20px 0px",
					"&::after": {
						content: '""',
						display: "block",
						width: "60px",
						height: "3px",
						backgroundColor: "#D3D9D4",
						margin: "8px auto 0",
					},
				}}
			>
				My Internships
			</Typography>

			{/* Container for Line and Cards */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					position: "relative",
					width: "100%", // Ensure container takes full width
				}}
			>
				{/* Vertical line */}
				<Box
					sx={{
						position: "absolute",
						left: { xs: "5%", sm: "10%" }, // Adjusted for responsiveness
						top: 0,
						bottom: 0,
						width: "2px",
						backgroundColor: "#aaa",
						zIndex: 1,
					}}
				/>

				{/* Cards */}
				{experienceData.map((item, index) => (
					<Box
						key={index}
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							marginBottom: 4,
							position: "relative",
						}}
					>
						{/* Dot on the vertical line */}
						<Box
							sx={{
								position: "absolute",
								left: { xs: "5%", sm: "10%" }, // Aligns with line position
								transform: "translate(-50%, -50%)",
								width: 16,
								height: 16,
								borderRadius: "50%",
								backgroundColor: "#333",
								border: "2px solid #aaa",
								zIndex: 2, // Ensure dot is above the line
							}}
						/>

						{/* Card */}
						<Card
							sx={{
								width: "80%", // Fixed width for all cards
								backgroundColor: "#124E66", // Dark background for cards
								color: "#fff",
								borderRadius: 2,
								boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
								zIndex: 2,
								marginLeft: { xs: "12%", sm: "12%" }, // Adjust the left margin for responsiveness
							}}
						>
							<CardContent>
								<Typography variant="h4" gutterBottom>
									{item.role} - {item.company}
								</Typography>
								<Typography variant="body2" color={"text"} gutterBottom>
									{item.duration}
								</Typography>
								<Typography variant="body1" color="text">
									{item.achievements.map((ach, idx) => (
										<Box key={idx}> - {ach}</Box>
									))}
								</Typography>
							</CardContent>
						</Card>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default ExperienceComponent;