import React from "react"
import { graphql ,useStaticQuery } from "gatsby"
import Img from "gatsby"
import Slideshow from "../components/slideshow"
const AboutSection = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    
      <div Tag="section" className="container mt-4">
           <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1 mx-auto">
                    <div className="page-title text-center">
                        <div className="space-10"></div>
                        <h5 className="title">O eAgrar sustavu</h5>
                        <div className="space-30"></div>
                        <h3 className="blue-color">Sustav za praćenje stanja na Vašim poljoprivrednim usjevima i za pomoć u predviđanju pojave bolesti</h3>
                        <div className="space-20"></div>
                        <p>eAgrar je sustav za <strong>praćenje stanja</strong> biljaka i vremenskih uvjeta na poljoprivrednim poljima.
                        <br /> Temelji se na mreži senzorskih uređaja što omogućuje praćenje <strong>mikroklimatskih uvjeta</strong>. 
                        <br /><br/>Senzorski uređaji su spremni za postavljanje bez potrebne bilo kakve dodatne infrastrukture. Uređaji su napajani baterijski i imaju autonomiju <strong>do 10 godina bez punjenja</strong>. Senzorski uređaji šalju podatke bežično prema baznoj stanici koja može biti udaljena do 5km. Senzorski uređaj ima mogućnost mjerenja temperature, vlažnosti i tlaka zraka, vlažnosti i temperature tla, te vlažnosti lista. 
                        <br/><br/>Svi podaci prikazuju se na nadzornoj ploči naše aplikacije putem <strong>ikona, grafikona i tablica</strong>.
                        <br/><br/> <strong>Sustav prati i obrađuje</strong> podatke, te <strong>obavještava korisnike o mogućoj pojavi bolesti</strong> (plamenjača, pepelnica, peronospora) kako bi mogli preventivno djelovati s ciljem zaustavljanja pojave istih.
                        <br/> Obavještava korisnika i kada se stvore <strong>uvjeti za pojavu mraza</strong> ili kada se stvori potreba za <strong>navodnjavanjem</strong>. 
                        <br/><br/>Korištenjem eAgrar sustava možete ostvariti <strong>uštede</strong> u korištenju kemijskih sredstava, goriva i vode. Korištenje sustava će Vam omogućiti i smanjenje štete na usjevima i povećanje prinosa.</p>
                    </div>
                    <Slideshow></Slideshow>
                </div>
            </div>
      </div>
    
  )
}


export default AboutSection


