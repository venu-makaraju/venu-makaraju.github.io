import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Container, Card, Fade, Grow } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";

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
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById("about");
		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	return (
		<Box
			id="about"
			sx={{
				background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)",
				padding: { xs: "100px 20px", sm: "120px 40px", md: "140px 60px" },
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Background pattern */}
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
									marginBottom: 2,
									background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
									letterSpacing: "-1px",
								}}
							>
								About Me
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
							{/* Left Section: About Me */}
							<Grid item xs={12} md={6}>
								<Grow in={visible} timeout={1500}>
									<Card
										elevation={0}
										sx={{
											height: "100%",
											padding: { xs: 4, sm: 5, md: 6 },
											background: "rgba(255, 255, 255, 0.03)",
											backdropFilter: "blur(20px)",
											borderRadius: "24px",
											border: "1px solid rgba(102, 126, 234, 0.2)",
											boxShadow: "0 8px 32px rgba(102, 126, 234, 0.1)",
											transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
											display: "flex",
											flexDirection: "column",
											"&:hover": {
												transform: "translateY(-8px)",
												boxShadow: "0 16px 48px rgba(102, 126, 234, 0.2)",
												borderColor: "rgba(102, 126, 234, 0.4)",
											},
										}}
									>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												marginBottom: 4,
												gap: 2,
											}}
										>
											<Box
												sx={{
													width: "64px",
													height: "64px",
													borderRadius: "16px",
													background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													color: "#ffffff",
													boxShadow: "0 8px 24px rgba(102, 126, 234, 0.3)",
												}}
											>
												<PersonIcon sx={{ fontSize: "32px" }} />
											</Box>
											<Typography
												variant="h4"
												sx={{
													fontFamily: "'Outfit', sans-serif",
													fontWeight: 700,
													color: "#ffffff",
													fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
												}}
											>
												Who I Am
											</Typography>
										</Box>

										<Typography
											variant="body1"
											sx={{
												fontFamily: "'Space Grotesk', sans-serif",
												fontSize: { xs: "1rem", sm: "1.125rem" },
												lineHeight: 1.8,
												color: "rgba(255, 255, 255, 0.8)",
												marginBottom: 3,
												textAlign: "justify",
											}}
										>
											I am a creative and driven software engineer dedicated to building
											digital solutions that transform everyday challenges into intuitive
											experiences. I bring clarity and innovation to every project.
										</Typography>
										<Typography
											variant="body1"
											sx={{
												fontFamily: "'Space Grotesk', sans-serif",
												fontSize: { xs: "1rem", sm: "1.125rem" },
												lineHeight: 1.8,
												color: "rgba(255, 255, 255, 0.8)",
												marginBottom: 3,
												textAlign: "justify",
											}}
										>
											My focus is on developing applications that are not only visually
											appealing but also highly functional. I value clean, efficient code
											and scalable design in all my work.
										</Typography>
										<Typography
											variant="body1"
											sx={{
												fontFamily: "'Space Grotesk', sans-serif",
												fontSize: { xs: "1rem", sm: "1.125rem" },
												lineHeight: 1.8,
												color: "rgba(255, 255, 255, 0.8)",
												textAlign: "justify",
											}}
										>
											I believe in continuous learning and collaboration, striving to grow
											professionally while delivering meaningful impact. I am committed to
											advancing technology with purpose and precision.
										</Typography>
									</Card>
								</Grow>
							</Grid>

							{/* Right Section: Education */}
							<Grid item xs={12} md={6}>
								<Grow in={visible} timeout={2000}>
									<Card
										elevation={0}
										sx={{
											height: "100%",
											padding: { xs: 4, sm: 5, md: 6 },
											background: "rgba(255, 255, 255, 0.03)",
											backdropFilter: "blur(20px)",
											borderRadius: "24px",
											border: "1px solid rgba(102, 126, 234, 0.2)",
											boxShadow: "0 8px 32px rgba(102, 126, 234, 0.1)",
											transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
											display: "flex",
											flexDirection: "column",
											"&:hover": {
												transform: "translateY(-8px)",
												boxShadow: "0 16px 48px rgba(102, 126, 234, 0.2)",
												borderColor: "rgba(102, 126, 234, 0.4)",
											},
										}}
									>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												marginBottom: 4,
												gap: 2,
											}}
										>
											<Box
												sx={{
													width: "64px",
													height: "64px",
													borderRadius: "16px",
													background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													color: "#ffffff",
													boxShadow: "0 8px 24px rgba(240, 147, 251, 0.3)",
												}}
											>
												<SchoolIcon sx={{ fontSize: "32px" }} />
											</Box>
											<Typography
												variant="h4"
												sx={{
													fontFamily: "'Outfit', sans-serif",
													fontWeight: 700,
													color: "#ffffff",
													fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
												}}
											>
												Education
											</Typography>
										</Box>

										{educationDetails.map((education, index) => (
											<Card
												key={index}
												elevation={0}
												sx={{
													padding: { xs: 3, sm: 4 },
													background: "rgba(102, 126, 234, 0.05)",
													borderRadius: "20px",
													border: "1px solid rgba(102, 126, 234, 0.2)",
													transition: "all 0.3s ease",
													"&:hover": {
														transform: "translateX(8px)",
														borderColor: "rgba(102, 126, 234, 0.4)",
														boxShadow: "0 8px 24px rgba(102, 126, 234, 0.15)",
													},
												}}
											>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
														gap: 2,
														marginBottom: 2,
													}}
												>
													<Box
														sx={{
															width: "52px",
															height: "52px",
															borderRadius: "12px",
															background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
														}}
													>
														<FontAwesomeIcon
															icon={education.icon}
															size="lg"
															style={{ color: "#ffffff" }}
														/>
													</Box>
													<Box>
														<Typography
															variant="h6"
															sx={{
																fontFamily: "'Outfit', sans-serif",
																fontWeight: 600,
																color: "#ffffff",
																fontSize: { xs: "1.1rem", sm: "1.25rem" },
															}}
														>
															{education.degree}
														</Typography>
													</Box>
												</Box>
												<Typography
													variant="body1"
													sx={{
														fontFamily: "'Space Grotesk', sans-serif",
														fontSize: { xs: "0.95rem", sm: "1.05rem" },
														color: "#667eea",
														fontWeight: 600,
														marginBottom: 1,
													}}
												>
													{education.institution}
												</Typography>
												<Typography
													variant="body2"
													sx={{
														fontFamily: "'Space Grotesk', sans-serif",
														fontSize: "0.9rem",
														color: "rgba(255, 255, 255, 0.6)",
														marginBottom: 0.5,
													}}
												>
													{education.location}
												</Typography>
												<Typography
													variant="body2"
													sx={{
														fontFamily: "'Space Grotesk', sans-serif",
														fontSize: "0.9rem",
														color: "#667eea",
														fontWeight: 600,
													}}
												>
													{education.date}
												</Typography>
											</Card>
										))}
									</Card>
								</Grow>
							</Grid>
						</Grid>
					</Box>
				</Fade>
			</Container>
		</Box>
	);
};

export default AboutMeComponent;
