import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Image, Layer, Nav, Text } from "grommet";
import { Menu } from "grommet-icons";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import styled from "styled-components";

import "./styles.css";
import "@fontsource/inter";

import centrifugeLogo from "../../images/logo-xft-full.svg";
import githubLogo from "../../images/github-logo.svg";

import SideNav from "../SideNav";
import SocialFooter from "../SocialFooter";

const TopNavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) =>
    props.isActive ? props.theme.global.colors.brand : "#424242"};
  text-decoration: none;
`;

const Layout = ({ children, hideFooter, size }) => {
  let sectionProps = {
    fill: "horizontal",
    margin: size !== "small" ? { bottom: "medium" } : {},
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  return (
    <>
      {size === "large" && (
        <Nav
          direction="row"
          style={{
            position: "fixed",
            background: "#f5f5f5",
            zIndex: 1000,
            height: "55px",
            width: "100%",
            paddingLeft: "20px",
            paddingTop: "8px",
            paddingRight: "90px",
            borderBottom: "1px solid #EEE",
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box direction="row" gap="32px">
            <Box
              pad={{ left: "medium", bottom: "-2px" }}
              style={{ minWidth: "139px" }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box direction="row" align="center" gap="xxsmall">
                  <Image src={centrifugeLogo} height="26px" />
                  <Text
                    color="black"
                    size="16px"
                    weight={600}
                    style={{ position: "relative", top: "2px" }}
                  >
                    Docs
                  </Text>
                </Box>
              </Link>
            </Box>
            <Box
              direction="row"
              style={{
                alignItems: "top",
                height: "100%",
                maxHeight: "42px",
                paddingTop: "6px",
              }}
              gap="medium"
            >
              <TopNavLink
                to="/getting-started"
                label="Getting Started"
                isActive={currentPath === "getting-started"}
              >
                Getting Started
              </TopNavLink>
              <TopNavLink
                isActive={currentPath === "user"}
                to="/user"
                label="User Documentation"
              >
                User Documentation
              </TopNavLink>
              <TopNavLink
                isActive={currentPath === "developer"}
                to="/developer"
                label="Developer Documentation"
              >
                Developer Documentation
              </TopNavLink>
            </Box>
          </Box>
        </Nav>
      )}
      <Box direction="row" style={{ minHeight: "100vh", position: "relative" }}>
        {size === "large" && (
          <Box direction="row" height="100vh">
            <Box
              width="306px"
              overflow="auto"
              style={{
                position: "fixed",
                top: "64px",
                height: "calc(100% - 64px)",
              }}
            >
              {/* side nav */}
              <SideNav size={size} />
              <Box
                style={{ position: "absolute", bottom: "32px", left: "36px" }}
              >
                <a
                  href="https://github.com/X-Financial-Technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={githubLogo} height="24px" />
                </a>
              </Box>
            </Box>
          </Box>
        )}
        {size === "large" && (
          <Box
            margin={{ left: "300px" }}
            width="8px"
            style={{
              borderRight: "1px solid #EEE",
            }}
          />
        )}
        <Box width="100%">
          {/* header */}
          {size !== "large" && (
            <>
              <Box
                direction="row"
                fill="horizontal"
                justify="between"
                align="center"
                pad={{ horizontal: "medium", vertical: "medium" }}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Box direction="row" align="center" gap="xxsmall">
                    <Image src={centrifugeLogo} height="26px" />
                    <Text
                      color="black"
                      size="16px"
                      weight={600}
                      style={{ position: "relative", top: "2px" }}
                    >
                      Docs
                    </Text>
                  </Box>
                </Link>
                <Box direction="row" gap="12px">
                  <Box alignSelf="start" justify="center">
                    <a
                      href="https://github.com/X-Financial-Technologies"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={githubLogo} height="24px" />
                    </a>
                  </Box>
                  <Button
                    icon={<Menu />}
                    style={{
                      padding: "0",
                    }}
                    onClick={() => {
                      setIsNavbarOpen(true);
                    }}
                  />
                </Box>
              </Box>
              {isNavbarOpen && (
                <Layer full>
                  <Box height="100vh" overflow="auto">
                    <Box flex="grow">
                      <SideNav
                        onClose={() => {
                          setIsNavbarOpen(false);
                        }}
                        size={size}
                      />
                    </Box>
                  </Box>
                </Layer>
              )}
            </>
          )}
          {/* content */}
          <Box
            align="center"
            {...sectionProps}
            flex="grow"
            style={{
              marginTop: size === "small" ? "16px" : "64px",
            }}
          >
            {children}
          </Box>
          {/* footer */}
          {!hideFooter && <SocialFooter />}
        </Box>
      </Box>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  hideFooter: false,
  fullWidth: false,
};

export default Layout;

