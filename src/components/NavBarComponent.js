import React, { useState, useEffect } from "react";
import {
	AppBar,
	Toolbar,
	Button,
	Box,
	useMediaQuery,
	useTheme,
	IconButton,
	Drawer,
	List,
	ListItem,
	Typography,
	Container,
} from "@mui/material";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBarComponent = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	const navItems = [
		{ label: "About", to: "about" },
		{ label: "Experience", to: "experience" },
		{ label: "Skills", to: "skills" },
		{ label: "Certifications", to: "certifications" },
		{ label: "Contact", to: "contact" },
	];

	return (
		<AppBar
			position="fixed"
			sx={{
				backgroundColor: scrolled ? "rgba(10, 10, 10, 0.85)" : "rgba(10, 10, 10, 0.95)",
				backdropFilter: "blur(20px)",
				boxShadow: scrolled ? "0 4px 30px rgba(102, 126, 234, 0.2)" : "none",
				transition: "all 0.3s ease",
				borderBottom: scrolled ? "1px solid rgba(102, 126, 234, 0.2)" : "1px solid transparent",
				zIndex: 1000,
			}}
		>
			<Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						minHeight: { xs: "64px", sm: "72px" },
						padding: "0 !important",
					}}
				>
					<Typography
						component={Link}
						to="landing"
						smooth={true}
						duration={500}
						spy={true}
						offset={-80}
						sx={{
							fontFamily: "'Outfit', sans-serif",
							fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
							fontWeight: 700,
							cursor: "pointer",
							textDecoration: "none",
							letterSpacing: "-0.5px",
							background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
							transition: "all 0.3s ease",
							"&:hover": {
								transform: "scale(1.05)",
							},
						}}
					>
						Venu Makaraju
					</Typography>

					{!isSmallScreen ? (
						<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
							{navItems.map((item) => (
								<Button
									key={item.to}
									component={Link}
									to={item.to}
									smooth={true}
									duration={500}
									spy={true}
									offset={-80}
									activeClass="active"
									sx={{
										fontFamily: "'Space Grotesk', sans-serif",
										color: "#ffffff",
										fontSize: "0.95rem",
										fontWeight: 500,
										textTransform: "none",
										letterSpacing: "0.5px",
										padding: "10px 20px",
										borderRadius: "12px",
										position: "relative",
										transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
										"&::before": {
											content: '""',
											position: "absolute",
											inset: 0,
											borderRadius: "12px",
											padding: "1px",
											background: "linear-gradient(135deg, #667eea, #764ba2, #f093fb)",
											WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
											WebkitMaskComposite: "xor",
											maskComposite: "exclude",
											opacity: 0,
											transition: "opacity 0.3s ease",
										},
										"&:hover": {
											background: "rgba(102, 126, 234, 0.1)",
											transform: "translateY(-2px)",
											"&::before": {
												opacity: 1,
											},
										},
										"&.active": {
											background: "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
											fontWeight: 600,
											"&::before": {
												opacity: 1,
											},
										},
									}}
								>
									{item.label}
								</Button>
							))}
						</Box>
					) : (
						<IconButton
							color="inherit"
							edge="start"
							onClick={toggleDrawer}
							sx={{
								color: "#ffffff",
								padding: "8px",
							}}
						>
							<MenuIcon />
						</IconButton>
					)}
				</Toolbar>
			</Container>

			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={toggleDrawer}
				sx={{
					"& .MuiDrawer-paper": {
						width: "300px",
						backgroundColor: "#0a0a0a",
						backdropFilter: "blur(20px)",
						borderLeft: "1px solid rgba(102, 126, 234, 0.2)",
						paddingTop: "80px",
					},
				}}
			>
				<IconButton
					onClick={toggleDrawer}
					sx={{
						position: "absolute",
						top: "20px",
						right: "20px",
						color: "#ffffff",
					}}
				>
					<CloseIcon />
				</IconButton>
				<List sx={{ padding: "20px 0" }}>
					{navItems.map((item) => (
						<ListItem key={item.to} disablePadding sx={{ px: 2, mb: 1 }}>
							<Button
								component={Link}
								to={item.to}
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
								onClick={toggleDrawer}
								fullWidth
								sx={{
									fontFamily: "'Space Grotesk', sans-serif",
									color: "#ffffff",
									padding: "16px 24px",
									textTransform: "none",
									fontSize: "1rem",
									justifyContent: "flex-start",
									fontWeight: 500,
									letterSpacing: "0.5px",
									borderRadius: "12px",
									transition: "all 0.3s ease",
									"&:hover": {
										background: "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
										transform: "translateX(8px)",
									},
								}}
							>
								{item.label}
							</Button>
						</ListItem>
					))}
				</List>
			</Drawer>
		</AppBar>
	);
};

export default NavBarComponent;