import React from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Landing from "./components/Landing/Landing";
import Shirts from "./components/Shirts/Shirts";
import Pants from "./components/Pants/Pants";
import BowTies from "./components/BowTies/BowTies";
import NeckTies from "./components/NeckTies/NeckTies";
import SkinnyTies from "./components/SkinnyTies/SkinnyTies";
import Socks from "./components/Socks/Socks";
import TieBars from "./components/TieBars/TieBars";
import Accessories from "./components/Accessories/Accessories";
import Wedding from "./components/Wedding/Wedding";
import Gifts from "./components/Gifts/Gifts";
import PocketSquares from "./components/PocketSquares/PocketSquares";

export default (
  <Switch>
    <Route component={Landing} exact path="/" />
    <Route component={Nav} path="/nav" />
    <Route component={Shirts} path="/shirts" />
    <Route component={Pants} path="/pants" />
    <Route component={BowTies} path="/bowties" />
    <Route component={NeckTies} path="/neckties" />
    <Route component={SkinnyTies} path="/skinnyties" />
    <Route component={Socks} path="/socks" />
    <Route component={TieBars} path="/tiebars" />
    <Route component={Accessories} path="/accessories" />
    <Route component={Wedding} path="/wedding" />
    <Route component={Gifts} path="/gifts" />
    <Route component={PocketSquares} path="/pocketsquares" />
  </Switch>
);
