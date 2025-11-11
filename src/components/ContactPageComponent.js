import React from "react";
import { Box, Grid, Typography, TextField, Button, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const ContactPageComponent = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				backgroundColor: theme.palette.background.paper,
				padding: 4,
				color: theme.palette.text.primary,
				transition: "background-color 0.3s ease, color 0.3s ease",
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
					color: theme.palette.text.primary,
					position: "relative",
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
				Get in Touch
			</Typography>

			<Grid container spacing={4}>
				{/* Left Column: Contact Details */}
				<Grid item xs={12} md={6}>
					<Box sx={{ marginBottom: 3, display: "flex", alignItems: "center" }}>
						<FontAwesomeIcon
							icon={faEnvelope}
							size="lg"
							style={{ marginRight: 16, color: theme.palette.primary.main }}
						/>
						<Typography
							variant="h6"
							sx={{
								fontSize: { xs: "1rem", md: "2rem" },
								color: theme.palette.text.primary,
							}}
						>
							venumakaraju@gmail.com
						</Typography>
					</Box>
					<Box sx={{ marginBottom: 3, display: "flex", alignItems: "center" }}>
						<FontAwesomeIcon
							icon={faPhone}
							size="lg"
							style={{ marginRight: 16, color: theme.palette.primary.main }}
						/>
						<Typography
							variant="h6"
							sx={{
								fontSize: { xs: "1rem", md: "2rem" },
								color: theme.palette.text.primary,
							}}
						>
							+91-8639191791
						</Typography>
					</Box>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<FontAwesomeIcon
							icon={faLinkedinIn}
							size="lg"
							style={{ marginRight: 16, color: theme.palette.primary.main }}
						/>
						<Typography
							variant="h6"
							component="a"
							href="https://www.linkedin.com/in/venu-makaraju-5b06ab342/"
							target="_blank"
							rel="noopener noreferrer"
							sx={{
								textDecoration: "none",
								color: theme.palette.text.primary,
								fontSize: { xs: "1rem", md: "2rem" },
								"&:hover": { textDecoration: "underline" },
							}}
						>
							https://www.linkedin.com/in/venu-makaraju-5b06ab342/
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
							InputLabelProps={{
								style: { color: theme.palette.text.secondary },
							}}
							sx={{
								backgroundColor: theme.palette.background.default,
								border: `1px solid ${theme.palette.divider}`,
								borderRadius: 1,
								input: { color: theme.palette.text.primary },
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: theme.palette.divider,
									},
									"&:hover fieldset": {
										borderColor: theme.palette.primary.main,
									},
									"&.Mui-focused fieldset": {
										borderColor: theme.palette.primary.main,
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
							InputLabelProps={{
								style: { color: theme.palette.text.secondary },
							}}
							sx={{
								backgroundColor: theme.palette.background.default,
								border: `1px solid ${theme.palette.divider}`,
								borderRadius: 1,
								input: { color: theme.palette.text.primary },
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: theme.palette.divider,
									},
									"&:hover fieldset": {
										borderColor: theme.palette.primary.main,
									},
									"&.Mui-focused fieldset": {
										borderColor: theme.palette.primary.main,
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
							InputLabelProps={{
								style: { color: theme.palette.text.secondary },
							}}
							sx={{
								backgroundColor: theme.palette.background.default,
								border: `1px solid ${theme.palette.divider}`,
								borderRadius: 1,
								textarea: { color: theme.palette.text.primary },
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: theme.palette.divider,
									},
									"&:hover fieldset": {
										borderColor: theme.palette.primary.main,
									},
									"&.Mui-focused fieldset": {
										borderColor: theme.palette.primary.main,
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
								backgroundColor: theme.palette.primary.main,
								color: theme.palette.primary.contrastText,
								padding: "12px 24px",
								"&:hover": {
									backgroundColor:
										theme.palette.mode === "dark"
											? theme.palette.primary.light
											: theme.palette.primary.dark,
								},
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