import React, { useMemo, useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import AboutMeComponent from "./components/AboutmeComponent";
import CertificationsComponent from "./components/CertificationsComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import SkillsComponent from "./components/SkillsComponent";
import ContactPageComponent from "./components/ContactPageComponent";
import LandingPageComponent from "./components/LandingPageComponent";
import NavBarComponent from "./components/NavBarComponent";

function App() {
	const [mode, setMode] = useState("dark");

	const getDesignTokens = (mode) => ({
		palette: {
			mode,
			primary: {
				main: mode === "dark" ? "#5BD1D7" : "#124E66",
				contrastText: mode === "dark" ? "#0B141A" : "#F5F5F5",
			},
			secondary: {
				main: mode === "dark" ? "#8FB9BF" : "#748D92",
			},
			background: {
				default: mode === "dark" ? "#0B141A" : "#F5F5F5",
				paper: mode === "dark" ? "#162029" : "#FFFFFF",
			},
			text: {
				primary: mode === "dark" ? "#E8F1F2" : "#1C232A",
				secondary: mode === "dark" ? "#AFC2CD" : "#4F5D75",
			},
			divider: mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
		},
		typography: {
			fontFamily:
				"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 10,
						textTransform: "none",
						fontWeight: 600,
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						borderRadius: 18,
						backgroundImage: "none",
					},
				},
			},
			MuiPaper: {
				defaultProps: {
					elevation: 0,
				},
			},
		},
	});

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	const handleToggleTheme = () => {
		setMode((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				className="App"
				sx={{
					minHeight: "100vh",
					backgroundColor: "background.default",
					color: "text.primary",
					transition: "background-color 0.3s ease, color 0.3s ease",
				}}
			>
				<NavBarComponent mode={mode} onToggleTheme={handleToggleTheme} />
				<div id="landing">
					<LandingPageComponent />
				</div>
				<div id="about">
					<AboutMeComponent />
				</div>
				<div id="experience">
					<ExperienceComponent />
				</div>
				<div id="skills">
					<SkillsComponent />
				</div>
				<div id="certifications">
					<CertificationsComponent />
				</div>
				<div id="contact">
					<ContactPageComponent />
				</div>
			</Box>
		</ThemeProvider>
	);
}

export default App;