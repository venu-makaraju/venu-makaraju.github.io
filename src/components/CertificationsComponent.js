import React, { useState, useEffect } from "react";
import { Card, Typography, Grid, Box, Container, Fade } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faJsSquare,
	faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import VerifiedIcon from "@mui/icons-material/Verified";

const certifications = [
	{
		title: "Infosys Springboard - UI/UX",
		date: "June 2025",
		icon: faPalette,
		gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
	},
	{
		title: "Infosys Springboard - HTML",
		date: "July 2025",
		icon: faHtml5,
		gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
	},
	{
		title: "Infosys Springboard - JavaScript",
		date: "August 2025",
		icon: faJsSquare,
		gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
	},
	{
		title: "Infosys Springboard - Bootstrap",
		date: "September 2025",
		icon: faBootstrap,
		gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
	},
];

const CertificationsComponent = () => {
	const [visible, setVisible] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById("certifications");
		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	return (
		<Box
			id="certifications"
			sx={{
				background: "linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%)",
				padding: { xs: "100px 20px", sm: "120px 40px", md: "140px 60px" },
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Background decoration */}
			<Box
				sx={{
					position: "absolute",
					top: "10%",
					right: "-5%",
					width: "500px",
					height: "500px",
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(79, 172, 254, 0.15) 0%, transparent 70%)",
					filter: "blur(100px)",
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
								My Certifications
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

						<Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
							{certifications.map((cert, index) => (
								<Grid item xs={12} sm={6} md={6} key={index}>
									<Fade in={visible} timeout={800 + index * 200}>
										<Card
											elevation={0}
											onMouseEnter={() => setHoveredIndex(index)}
											onMouseLeave={() => setHoveredIndex(null)}
											sx={{
												height: "100%",
												minHeight: { xs: "300px", sm: "340px", md: "360px" },
												padding: { xs: 4, sm: 5 },
												background: "rgba(255, 255, 255, 0.03)",
												backdropFilter: "blur(20px)",
												borderRadius: "24px",
												border: "2px solid",
												borderColor: hoveredIndex === index
													? "rgba(102, 126, 234, 0.4)"
													: "rgba(102, 126, 234, 0.2)",
												boxShadow: hoveredIndex === index
													? "0 16px 48px rgba(102, 126, 234, 0.3)"
													: "0 8px 32px rgba(102, 126, 234, 0.1)",
												transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
												transform: hoveredIndex === index
													? "translateY(-12px) scale(1.02)"
													: "translateY(0) scale(1)",
												cursor: "pointer",
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												textAlign: "center",
											}}
										>
											<Box
												sx={{
													width: { xs: "90px", sm: "100px" },
													height: { xs: "90px", sm: "100px" },
													borderRadius: "50%",
													background: cert.gradient,
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													marginBottom: 3,
													boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
													transform: hoveredIndex === index ? "scale(1.15) rotate(5deg)" : "scale(1)",
													transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
													position: "relative",
												}}
											>
												<FontAwesomeIcon
													icon={cert.icon}
													size="3x"
													style={{ color: "#ffffff" }}
												/>
												<VerifiedIcon
													sx={{
														position: "absolute",
														bottom: -5,
														right: -5,
														background: cert.gradient,
														borderRadius: "50%",
														padding: "4px",
														fontSize: "24px",
														color: "#ffffff",
														boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
													}}
												/>
											</Box>
											<Typography
												variant="h5"
												sx={{
													fontFamily: "'Outfit', sans-serif",
													fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
													fontWeight: 700,
													color: "#ffffff",
													marginBottom: 2,
												}}
											>
												{cert.title}
											</Typography>
											<Box
												sx={{
													padding: { xs: "8px 20px", sm: "10px 24px" },
													borderRadius: "50px",
													background: cert.gradient,
													color: "#ffffff",
													fontWeight: 600,
													fontSize: { xs: "0.875rem", sm: "0.95rem" },
													fontFamily: "'Space Grotesk', sans-serif",
													boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
												}}
											>
												{cert.date}
											</Box>
										</Card>
									</Fade>
								</Grid>
							))}
						</Grid>
					</Box>
				</Fade>
			</Container>
		</Box>
	);
};

export default CertificationsComponent;
