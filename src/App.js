import React, { useRef } from 'react'
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
  const [spacing, setSpacing] = React.useState(2)
  const classes = useStyles()
  const serviceRef = useRef()
  const homeRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()

  const handleChange = (event) => {
    setSpacing(Number(event.target.value))
  }
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
          <Grid item xs={2}>
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
                  window.scrollTo({ behavior:'smooth', top:pos })
                }}
              >
                Bem-Vindo
              </Button>
            </Container>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={2} style={{}}>
            <Button
              style={{ fontFamily: 'Montserrat', fontWeight: '600' }}
              color="primary"
              onClick={() => {
                let pos = serviceRef.current.offsetTop
                window.scrollTo({ behavior:'smooth', top:pos })
              }}
            >
              Serviços
            </Button>
          </Grid>
          <Grid item xs={2} style={{}}>
            <Button
              style={{ fontFamily: 'Montserrat', fontWeight: '600' }}
              color="primary"
              onClick={() => {
                let pos = aboutRef.current.offsetTop
                window.scrollTo({ behavior:'smooth', top:pos })
              }}
            >
              Sobre Nós
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              style={{ fontFamily: 'Montserrat', fontWeight: '600' }}
              color="primary"
              onClick={() => {
                let pos = contactRef.current.offsetTop
                window.scrollTo({ behavior:'smooth', top:pos })
              }}
            >
              Contato
            </Button>
          </Grid>
        </Grid>
        <Container maxWidth="lg" style={{ width: '100%' }} innerRef={homeRef}>
          <Grid container>
            <Grid item xs={1} />
            <Grid
              item
              xs={4}
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
            <Grid item xs={5}>
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
            <Grid item xs={5}>
              <img src={servicos} width="80%" />
            </Grid>
            <Grid
              item
              xs={6}
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
                  alignItems: 'center',
                }}
              >
                <p style={{ color: '#fff', marginRight: '10px' }}>
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
                  }}
                >
                  <TabletMac fontSize="default" htmlColor="#282c34" />
                </div>
              </Container>
              <Container
                maxWidth="lg"
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <p style={{ color: '#fff', marginRight: '10px' }}>
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
                <p style={{ color: '#fff', marginRight: '10px' }}>
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
        </Grid>

        <Container
          innerRef={aboutRef}
          maxWidth="lg"
          style={{ background: '#fff', paddingBottom: '30px' }}
        >
          <p
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
              xs={6}
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
                soluções disruptivas com foco na solução rápida e prática dos
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
            <Grid item xs={5}>
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
            paddingBottom:'50px'
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
                <p style={{ color: '#ddd' }}>alexandre.diniz.dias@gmail.com</p>
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
                  padding: '0px',
                }}
              >
                <p style={{ color: '#ddd' }}>(98) 98426-6968</p>
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
