import React, { useState } from "react";
import {
	Box,
	Grid,
	Typography,
	TextField,
	Button,
	useTheme,
	Paper,
	Stack,
	Divider,
	IconButton,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import emailjs from "@emailjs/browser";

const ContactPageComponent = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === "dark";

	const backgroundGradient = isDark
		? "linear-gradient(180deg, rgba(11,20,26,1) 0%, rgba(22,32,41,0.92) 55%, rgba(11,20,26,1) 100%)"
		: "linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(231,242,246,0.85) 60%, rgba(245,245,245,1) 100%)";

	const cardBg = isDark ? "rgba(22,32,41,0.85)" : "rgba(255,255,255,0.9)";
	const cardShadow = isDark
		? "0 25px 60px rgba(0,0,0,0.45)"
		: "0 25px 60px rgba(18, 78, 102, 0.15)";

	const contactDetails = [
		{
			icon: faEnvelope,
			label: "Email",
			value: "venumakaraju@gmail.com",
		},
		{
			icon: faMapMarkerAlt,
			label: "Location",
			value: "Hyderabad, India",
		},
		{
			icon: faPhone,
			label: "Phone",
			value: "+91-8125757979",
		},
	];

	const socialLinks = [
		{
			icon: faLinkedinIn,
			href: "https://www.linkedin.com/in/venu-makaraju/",
			label: "LinkedIn",
		},
		{
			icon: faGithub,
			href: "https://github.com/venu-makaraju",
			label: "GitHub",
		},
		{
			icon: faEnvelope,
			href: "https://mail.google.com/mail/?view=cm&fs=1&to=venumakaraju@gmail.com",
			label: "Email",
		},
	];

	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSending, setIsSending] = useState(false);
	const [feedback, setFeedback] = useState({ type: null, message: "" });

	const serviceId =
		process.env.REACT_APP_EMAILJS_SERVICE_ID ||
		process.env.VITE_EMAILJS_SERVICE_ID;
	const templateId =
		process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
		process.env.VITE_EMAILJS_TEMPLATE_ID;
	const publicKey =
		process.env.REACT_APP_EMAILJS_PUBLIC_KEY ||
		process.env.VITE_EMAILJS_PUBLIC_KEY;

	const handleFieldChange = (event) => {
		const { name, value } = event.target;
		setFormValues((prev) => ({ ...prev, [name]: value }));
		if (feedback.type) {
			setFeedback({ type: null, message: "" });
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!serviceId || !templateId || !publicKey) {
			setFeedback({
				type: "error",
				message:
					"Email service is not configured yet. Please contact me directly at venumakaraju@gmail.com.",
			});
			return;
		}

		setIsSending(true);
		try {
			await emailjs.send(
				serviceId,
				templateId,
				{
					from_name: formValues.name,
					reply_to: formValues.email,
					name: formValues.name,
					email: formValues.email,
					subject: formValues.subject,
					message: formValues.message,
				},
				publicKey
			);

			setFeedback({
				type: "success",
				message: "Thanks for reaching out! I’ll reply as soon as I can.",
			});
			setFormValues({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		} catch (error) {
			console.error("EmailJS error:", error);
			setFeedback({
				type: "error",
				message:
					"Something went wrong while sending your message. Please try again or email me directly.",
			});
		} finally {
			setIsSending(false);
		}
	};

	return (
		<Box
			sx={{
				background: backgroundGradient,
				padding: { xs: 4, sm: 6, md: 8 },
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

			<Grid container spacing={4} sx={{ alignItems: "stretch" }}>
				{/* Left Column: Contact Details */}
				<Grid item xs={12} md={5}>
					<Box>
						<Stack spacing={2.5}>
							{contactDetails.map(({ icon, label, value }) => (
								<Paper
									key={label}
									elevation={0}
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 2,
										padding: { xs: 2.5, md: 3 },
										borderRadius: 4,
										backgroundColor: cardBg,
										boxShadow: cardShadow,
										border: `1px solid ${theme.palette.primary.main}20`,
										transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
										"&:hover": {
											transform: "translateY(-6px)",
											boxShadow: isDark
												? "0 28px 65px rgba(91, 209, 215, 0.25)"
												: "0 28px 65px rgba(18, 78, 102, 0.25)",
											border: `1px solid ${theme.palette.primary.main}`,
										},
									}}
								>
									<Box
										sx={{
											width: 64,
											height: 72,
											borderRadius: "20px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											backgroundColor: theme.palette.primary.main,
											color: theme.palette.primary.contrastText,
										}}
									>
										<FontAwesomeIcon icon={icon} size="lg" />
									</Box>
									<Box>
										<Typography
											variant="subtitle2"
											sx={{
												fontWeight: 600,
												textTransform: "uppercase",
												letterSpacing: 1,
												color: theme.palette.secondary.main,
												textAlign: "left",
											}}
										>
											{label}
										</Typography>
										<Typography
											variant="h6"
											sx={{ fontWeight: 600, textAlign: "left" }}
										>
											{value}
										</Typography>
									</Box>
								</Paper>
							))}
						</Stack>

						<Stack
							direction="row"
							spacing={1.5}
							justifyContent="center"
							sx={{ mt: 3 }}
						>
							{socialLinks.map(({ icon, href, label }) => (
								<IconButton
									key={label}
									component="a"
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									sx={{
										width: 46,
										height: 46,
										borderRadius: "16px",
										backgroundColor: theme.palette.background.default,
										color: theme.palette.primary.main,
										transition: "all 0.3s ease",
										boxShadow: cardShadow,
										"&:hover": {
											backgroundColor: theme.palette.primary.main,
											color: theme.palette.primary.contrastText,
											transform: "translateY(-3px)",
										},
									}}
								>
									<FontAwesomeIcon icon={icon} />
								</IconButton>
							))}
						</Stack>
					</Box>
				</Grid>

				{/* Right Column: Contact Form */}
				<Grid item xs={12} md={7}>
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{ height: "100%" }}
					>
						<Paper
							elevation={0}
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: 3,
								padding: { xs: 2.5, md: 4 },
								height: "100%",
								borderRadius: 4,
								backgroundColor: cardBg,
								boxShadow: cardShadow,
								border: `1px solid ${theme.palette.primary.main}20`,
							}}
						>
							<TextField
								label="Name"
								variant="outlined"
								fullWidth
								required
								name="name"
								value={formValues.name}
								onChange={handleFieldChange}
								InputLabelProps={{
									style: { color: theme.palette.text.secondary },
								}}
								sx={{
									backgroundColor: theme.palette.background.default,
									borderRadius: 2,
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

							<TextField
								label="Email"
								variant="outlined"
								type="email"
								fullWidth
								required
								name="email"
								value={formValues.email}
								onChange={handleFieldChange}
								InputLabelProps={{
									style: { color: theme.palette.text.secondary },
								}}
								sx={{
									backgroundColor: theme.palette.background.default,
									borderRadius: 2,
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

							<TextField
								label="Subject"
								variant="outlined"
								fullWidth
								required
								name="subject"
								value={formValues.subject}
								onChange={handleFieldChange}
								InputLabelProps={{
									style: { color: theme.palette.text.secondary },
								}}
								sx={{
									backgroundColor: theme.palette.background.default,
									borderRadius: 2,
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

							<TextField
								label="Message"
								variant="outlined"
								multiline
								minRows={4}
								fullWidth
								required
								name="message"
								value={formValues.message}
								onChange={handleFieldChange}
								InputLabelProps={{
									style: { color: theme.palette.text.secondary },
								}}
								sx={{
									backgroundColor: theme.palette.background.default,
									borderRadius: 2,
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

							<Button
								variant="contained"
								size="large"
								fullWidth
								type="submit"
								sx={{
									fontSize: "1.05rem",
									fontWeight: 600,
									backgroundColor: theme.palette.primary.main,
									color: theme.palette.primary.contrastText,
									padding: "14px 24px",
									borderRadius: 3,
									"&:hover": {
										backgroundColor: theme.palette.mode === "dark"
											? theme.palette.primary.light
											: theme.palette.primary.dark,
									},
								}}
								disabled={isSending}
							>
								{isSending ? "Sending..." : "Send Message"}
							</Button>

							{feedback.message && (
								<Typography
									variant="body2"
									sx={{
										textAlign: "center",
										fontWeight: 500,
										color:
											feedback.type === "success"
												? theme.palette.primary.main
												: theme.palette.error.main,
									}}
								>
									{feedback.message}
								</Typography>
							)}
						</Paper>
					</Box>
				</Grid>
			</Grid>

			{/* Footer */}
			<Box
				component="footer"
				sx={{
					marginTop: { xs: 6, md: 10 },
					paddingTop: { xs: 4, md: 6 },
					paddingBottom: { xs: 2, md: 4 },
				}}
			>
				<Paper
					elevation={0}
					sx={{
						padding: { xs: 3, md: 5 },
						borderRadius: 5,
						backgroundColor: cardBg,
						boxShadow: cardShadow,
						border: `1px solid ${theme.palette.primary.main}20`,
						textAlign: "center",
					}}
				>
					<Typography variant="h6" sx={{ fontWeight: 700 }}>
						Venu Gopala Raju Makaraju
					</Typography>
					<Typography
						variant="body2"
						sx={{ color: theme.palette.text.secondary, mt: 1 }}
					>
						Software Engineer • Full-Stack Developer
					</Typography>

					<Stack
						direction="row"
						spacing={2}
						justifyContent="center"
						flexWrap="wrap"
						sx={{ mt: 3 }}
					>
						{["landing", "about", "experience", "skills", "certifications", "contact"].map(
							(section) => (
								<Button
									key={section}
									component={Link}
									to={section}
									spy
									smooth
									duration={500}
									offset={-70}
									variant="text"
									sx={{
										color: theme.palette.text.primary,
										fontWeight: 600,
										textTransform: "capitalize",
										"&:hover": {
											color: theme.palette.primary.main,
										},
									}}
								>
									{section}
								</Button>
							)
						)}
					</Stack>

					<Divider sx={{ my: 3, opacity: 0.3 }} />

					<Stack direction="row" spacing={1.5} justifyContent="center" sx={{ mb: 3 }}>
						{socialLinks.map(({ icon, href, label }) => (
							<IconButton
								key={label}
								component="a"
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${label} profile`}
								sx={{
									width: 40,
									height: 40,
									borderRadius: "12px",
									backgroundColor: theme.palette.background.default,
									color: theme.palette.text.primary,
									boxShadow: cardShadow,
									"&:hover": {
										backgroundColor: theme.palette.primary.main,
										color: theme.palette.primary.contrastText,
									},
								}}
							>
								<FontAwesomeIcon icon={icon} />
							</IconButton>
						))}
					</Stack>

					<Typography variant="body2">
						© {new Date().getFullYear()} Venu Gopala Raju Makaraju. All rights reserved.
					</Typography>
				</Paper>
			</Box>
		</Box>
	);
};

export default ContactPageComponent;