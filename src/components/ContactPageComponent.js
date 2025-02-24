import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const ContactPageComponent = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#212A31",
				padding: 4,
				color: "#fff",
			}}
		>
			{/* Centered Title */}
			<Typography
				variant="h4"
				align="center"
				gutterBottom
				sx={{
					fontWeight: "bold",
					marginBottom: 4,
					textTransform: "uppercase",
					color: "#fff",
					position: "relative",
					"&::after": {
						content: '""',
						display: "block",
						width: "60px",
						height: "3px",
						backgroundColor: "#fff",
						margin: "8px auto 0",
					},
				}}
			>
				Get in Touch
			</Typography>

			<Grid container spacing={4}>
				{/* Left Column: Contact Details */}
				<Grid item xs={12} md={6}>
					<Box sx={{ marginBottom: 3, display: "flex", alignItems: "center" }}>
						<FontAwesomeIcon
							icon={faEnvelope}
							size="lg"
							style={{ marginRight: 16, color: "#fff" }}
						/>
						<Typography
							variant="h6"
							sx={{ fontSize: { xs: "1rem", md: "2rem" } }}
						>
							kavyalakshmimakaraju@gmail.com
						</Typography>
					</Box>
					<Box sx={{ marginBottom: 3, display: "flex", alignItems: "center" }}>
						<FontAwesomeIcon
							icon={faPhone}
							size="lg"
							style={{ marginRight: 16, color: "#fff" }}
						/>
						<Typography
							variant="h6"
							sx={{ fontSize: { xs: "1rem", md: "2rem" } }}
						>
							+91-8074570760
						</Typography>
					</Box>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<FontAwesomeIcon
							icon={faLinkedinIn}
							size="lg"
							style={{ marginRight: 16, color: "#fff" }}
						/>
						<Typography
							variant="h6"
							component="a"
							href="https://www.linkedin.com/in/neeharika-vemulapati"
							target="_blank"
							rel="noopener noreferrer"
							sx={{
								textDecoration: "none",
								color: "#fff",
								fontSize: { xs: "1rem", md: "2rem" },
								"&:hover": { textDecoration: "underline" },
							}}
						>
							https://www.linkedin.com/in/kavyalakshmi-makaraju-71ba98214/
						</Typography>
					</Box>
				</Grid>

				{/* Right Column: Contact Form */}
				<Grid item xs={12} md={6}>
					<Box
						component="form"
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 3,
						}}
					>
						{/* Name Field */}
						<TextField
							label="Name"
							variant="outlined"
							fullWidth
							required
							InputLabelProps={{ style: { color: "#fff" } }}
							sx={{
								backgroundColor: "transparent",
								border: "1px solid #fff",
								borderRadius: 1,
								input: { color: "#fff" },
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: "#fff",
									},
									"&:hover fieldset": {
										borderColor: "#fff",
									},
									"&.Mui-focused fieldset": {
										borderColor: "#fff",
									},
								},
							}}
						/>

						{/* Email Field */}
						<TextField
							label="Email"
							variant="outlined"
							type="email"
							fullWidth
							required
							InputLabelProps={{ style: { color: "#fff" } }}
							sx={{
								backgroundColor: "transparent",
								border: "1px solid #fff",
								borderRadius: 1,
								input: { color: "#fff" },
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: "#fff",
									},
									"&:hover fieldset": {
										borderColor: "#fff",
									},
									"&.Mui-focused fieldset": {
										borderColor: "#fff",
									},
								},
							}}
						/>

						{/* Description Field */}
						<TextField
							label="Description"
							variant="outlined"
							multiline
							rows={4}
							fullWidth
							required
							InputLabelProps={{ style: { color: "#fff" } }}
							sx={{
								backgroundColor: "transparent",
								border: "1px solid #fff",
								borderRadius: 1,
								textarea: { color: "#fff" },
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: "#fff",
									},
									"&:hover fieldset": {
										borderColor: "#fff",
									},
									"&.Mui-focused fieldset": {
										borderColor: "#fff",
									},
								},
							}}
						/>

						{/* Full-Width Send Button */}
						<Button
							variant="contained"
							size="large"
							fullWidth
							sx={{
								fontSize: "1.2rem",
								backgroundColor: "#fff",
								color: "#124E66",
								padding: "12px 24px",
								"&:hover": { backgroundColor: "#e6e6e6" },
							}}
						>
							Send
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ContactPageComponent;