import React, { useRef, useEffect, useLayoutEffect, useState } from 'react'
import { Container, Grid, Paper, Button, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  TabletMac,
  LaptopMac,
  DesktopMac,
  WhatsApp,
  MailOutline,
  EmailOutlined,
} from '@material-ui/icons'

import logo from './logo.svg'
import work from './assets/images/work.jpg'
import servicos from './assets/images/servicos.png'
import champion from './assets/images/champions.jpg'
import './App.css'

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100px',
  },
  serviceIcon: {},
}))

function App() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth)
  const classes = useStyles()
  const serviceRef = useRef()
  const homeRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()

  const veriftyWidth = () => {
    const width = window.innerWidth
    if (width <= 360) {
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', () => setWidthScreen(window.innerWidth))
  })

  useEffect(() => {})

  return (
    <div className="App">
      <div style={{}}>
        <Grid
          container
          spacing={0}
          style={{
            position: 'fixed',
            background: '#fff',
            borderBottomColor: '#ddd',
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
          }}
        >
          <Grid item xs={widthScreen <= 360 ? (widthScreen <= 500 ? 12 : 3) : 2}>
            <Container
              maxWidth="sm"
              style={{
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                style={{ fontFamily: 'Montserrat', fontWeight: '600' }}
                color="primary"
                onClick={() => {
                  let pos = homeRef.current.offsetTop
                  window.scrollTo({ behavior: 'smooth', top: pos })
                }}
              >
                {widthScreen <= 800 ? 'DEV' : 'Bem-Vindo'}
              </Button>
            </Container>
          </Grid>
          {widthScreen <= 360 ? null : (
            <>
              {widthScreen <= 500 ? null : <Grid item xs={3}></Grid>}
              <Grid item xs={widthScreen <= 500 ? 3 : 2} style={{}}>
                <Button
                  style={{ fontFamily: 'Montserrat', fontWeight: '600' }}
                  color="primary"
                  onClick={() => {
                    let pos = serviceRef.current.offsetTop
                    window.scrollTo({ behavior: 'smooth', top: pos })
                  }}
                >
                  Serviços
                </Button>
              </Grid>
              <Grid item xs={widthScreen <= 500 ? 4 : 2} style={{}}>
                <Button
                  style={{ fontFamily: 'Montserrat', fontWeight: '600' }}
                  color="primary"
                  onClick={() => {
                    let pos = aboutRef.current.offsetTop
                    window.scrollTo({ behavior: 'smooth', top: pos-50 })
                  }}
                >
                  Sobre Nós
                </Button>
              </Grid>
              <Grid item xs={widthScreen <= 500 ? 3 : 2}>
                <Button
                  style={{ fontFamily: 'Montserrat', fontWeight: '600' }}
                  color="primary"
                  onClick={() => {
                    let pos = contactRef.current.offsetTop
                    window.scrollTo({ behavior: 'smooth', top: pos })
                  }}
                >
                  Contato
                </Button>
              </Grid>
            </>
          )}
        </Grid>
        <Container
          maxWidth="lg"
          style={{
            width: '100%',
            paddingTop: widthScreen < 500 ? '30px' : '0px',
          }}
          innerRef={homeRef}
        >
          <Grid container>
            <Grid item xs={1} />
            <Grid
              item
              xs={widthScreen <= 500 ? 12 : 4}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '25px',
                  color: '#404040',
                }}
              >
                Ajudamos você a alcançar os seus objetivos oferecendo soluções
                personalizadas.
              </p>
            </Grid>
            <Grid item xs={widthScreen <= 500 ? 12 : 5}>
              <img src={work} alt="logo" width="100%" />
            </Grid>
          </Grid>
        </Container>
        <Grid
          id="services"
          className="services"
          innerRef={serviceRef}
          container
          maxWidth="lg"
          style={{
            background: '#282c34',
            paddingBottom: '30px',
            paddingLeft: '0px',
            paddingRight: '0px',
            marginLeft: '0px',
            marginRight: '0px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Container maxWidth="lg">
            <p
              style={{
                color: '#fff',
                fontSize: '20px',
                fontWeight: '600',
                paddingTop: '30px',
              }}
            >
              SERVIÇOS
            </p>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={widthScreen <= 500 ? 12 : 5}>
                <img src={servicos} width="100%" />
              </Grid>
              <Grid
                item
                xs={widthScreen <= 500 ? 12 : 5}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                }}
              >
                <Container
                  maxWidth="lg"
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <p style={{ color: '#fff', marginRight: '10px', width:'80%', textAlign:widthScreen<500?'center':'end' }}>
                    Desenvolvimento de Aplicativos Móveis
                  </p>
                  <div
                    style={{
                      borderRadius: '50px',
                      background: '#fff',
                      height: '50px',
                      width: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow:'hidden'
                    }}
                  >
                    <TabletMac fontSize="default" htmlColor="#282c34" />
                  </div>
                </Container>
                <Container
                  maxWidth="lg"
                  style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <p style={{ color: '#fff', marginRight: '10px', width:'80%', textAlign:widthScreen<500?'center':'end' }}>
                    Desenvolvimento de Landing Pages
                  </p>
                  <div
                    className="service-icon"
                    style={{
                      borderRadius: '50px',
                      backgroundColor: '#fff',
                      height: '50px',
                      width: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <LaptopMac fontSize="default" htmlColor="#282c34" />
                  </div>
                </Container>
                <Container
                  maxWidth="lg"
                  style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <p style={{ color: '#fff', marginRight: '10px', width:'80%', textAlign:widthScreen<500?'center':'end' }}>
                    Desenvolvimento de WebApps
                  </p>
                  <div
                    style={{
                      borderRadius: '50px',
                      background: '#fff',
                      height: '50px',
                      width: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <DesktopMac fontSize="default" htmlColor="#282c34" />
                  </div>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Container
          
          maxWidth="lg"
          style={{ background: '#fff', paddingBottom: '30px' }}
        >
          <p
          ref={aboutRef}
            style={{
              color: '#282c34',
              fontSize: '20px',
              fontWeight: '600',
              paddingTop: '10px',
            }}
          >
            SOBRE NÓS
          </p>
          <Grid container>
            <Grid item xs={1} />
            <Grid
              item
              xs={widthScreen<=700?12:6}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >
              <p
                style={{
                  color: '#282c34',
                  fontWeight: '500',
                  fontSize: '14pt',
                }}
              >
                Somos uma empresa jovem, em fase de expansão. Oferecemos
                soluções inovadoras com foco na solução rápida e prática dos
                seus problemas.
                <br />
                <br />
                Nós acreditamos que a confiança é a base de qualquer negócio.
                Por isso, sempre manteremos você informado sobre o andamento do
                projeto.
                <br />
                <br />O nosso suporte também está a sua disposição.
              </p>
            </Grid>
            <Grid item xs={widthScreen<=700?12:5}>
              <img src={champion} width="100%" />
            </Grid>
          </Grid>
        </Container>
        <Grid
          innerRef={contactRef}
          container
          style={{
            background: '#282c34',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '50px',
          }}
        >
          <p
            style={{
              color: '#fff',
              fontSize: '20px',
              fontWeight: '600',
              paddingTop: '10px',
            }}
          >
            CONTATO
          </p>
          <Grid container>
            <Grid item xs={3} />
            <Grid item xs={6} style={{}}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0px',
                  padding: '0px',
                }}
              >
                <a target="_blank" href="mailto:alexandre.diniz.dias@gmail.com?subject=Solicitar Orçamento" style={{ color: '#ddd', textDecoration:'none' }}>alexandre.diniz.dias@gmail.com</a>
                <EmailOutlined
                  fontSize="small"
                  htmlColor="#fff"
                  style={{ marginLeft: '10px' }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0px',
                  paddingTop: '20px',
                }}
              >
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5598984266968" style={{ color: '#ddd', textDecoration:'none' }}>(98) 98426-6968</a>
                <WhatsApp
                  fontSize="small"
                  htmlColor="#fff"
                  style={{ marginLeft: '10px' }}
                />
              </div>
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default App
