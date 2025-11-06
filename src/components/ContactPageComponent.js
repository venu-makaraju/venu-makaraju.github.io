import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, TextField, Button, Container, Fade, Grow } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";

const ContactPageComponent = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [visible, setVisible] = useState(false);
	const [focused, setFocused] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById("contact");
		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setFormData({ name: "", email: "", message: "" });
	};

	const contactMethods = [
		{
			icon: EmailIcon,
			label: "Email",
			value: "venumakaraju@gmail.com",
			link: "mailto:venumakaraju@gmail.com",
			gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
		},
		{
			icon: PhoneIcon,
			label: "Phone",
			value: "+91-8639191791",
			link: "tel:+918639191791",
			gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
		},
		{
			icon: LinkedInIcon,
			label: "LinkedIn",
			value: "Connect on LinkedIn",
			link: "https://www.linkedin.com/in/venu-makaraju-5b06ab342/",
			gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
		},
	];

	return (
		<Box
			id="contact"
			sx={{
				background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
				padding: { xs: "100px 20px", sm: "120px 40px", md: "140px 60px" },
				minHeight: "100vh",
				color: "#ffffff",
				position: "relative",
				overflow: "hidden",
				display: "flex",
				alignItems: "center",
			}}
		>
			{/* Animated background */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					opacity: 0.05,
					backgroundImage: "radial-gradient(circle at 2px 2px, rgba(102, 126, 234, 0.5) 1px, transparent 0)",
					backgroundSize: "50px 50px",
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
									color: "#ffffff",
									marginBottom: 2,
									letterSpacing: "-1px",
								}}
							>
								Get in Touch
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

						<Grid container spacing={{ xs: 4, sm: 5, md: 6 }} sx={{ alignItems: "stretch" }}>
							{/* Left Column: Contact Details */}
							<Grid item xs={12} md={6}>
								<Grow in={visible} timeout={1500}>
									<Box
										sx={{
											padding: { xs: 4, sm: 5 },
											height: "100%",
											background: "rgba(255, 255, 255, 0.03)",
											backdropFilter: "blur(20px)",
											borderRadius: "24px",
											border: "1px solid rgba(102, 126, 234, 0.2)",
											boxShadow: "0 8px 32px rgba(102, 126, 234, 0.1)",
											display: "flex",
											flexDirection: "column",
										}}
									>
										<Typography
											variant="h4"
											sx={{
												fontFamily: "'Outfit', sans-serif",
												fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
												fontWeight: 700,
												marginBottom: 4,
												color: "#ffffff",
											}}
										>
											Let's Connect
										</Typography>

										{contactMethods.map((method, index) => (
											<Box
												key={index}
												component="a"
												href={method.link}
												target={method.link.startsWith("http") ? "_blank" : undefined}
												rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
												sx={{
													display: "flex",
													alignItems: "center",
													gap: 3,
													marginBottom: 4,
													padding: 3,
													borderRadius: "20px",
													background: "rgba(255, 255, 255, 0.03)",
													backdropFilter: "blur(10px)",
													border: "1px solid rgba(102, 126, 234, 0.2)",
													textDecoration: "none",
													transition: "all 0.3s ease",
													cursor: "pointer",
													"&:hover": {
														transform: "translateX(8px)",
														background: "rgba(102, 126, 234, 0.1)",
														borderColor: "rgba(102, 126, 234, 0.4)",
														boxShadow: "0 8px 24px rgba(102, 126, 234, 0.2)",
													},
												}}
											>
												<Box
													sx={{
														width: "56px",
														height: "56px",
														borderRadius: "16px",
														background: method.gradient,
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														flexShrink: 0,
														boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
													}}
												>
													<method.icon sx={{ fontSize: "28px", color: "#ffffff" }} />
												</Box>
												<Box>
													<Typography
														variant="body2"
														sx={{
															fontFamily: "'Space Grotesk', sans-serif",
															color: "rgba(255, 255, 255, 0.7)",
															fontSize: "0.875rem",
															textTransform: "uppercase",
															letterSpacing: "1px",
															marginBottom: 0.5,
															fontWeight: 500,
														}}
													>
														{method.label}
													</Typography>
													<Typography
														variant="body1"
														sx={{
															fontFamily: "'Space Grotesk', sans-serif",
															fontSize: { xs: "0.95rem", sm: "1.05rem" },
															color: "#ffffff",
															fontWeight: 600,
														}}
													>
														{method.value}
													</Typography>
												</Box>
											</Box>
										))}
									</Box>
								</Grow>
							</Grid>

							{/* Right Column: Contact Form */}
							<Grid item xs={12} md={6}>
								<Grow in={visible} timeout={2000}>
									<Box
										component="form"
										onSubmit={handleSubmit}
										sx={{
											padding: { xs: 4, sm: 5 },
											background: "rgba(255, 255, 255, 0.03)",
											backdropFilter: "blur(20px)",
											borderRadius: "24px",
											border: "1px solid rgba(102, 126, 234, 0.2)",
											boxShadow: "0 8px 32px rgba(102, 126, 234, 0.1)",
											display: "flex",
											flexDirection: "column",
											gap: 3,
											height: "100%",
										}}
									>
										<TextField
											name="name"
											label="Name"
											variant="outlined"
											fullWidth
											required
											value={formData.name}
											onChange={handleChange}
											onFocus={() => setFocused("name")}
											onBlur={() => setFocused("")}
											sx={{
												"& .MuiOutlinedInput-root": {
													fontFamily: "'Space Grotesk', sans-serif",
													color: "#ffffff",
													background: focused === "name"
														? "rgba(255, 255, 255, 0.08)"
														: "rgba(255, 255, 255, 0.03)",
													borderRadius: "16px",
													transition: "all 0.3s ease",
													"& fieldset": {
														borderColor: focused === "name"
															? "rgba(102, 126, 234, 0.5)"
															: "rgba(102, 126, 234, 0.2)",
														borderWidth: "2px",
													},
													"&:hover fieldset": {
														borderColor: "rgba(102, 126, 234, 0.4)",
													},
													"&.Mui-focused fieldset": {
														borderColor: "rgba(102, 126, 234, 0.6)",
													},
												},
												"& .MuiInputLabel-root": {
													fontFamily: "'Space Grotesk', sans-serif",
													color: "rgba(255, 255, 255, 0.7)",
													"&.Mui-focused": {
														color: "#667eea",
													},
												},
											}}
										/>

										<TextField
											name="email"
											label="Email"
											variant="outlined"
											type="email"
											fullWidth
											required
											value={formData.email}
											onChange={handleChange}
											onFocus={() => setFocused("email")}
											onBlur={() => setFocused("")}
											sx={{
												"& .MuiOutlinedInput-root": {
													fontFamily: "'Space Grotesk', sans-serif",
													color: "#ffffff",
													background: focused === "email"
														? "rgba(255, 255, 255, 0.08)"
														: "rgba(255, 255, 255, 0.03)",
													borderRadius: "16px",
													transition: "all 0.3s ease",
													"& fieldset": {
														borderColor: focused === "email"
															? "rgba(102, 126, 234, 0.5)"
															: "rgba(102, 126, 234, 0.2)",
														borderWidth: "2px",
													},
													"&:hover fieldset": {
														borderColor: "rgba(102, 126, 234, 0.4)",
													},
													"&.Mui-focused fieldset": {
														borderColor: "rgba(102, 126, 234, 0.6)",
													},
												},
												"& .MuiInputLabel-root": {
													fontFamily: "'Space Grotesk', sans-serif",
													color: "rgba(255, 255, 255, 0.7)",
													"&.Mui-focused": {
														color: "#667eea",
													},
												},
											}}
										/>

										<TextField
											name="message"
											label="Message"
											variant="outlined"
											multiline
											rows={5}
											fullWidth
											required
											value={formData.message}
											onChange={handleChange}
											onFocus={() => setFocused("message")}
											onBlur={() => setFocused("")}
											sx={{
												"& .MuiOutlinedInput-root": {
													fontFamily: "'Space Grotesk', sans-serif",
													color: "#ffffff",
													background: focused === "message"
														? "rgba(255, 255, 255, 0.08)"
														: "rgba(255, 255, 255, 0.03)",
													borderRadius: "16px",
													transition: "all 0.3s ease",
													"& fieldset": {
														borderColor: focused === "message"
															? "rgba(102, 126, 234, 0.5)"
															: "rgba(102, 126, 234, 0.2)",
														borderWidth: "2px",
													},
													"&:hover fieldset": {
														borderColor: "rgba(102, 126, 234, 0.4)",
													},
													"&.Mui-focused fieldset": {
														borderColor: "rgba(102, 126, 234, 0.6)",
													},
												},
												"& .MuiInputLabel-root": {
													fontFamily: "'Space Grotesk', sans-serif",
													color: "rgba(255, 255, 255, 0.7)",
													"&.Mui-focused": {
														color: "#667eea",
													},
												},
											}}
										/>

										<Button
											type="submit"
											variant="contained"
											size="large"
											fullWidth
											endIcon={<SendIcon />}
											sx={{
												fontFamily: "'Space Grotesk', sans-serif",
												background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
												color: "#ffffff",
												padding: "16px 32px",
												fontSize: "1.1rem",
												fontWeight: 600,
												letterSpacing: "0.5px",
												textTransform: "none",
												borderRadius: "50px",
												boxShadow: "0 8px 32px rgba(102, 126, 234, 0.4)",
												transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
												border: "none",
												"&:hover": {
													background: "linear-gradient(135deg, #764ba2 0%, #f093fb 100%)",
													transform: "translateY(-4px) scale(1.02)",
													boxShadow: "0 12px 48px rgba(102, 126, 234, 0.5)",
												},
											}}
										>
											Send Message
										</Button>
									</Box>
								</Grow>
							</Grid>
						</Grid>
					</Box>
				</Fade>
			</Container>
		</Box>
	);
};

export default ContactPageComponent;
