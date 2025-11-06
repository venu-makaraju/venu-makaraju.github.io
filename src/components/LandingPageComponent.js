import React, { useEffect, useRef, useState } from "react";
import {
	Box,
	Typography,
	Button,
	Container,
	Fade,
	Zoom,
} from "@mui/material";
import { Link } from "react-scroll";
import resume from "../assets/Venu_Makaraju_Resume.pdf";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LandingPageComponent = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const nameRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({
				x: (e.clientX / window.innerWidth) * 100,
				y: (e.clientY / window.innerHeight) * 100,
			});
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = resume;
		link.download = "Venu_Makaraju_Resume.pdf";
		link.click();
	};

	return (
		<Box
			id="landing"
			sx={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
				overflow: "hidden",
				background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
				padding: { xs: "100px 20px 80px", sm: "120px 40px 100px", md: "140px 60px 120px" },
			}}
		>
			{/* Animated gradient background */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(102, 126, 234, 0.15) 0%, transparent 50%)`,
					transition: "background 0.3s ease-out",
					pointerEvents: "none",
				}}
			/>

			{/* Floating orbs with different colors */}
			<Box
				sx={{
					position: "absolute",
					width: "400px",
					height: "400px",
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)",
					top: "10%",
					left: "10%",
					filter: "blur(80px)",
					animation: "float 8s ease-in-out infinite",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					width: "500px",
					height: "500px",
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(240, 147, 251, 0.25) 0%, transparent 70%)",
					bottom: "10%",
					right: "10%",
					filter: "blur(100px)",
					animation: "float 10s ease-in-out infinite reverse",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					width: "350px",
					height: "350px",
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(79, 172, 254, 0.2) 0%, transparent 70%)",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					filter: "blur(90px)",
					animation: "float 12s ease-in-out infinite",
				}}
			/>

			<Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, py: { xs: 4, sm: 6, md: 8 } }}>
				<Fade in timeout={1000}>
					<Box sx={{ textAlign: "center", maxWidth: "900px", mx: "auto" }}>
						{/* Glassmorphism badge */}
						<Box
							sx={{
								display: "inline-block",
								padding: { xs: "10px 28px", sm: "12px 32px" },
								marginBottom: { xs: 3, sm: 4 },
								background: "rgba(255, 255, 255, 0.05)",
								backdropFilter: "blur(20px)",
								borderRadius: "50px",
								border: "1px solid rgba(102, 126, 234, 0.3)",
								boxShadow: "0 8px 32px rgba(102, 126, 234, 0.1)",
							}}
						>
							<Typography
								variant="overline"
								sx={{
									fontFamily: "'Space Grotesk', sans-serif",
									fontSize: { xs: "0.75rem", sm: "0.875rem" },
									letterSpacing: "3px",
									color: "#ffffff",
									fontWeight: 600,
									textTransform: "uppercase",
								}}
							>
								✨ Software Engineer & Developer
							</Typography>
						</Box>

						<Box ref={nameRef} sx={{ marginBottom: { xs: 4, sm: 5, md: 6 } }}>
							<Typography
								variant="h1"
								sx={{
									fontFamily: "'Outfit', sans-serif",
									fontWeight: 800,
									fontSize: { xs: "3rem", sm: "5rem", md: "7rem", lg: "8.5rem" },
									letterSpacing: { xs: "-1px", sm: "-2px", md: "-3px" },
									lineHeight: { xs: 1.1, sm: 1.05 },
									marginBottom: { xs: 1, sm: 2 },
									background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
								}}
							>
								Venu Gopala Raju
							</Typography>
							<Typography
								variant="h1"
								sx={{
									fontFamily: "'Outfit', sans-serif",
									fontWeight: 800,
									fontSize: { xs: "3rem", sm: "5rem", md: "7rem", lg: "8.5rem" },
									letterSpacing: { xs: "-1px", sm: "-2px", md: "-3px" },
									lineHeight: { xs: 1.1, sm: 1.05 },
									background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
									backgroundSize: "200% 200%",
									animation: "gradientShift 5s ease infinite",
								}}
							>
								Makaraju
							</Typography>
						</Box>

						<Zoom in timeout={1500}>
							<Typography
								variant="h5"
								sx={{
									fontFamily: "'Space Grotesk', sans-serif",
									fontSize: { xs: "1.125rem", sm: "1.5rem", md: "1.75rem" },
									fontWeight: 400,
									color: "rgba(255, 255, 255, 0.8)",
									maxWidth: "750px",
									margin: "0 auto",
									marginBottom: { xs: 5, sm: 6, md: 8 },
									lineHeight: { xs: 1.7, sm: 1.8 },
									letterSpacing: "0.3px",
								}}
							>
								Crafting exceptional digital experiences with cutting-edge web technologies
							</Typography>
						</Zoom>

						<Box
							sx={{
								display: "flex",
								flexDirection: { xs: "column", sm: "row" },
								gap: { xs: 2.5, sm: 3 },
								alignItems: "center",
								justifyContent: "center",
								marginBottom: { xs: 6, sm: 8 },
							}}
						>
							<Button
								component={Link}
								to="contact"
								smooth={true}
								duration={500}
								offset={-80}
								variant="contained"
								size="large"
								sx={{
									fontFamily: "'Space Grotesk', sans-serif",
									background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
									color: "#ffffff",
									padding: { xs: "16px 40px", sm: "18px 48px" },
									fontSize: { xs: "1rem", sm: "1.125rem" },
									fontWeight: 600,
									letterSpacing: "0.5px",
									textTransform: "none",
									borderRadius: "50px",
									boxShadow: "0 8px 32px rgba(102, 126, 234, 0.4)",
									transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									border: "none",
									"&:hover": {
										background: "linear-gradient(135deg, #764ba2 0%, #f093fb 100%)",
										transform: "translateY(-4px) scale(1.05)",
										boxShadow: "0 12px 48px rgba(102, 126, 234, 0.5)",
									},
								}}
							>
								Get in Touch
							</Button>

							<Button
								variant="outlined"
								size="large"
								sx={{
									fontFamily: "'Space Grotesk', sans-serif",
									border: "2px solid rgba(102, 126, 234, 0.5)",
									color: "#ffffff",
									padding: { xs: "16px 40px", sm: "18px 48px" },
									fontSize: { xs: "1rem", sm: "1.125rem" },
									fontWeight: 600,
									letterSpacing: "0.5px",
									textTransform: "none",
									borderRadius: "50px",
									background: "rgba(102, 126, 234, 0.05)",
									backdropFilter: "blur(10px)",
									boxShadow: "0 8px 32px rgba(102, 126, 234, 0.2)",
									transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									"&:hover": {
										background: "rgba(102, 126, 234, 0.15)",
										borderColor: "rgba(102, 126, 234, 0.8)",
										transform: "translateY(-4px) scale(1.05)",
										boxShadow: "0 12px 48px rgba(102, 126, 234, 0.4)",
									},
								}}
								onClick={handleDownload}
							>
								Download Resume
							</Button>
						</Box>
					</Box>
				</Fade>
			</Container>

			{/* Scroll indicator */}
			<Box
				component={Link}
				to="about"
				smooth={true}
				duration={500}
				offset={-80}
				sx={{
					position: "absolute",
					bottom: { xs: 30, sm: 40 },
					left: "50%",
					transform: "translateX(-50%)",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textDecoration: "none",
					color: "rgba(255, 255, 255, 0.6)",
					animation: "bounce 2s infinite",
					zIndex: 2,
					"&:hover": {
						color: "#ffffff",
					},
				}}
			>
				<Typography
					variant="caption"
					sx={{
						fontFamily: "'Space Grotesk', sans-serif",
						fontSize: "0.75rem",
						letterSpacing: "2px",
						marginBottom: 1,
						textTransform: "uppercase",
						fontWeight: 500,
					}}
				>
					Scroll Down
				</Typography>
				<KeyboardArrowDownIcon sx={{ fontSize: "2rem" }} />
			</Box>

			<style>
				{`
					@keyframes float {
						0%, 100% {
							transform: translateY(0px) translateX(0px) scale(1);
						}
						50% {
							transform: translateY(-30px) translateX(15px) scale(1.1);
						}
					}
					@keyframes bounce {
						0%, 20%, 50%, 80%, 100% {
							transform: translateX(-50%) translateY(0);
						}
						40% {
							transform: translateX(-50%) translateY(-10px);
						}
						60% {
							transform: translateX(-50%) translateY(-5px);
						}
					}
					@keyframes gradientShift {
						0%, 100% {
							background-position: 0% 50%;
						}
						50% {
							background-position: 100% 50%;
						}
					}
				`}
			</style>
		</Box>
	);
};

export default LandingPageComponent;
