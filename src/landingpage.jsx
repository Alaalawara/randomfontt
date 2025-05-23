import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";

const DesktopLandingPage = () => {
  const [currentFont, setCurrentFont] = useState("Open Sans");

  // dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectFont = (font) => {
    setCurrentFont(font);
    handleClose();
  };


  // all font list 
  const FONT_LIST = [
    "Inter",
    "Roboto",
    "Open Sans",
    "Lato",
    "Montserrat",
    "Raleway",
    "Ubuntu",
    "Merriweather",
    "Noto Sans",
    "PT Sans",
    "Fira Sans",
    "Inconsolata",
    "Martian Mono",
    "Space Mono",
    "JetBrains Mono",
    "Abril Fatface",
    "Anonymous Pro",
    "VT323",
    "Unbounded",
    "Bodoni Moda",
    "Coral Pixels",
    "Exile",
    "Honk",
    "Codystar",
    "Gloock",
    "Bungee Tint",
    "Moirai One",
    "Montserrat Underline",
    "Libre Barcode 39 Text",
    "Special Gothic Expanded One",
  ];

  //shuffle font

  const shuffleFont = () => {
    const fontsExcludingOpenSans = FONT_LIST.filter(font => font !== "Open Sans");
    const randomFont = fontsExcludingOpenSans[Math.floor(Math.random() * fontsExcludingOpenSans.length)];
    setCurrentFont(randomFont);
  };
  useEffect(() => {
    const body = document.getElementById("font-root");
    if (body) {
      body.style.fontFamily = `"${currentFont}", sans-serif`;
    }
  }, [currentFont]);


  // Data for feature cards
  const featureCards = [
    {
      title: "Easy Font Generation",
      description:
        "Generate unique fonts instantly with just one click. No complicated steps",
    },
    {
      title: "Vast Font Library",
      description:
        "Access a vast collection of fonts from classic to modern styles, all randomized for fresh inspiration.",
    },
    {
      title: "Preview",
      description:
        "See your text in different fonts and styles before downloading or using it in your projects.",
    },
    {
      title: "Open source fonts",
      description: "Making the web more beautiful, fast, and open through great typography.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "var(--background)",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          fontFamily: `"${currentFont}", sans-serif`,
          overflow: "hidden",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            bgcolor: "var(--background)",
            overflow: "hidden",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 5,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ color: "var(--primary)", fontFamily: "inherit", fontWeight: "bold" }}>
              Randomfontt
            </Typography>
            <Button
              variant="h1"
              startIcon={<SearchIcon />}
              onClick={handleClick}
              sx={{
                bgcolor: "rgba(0,0,0,0.1)",
                color: "var(--primary)",
                fontWeight: "bold",
                borderRadius: "20px",
                textTransform: "none",
                fontFamily: "inherit",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.2)",
                },
              }}
            >
              fontt
            </Button>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              {FONT_LIST.map((font) => (
                <MenuItem
                  key={font}
                  onClick={() => handleSelectFont(font)}
                  sx={{ fontFamily: `"${font}", sans-serif`, backgroundColor: "#f24623" }}
                >
                  {font}
                </MenuItem>
              ))}
            </Menu>

          </Box>

          {/* Hero Section */}
          <Box sx={{ mt: 13, mb: 8, px: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "var(--primary)",
                mb: 2,
                fontFamily: "inherit"
              }}
            >
              Randomfontt
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: "var(--secondary)",
                maxWidth: "800px",
                fontFamily: "inherit",
                mb: 4
              }}
            >
              Not sure what you're looking for? Let our random generator surprise
              you with fresh ideas and styles that you might never have considered
            </Typography>
            <Button
              variant="h1"
              onClick={shuffleFont}
              sx={{
                bgcolor: "rgba(0,0,0,0.1)",
                color: "var(--primary)",
                borderRadius: "20px",
                fontWeight: "bold",
                fontFamily: "inherit",
                px: 3,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.2)",
                },
              }}
            >
              Shuffle
            </Button>
            {/* <Button className="btn-101" variant="h1" disableRipple sx={{ textTransform: "none", fontFamily: "inherit" }}>
              <svg>
                <rect />
              </svg>
              Shuffle
            </Button> */}

          </Box>

          {/* Typography Section */}
          <Box
            sx={{
              borderTop: "1px solid var(--primary)",
              borderBottom: "1px solid var(--primary)",
              py: 4,
              px: 4,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "var(--primary)", fontFamily: "inherit" }}>
              Typography
            </Typography>
            <Box sx={{ mb: 1 }}>
              <Typography variant="caption" sx={{ color: "var(--secondary)", fontFamily: "inherit" }}>
                Font Family
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "var(--primary)", fontFamily: "inherit" }}>
                {currentFont}
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography variant="caption" sx={{ color: "var(--secondary)", fontFamily: "inherit" }}>
                Sample text
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "var(--primary)", fontFamily: "inherit" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
            </Box>
          </Box>

          {/* Samples Section */}
          <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              align="center"
              sx={{
                fontWeight: "medium",
                color: "var(--primary)",
                mb: 4,
                fontFamily: "inherit"
              }}
            >
              samples
            </Typography>

            <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center" }}>
              {featureCards.map((card, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    sx={{
                      bgcolor: "var(--boxes)",
                      borderRadius: "8px",
                      height: "208px",
                    }}
                  >
                    <CardContent>
                      <Box sx={{ mt: 5, ml: 1.5 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            color: "var(--primary)",
                            fontSize: "21.6px",
                            lineHeight: "34px",
                            fontFamily: "inherit",
                            mb: 2,
                          }}
                        >
                          {card.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "bold",
                            color: "rgba(0,0,0,0.6)",
                            fontSize: "14px",
                            lineHeight: "24px",
                            maxWidth: "371px",
                            fontFamily: "inherit"
                          }}
                        >
                          {card.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopLandingPage;