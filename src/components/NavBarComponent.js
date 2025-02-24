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

const NavBarComponent = () => {
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
		<AppBar position="sticky" sx={{ backgroundColor: "#212A31" }}>
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
						color: "white",
						fontSize: "1.5rem",
						fontWeight: "bold",
						cursor: "pointer",
						textDecoration: "none",
					}}
				>
					User Name
				</Typography>

				{/* Desktop Navigation Links */}
				{!isSmallScreen ? (
					<Box
						sx={{
							display: "flex",
							gap: "20px",
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
									color: "white",
									fontSize: "1.5rem",
									textTransform: "capitalize",
								}}
							>
								{section}
							</Button>
						))}
					</Box>
				) : (
					// Mobile Hamburger Menu
					<IconButton
						color="inherit"
						edge="start"
						onClick={toggleDrawer}
						sx={{ display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
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
						backgroundColor: "#212A31",
						color: "white",
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
						color: "white",
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
										color: "white",
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