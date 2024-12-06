import React from "react";

import { Box } from "grommet";
// import { NavBar } from "@centrifuge/axis-nav-bar";
// import {
//   Menu as MenuIcon,
//   User as UserIcon,
//   Close as CloseIcon,
// } from "grommet-icons";
import Search from "../Search";
// import styled from "styled-components";
// import { navigate } from "gatsby";
// const logoCentrifuge = require("../../images/logo-xft-full.svg");

// const Logo = styled(Image)`
//   vertical-align: middle;
//   height: 32px;
//   margin: 16px 0;
// `;

const Nav = () => {
  // const [selectedRoute, setSelectedRoute] = useState("/");
  // const [searchOpen, setSearchOpen] = useState(false);

  // const menuItems = [
  //   {
  //     label: "Centrifuge P2P Node",
  //     route: "/cent-node/",
  //   },
  //   {
  //     label: "Tinlake",
  //     route: "/tinlake/",
  //   },
  //   {
  //     label: "NFTs",
  //     route: "/nfts/overview/introduction/",
  //   },
  //   {
  //     label: "Centrifuge Chain",
  //     route: "/chain/",
  //   },
  //   {
  //     label: "Github",
  //     route: "https://github.com/centrifuge",
  //   },
  //   {
  //     label: "Slack",
  //     route: "https://centrifuge.io/slack/",
  //   },
  // ];
  // const onRouteClick = (route) => {
  //   setSelectedRoute(route);
  //   if (route.startsWith("/")) {
  //     navigate(route);
  //   } else {
  //     window.open(route);
  //   }
  // };
  // const theme = {
  //   navBar: {
  //     icons: {
  //       menu: MenuIcon,
  //       close: CloseIcon,
  //       user: UserIcon,
  //     },
  //   },
  // };

  return (
    <Box direction="row" fill="horizontal" justify="end">
      <Box>
        <Search open={true} setOpen={() => {}} />
      </Box>
    </Box>
  );

  // return (
  //   <ResponsiveContext.Consumer>
  //     {(size) =>
  //       size === "large" ? (
  //         <Box
  //           direction="row"
  //           fill="horizontal"
  //           align="stretch"
  //           width="xxlarge"
  //         >
  //           <NavBar
  //             logo={
  //               <Logo
  //                 src={logoCentrifuge}
  //                 onClick={() => {
  //                   onRouteClick("/");
  //                 }}
  //               />
  //             }
  //             mainMenuAlignment="right"
  //             border={false}
  //             menuItems={menuItems}
  //             theme={theme}
  //             itemGap="small"
  //             selectedRoute={selectedRoute}
  //             onRouteClick={(item) => {
  //               onRouteClick(item.route);
  //             }}
  //             overlayWidth="100vw"
  //           >
  //             <Search
  //               open={searchOpen}
  //               setOpen={(value) => setSearchOpen(value)}
  //             />
  //           </NavBar>
  //         </Box>
  //       ) : (
  //         <Box direction="row" fill="horizontal" align="stretch">
  //           <Box margin={{ left: "medium" }} fill={true}>
  //             <Logo
  //               src={logoCentrifuge}
  //               onClick={() => {
  //                 onRouteClick("/");
  //               }}
  //             />
  //           </Box>
  //           <Box
  //             style={{ minHeight: "48px", padding: "12px" }}
  //             flex={"grow"}
  //             alignContent="end"
  //           >
  //             <Search
  //               open={searchOpen}
  //               setOpen={(value) => setSearchOpen(value)}
  //             />
  //           </Box>
  //           <NavBar
  //             mainMenuAlignment="right"
  //             border={false}
  //             menuItems={menuItems}
  //             theme={theme}
  //             selectedRoute={selectedRoute}
  //             onRouteClick={(item) => {
  //               onRouteClick(item.route);
  //             }}
  //             overlayWidth="100vw"
  //           />
  //         </Box>
  //       )
  //     }
  //   </ResponsiveContext.Consumer>
  // );
};

export default Nav;

