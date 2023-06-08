import React from "react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { ResearchReport } from "../components/ResearchReport";
import { Advisory } from "../components/Advisory";
import { PartnerNetwork } from "../components/PartnerNetwork";
import { PortfolioCompanies } from "../components/Protfolio";
import { MeetRootz } from "../components/MeetRootz";
import { Subscription } from "../components/Subscription";
import { RevolvingDoor } from "../components/RevolvingDoor";

export function Home() {
  return (
    <div className="Home" style={{ overflow: "clip", background: "#000" }}>
      <div id="home">
        <Header />
      </div>
      <Banner />
      <div id="research">
        <ResearchReport />
      </div>
      <div>
        <RevolvingDoor />
      </div>
      <div id="advisory">
        <Advisory />
      </div>
      <PartnerNetwork />
      <PortfolioCompanies />
      <div id="meetus">
        <MeetRootz />
      </div>
      <Subscription />
    </div>
  );
}
