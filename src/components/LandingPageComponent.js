import React from "react";
import {
	Box,
	Typography,
	Button,
	useMediaQuery,
	useTheme,
	Stack,
} from "@mui/material";
import { Link } from "react-scroll";
import resume from "../assets/Venu_Makaraju.pdf";
import profilePic from "../assets/profile_pic.png";

const LandingPageComponent = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const firstName = "Venu Gopala Raju";
	const lastName = "Makaraju";

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = resume;
		link.download = "Venu_GopalaRaju_Makaraju_Resume.pdf";
		link.click();
	};

	const gradient =
		theme.palette.mode === "dark"
			? `radial-gradient(circle, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 70%)`
			: `radial-gradient(circle, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 70%)`;
	const accentGradient =
		theme.palette.mode === "dark"
			? `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`
			: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`;

	return (
		<Box
			sx={{
				minHeight: "calc(100vh - 64px)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: gradient,
				color: theme.palette.text.primary,
				position: "relative",
				px: isSmallScreen ? 2 : 8,
				py: isSmallScreen ? 6 : 10,
				boxSizing: "border-box",
			}}
		>
			<Box
				sx={{
					width: "100%",
					maxWidth: 1200,
					display: "grid",
					gridTemplateColumns: isSmallScreen ? "1fr" : "1.2fr 0.8fr",
					gap: isSmallScreen ? 4 : 6,
					alignItems: "center",
				}}
			>
				<Stack
					spacing={isSmallScreen ? 3 : 4}
					alignItems={isSmallScreen ? "center" : "flex-start"}
					textAlign={isSmallScreen ? "center" : "left"}
				>
					<Box>
						<Typography
							variant={isSmallScreen ? "h4" : "h3"}
							sx={{
								fontWeight: 700,
								letterSpacing: "0.3rem",
								textTransform: "uppercase",
								color: theme.palette.secondary.main,
							}}
						>
							Hello, I'm
						</Typography>
						<Typography
							variant={isSmallScreen ? "h2" : "h1"}
							sx={{
								fontWeight: 800,
								lineHeight: 1.1,
								fontSize: isSmallScreen ? "2.8rem" : "4rem",
								marginTop: 1,
								background: accentGradient,
								WebkitBackgroundClip: "text",
								color: "transparent",
							}}
						>
							{firstName} {lastName}
						</Typography>
					</Box>

					<Typography
						variant="h6"
						sx={{
							fontSize: isSmallScreen ? "1.1rem" : "1.35rem",
							color: theme.palette.text.secondary,
							maxWidth: 560,
						}}
					>
						Full-stack developer crafting elegant, performant experiences across web and mobile, with a love for resilient cloud-native solutions.
					</Typography>

					<Box
						sx={{
							display: "flex",
							flexDirection: isSmallScreen ? "column" : "row",
							gap: isSmallScreen ? 2 : 3,
						}}
					>
						<Button
							component={Link}
							to="contact"
							smooth={true}
							duration={500}
							offset={-70}
							variant="contained"
							size="large"
							sx={{
								backgroundColor: theme.palette.primary.main,
								color: theme.palette.primary.contrastText,
								padding: "12px 28px",
								fontSize: "1rem",
								fontWeight: 600,
								boxShadow:
									theme.palette.mode === "dark"
										? "0 18px 45px rgba(91, 209, 215, 0.25)"
										: "0 18px 45px rgba(18, 78, 102, 0.25)",
								"&:hover": {
									backgroundColor:
										theme.palette.mode === "dark"
											? theme.palette.primary.light
											: theme.palette.primary.dark,
								},
							}}
						>
							Get in Touch
						</Button>
						<Button
							variant="outlined"
							size="large"
							onClick={handleDownload}
							sx={{
								borderColor: theme.palette.secondary.main,
								color: theme.palette.secondary.main,
								padding: "12px 28px",
								fontSize: "1rem",
								fontWeight: 600,
								"&:hover": {
									borderColor: theme.palette.primary.main,
									color: theme.palette.primary.contrastText,
									backgroundColor:
										theme.palette.mode === "dark"
											? "rgba(95, 209, 215, 0.1)"
											: "rgba(18, 78, 102, 0.08)",
								},
							}}
						>
							Download Resume
						</Button>
					</Box>
				</Stack>

				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Box
						sx={{
							position: "relative",
							width: isSmallScreen ? 220 : 280,
							height: isSmallScreen ? 280 : 360,
							borderRadius: "32px",
							background: theme.palette.mode === "dark"
								? "linear-gradient(180deg, rgba(95,209,215,0.28) 0%, rgba(21,31,38,0.95) 65%)"
								: "linear-gradient(180deg, rgba(18,78,102,0.15) 0%, rgba(255,255,255,0.95) 65%)",
							boxShadow:
								theme.palette.mode === "dark"
									? "0 40px 70px rgba(0, 0, 0, 0.45)"
									: "0 40px 70px rgba(18, 78, 102, 0.2)",
							overflow: "hidden",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							border: `1px solid ${theme.palette.primary.main}`,
						}}
					>
						<Box
							component="img"
							src={profilePic}
							alt="Venu Gopala Raju Makaraju"
							sx={{
								width: "85%",
								height: "85%",
								objectFit: "cover",
								borderRadius: "28px",
							}}
						/>
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					position: "absolute",
					bottom: 20,
					textAlign: "center",
				}}
			>
				<Box
					sx={{
						width: "20px",
						height: "32px",
						border: `2px solid ${theme.palette.secondary.main}`,
						borderRadius: "15px",
						position: "relative",
						margin: "0 auto",
						"&::before": {
							content: '""',
							width: "6px",
							height: "6px",
							backgroundColor: theme.palette.secondary.main,
							borderRadius: "50%",
							position: "absolute",
							top: "8px",
							left: "50%",
							transform: "translateX(-50%)",
							animation: "scroll 2s infinite",
						},
					}}
				/>
			</Box>
		</Box>
	);
};

export default LandingPageComponent;