import React from "react";
import {
	Box,
	Typography,
	Button,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { Link } from "react-scroll";
import resume from "../assets/Venu_Makaraju_Resume.pdf";

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

	return (
		<Box
			sx={{
				height: "calc(100vh - 60px)",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
				background: `radial-gradient(circle, rgba(33,42,49,1) 0%, rgba(46,57,68,1) 70%)`,
				color: "#D3D9D4",
				position: "relative",
				padding: isSmallScreen ? 2 : 4,
				boxSizing: "border-box",
			}}
		>
			<Typography
				variant="h3"
				sx={{
					fontWeight: "bold",
					textTransform: "uppercase",
					fontSize: isSmallScreen ? "2rem" : "3.5rem",
					marginBottom: 2,
				}}
			>
				Hi I'm
			</Typography>

			<Box>
				{isSmallScreen ? (
					<>
						<Typography
							variant="h1"
							sx={{
								fontWeight: "bold",
								textTransform: "uppercase",
								fontSize: "3rem",
								display: "inline-block",
								background: "linear-gradient(90deg, #748D92 50%, #124E66 100%)",
								WebkitBackgroundClip: "text",
								color: "transparent",
								animation: "gradientAnimation 3s infinite alternate",
							}}
						>
							<span className="typewriter">
								{firstName.split("").map((letter, index) => (
									<span
										key={index}
										className="letter"
										style={{
											animationDelay: `${index * 0.1}s`,
										}}
									>
										{letter}
									</span>
								))}
							</span>
						</Typography>
						<Typography
							variant="h1"
							sx={{
								fontWeight: "bold",
								textTransform: "uppercase",
								fontSize: "3rem",
								display: "inline-block",
								background: "linear-gradient(90deg, #748D92, #124E66)",
								WebkitBackgroundClip: "text",
								color: "transparent",
								animation: "gradientAnimation 3s infinite alternate",
							}}
						>
							<span className="typewriter">
								{lastName.split("").map((letter, index) => (
									<span
										key={index}
										className="letter"
										style={{
											animationDelay: `${index * 0.1}s`,
										}}
									>
										{letter}
									</span>
								))}
							</span>
						</Typography>
					</>
				) : (
					<Typography
						variant="h1"
						sx={{
							fontWeight: "bold",
							textTransform: "uppercase",
							fontSize: "6rem",
							display: "inline-block",
							wordWrap: "break-word",
							background: "linear-gradient(90deg, #748D92, #124E66)",
							WebkitBackgroundClip: "text",
							color: "#3C7280",
							letterSpacing: "8px",
							animation: "gradientAnimation 3s infinite alternate",
						}}
					>
						<span className="typewriter">
							{`${firstName}${" "}${lastName}`.split("").map((letter, index) => (
								<span
									key={index}
									className="letter"
									style={{
										animationDelay: `${index * 0.1}s`,
									}}
								>
									{letter}
								</span>
							))}
						</span>
					</Typography>
				)}
			</Box>

			<Typography
				variant="h6"
				sx={{
					fontSize: isSmallScreen ? "1.5rem" : "3rem",
					marginBottom: 4,
				}}
			>
				Crafting elegant solutions with modern web technologies.
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexDirection: isSmallScreen ? "column" : "row",
					gap: isSmallScreen ? 2 : 4,
					alignItems: "center",
					justifyContent: "center",
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
						backgroundColor: "#124E66",
						color: "#D3D9D4",
						padding: isSmallScreen ? "8px 16px" : "12px 24px",
						fontSize: isSmallScreen ? "1rem" : "1.5rem",
						"&:hover": {
							backgroundColor: "#2E3944",
						},
					}}
				>
					Get in Touch
				</Button>

				<Button
					variant="outlined"
					size="large"
					sx={{
						borderColor: "#D3D9D4",
						color: "#D3D9D4",
						padding: isSmallScreen ? "8px 16px" : "12px 24px",
						fontSize: isSmallScreen ? "1rem" : "1.5rem",
						"&:hover": {
							backgroundColor: "#124E66",
							color: "#D3D9D4",
							borderColor: "#124E75",
						},
					}}
					onClick={handleDownload}
				>
					Download Resume
				</Button>
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
						border: "2px solid #D3D9D4",
						borderRadius: "15px",
						position: "relative",
						margin: "0 auto",
						"&::before": {
							content: '""',
							width: "6px",
							height: "6px",
							backgroundColor: "#D3D9D4",
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