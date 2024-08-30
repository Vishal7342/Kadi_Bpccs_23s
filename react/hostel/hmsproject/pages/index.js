import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import 'C:/Users/mauli/Desktop/kadi_ghandhinagar/react/hostel/hmsproject/node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import MainContain from "./components/MainContain";

export default function Home() {
  return (
        <div className="row">
          <Navbar/> 
          <MainContain />
            <div className="container-fluid bannerContainer" style={{'marginTop':'55px'}}>
              <div className="informationSection">
                <h3>Bannar Title Hear</h3>
                <p className="mini_description">
                  bhbac dvv v zv kdlvjds zljvn zdgvdsdcldj v if ehf udhvzbkdsudvdhz vhdh
                </p>
                <a className="btn btn-primary">See more</a>
              </div>
            </div>
            <div className="container">
              <div>
              <h1></h1>
              </div>
            </div>
          </div>
        
  );
}
