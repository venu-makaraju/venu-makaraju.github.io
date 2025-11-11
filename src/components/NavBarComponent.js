import React, { useState } from "react";
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
	ListItemText,
	Typography,
} from "@mui/material";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const NavBarComponent = ({ mode, onToggleTheme }) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	// List of navigation items
	const navItems = [
		"About",
		"Experience",
		"Skills",
		"Certifications",
		"Contact",
	];

	return (
		<AppBar
			position="sticky"
			elevation={4}
			sx={{
				backgroundColor: theme.palette.background.paper,
				color: theme.palette.text.primary,
				transition: "background-color 0.3s ease",
			}}
		>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "0 20px",
				}}
			>
				{/* Logo */}
				<Typography
					component={Link}
					to="landing"
					smooth={true}
					duration={500}
					spy={true}
					offset={-70}
					sx={{
						color: theme.palette.text.primary,
						fontSize: "1.5rem",
						fontWeight: "bold",
						cursor: "pointer",
						textDecoration: "none",
					}}
				>
					Venu Gopala Raju Makaraju
				</Typography>

				{/* Desktop Navigation Links */}
				{!isSmallScreen ? (
					<Box
						sx={{
							display: "flex",
							gap: "20px",
							alignItems: "center",
						}}
					>
						{navItems.map((section) => (
							<Button
								key={section}
								component={Link}
								to={section.toLowerCase()}
								smooth={true}
								duration={500}
								spy={true}
								offset={-70} // Adjust for sticky AppBar height
								activeClass="active"
								sx={{
									color: theme.palette.text.primary,
									fontSize: "1.5rem",
									textTransform: "capitalize",
								}}
							>
								{section}
							</Button>
						))}
						<IconButton
							color="inherit"
							onClick={onToggleTheme}
							aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
							sx={{ ml: 1 }}
						>
							{mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
						</IconButton>
					</Box>
				) : (
					// Mobile Hamburger Menu
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 1,
						}}
					>
						<IconButton
							color="inherit"
							onClick={onToggleTheme}
							aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
						>
							{mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
						</IconButton>
						<IconButton
							color="inherit"
							edge="start"
							onClick={toggleDrawer}
							sx={{ display: { sm: "none" } }}
							aria-label="Open navigation menu"
						>
							<MenuIcon />
						</IconButton>
					</Box>
				)}
			</Toolbar>

			{/* Drawer for Mobile Navigation */}
			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={toggleDrawer}
				sx={{
					"& .MuiDrawer-paper": {
						width: "100%",
						backgroundColor: theme.palette.background.paper,
						color: theme.palette.text.primary,
						height: "100vh",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					},
				}}
			>
				{/* Close Icon */}
				<IconButton
					onClick={toggleDrawer}
					sx={{
						position: "absolute",
						top: "20px",
						right: "20px",
						color: theme.palette.text.primary,
					}}
				>
					<CloseIcon />
				</IconButton>
				<List>
					{navItems.map((section) => (
						<ListItem button key={section}>
							<ListItemText>
								<Button
									component={Link}
									to={section.toLowerCase()}
									smooth={true}
									duration={500}
									spy={true}
									offset={-70} // Adjust for sticky AppBar height
									activeClass="active"
									onClick={toggleDrawer}
									sx={{
										color: theme.palette.text.primary,
										width: "100%",
										fontSize: "2rem",
										textTransform: "capitalize",
									}}
								>
									{section}
								</Button>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Drawer>
		</AppBar>
	);
};

export default NavBarComponent;