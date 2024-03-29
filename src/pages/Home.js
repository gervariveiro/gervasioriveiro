import {useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import NavigateBar from '../components/Navbar.js';
import PDF from '../assets/Resume_Gervasio_Riveiro.pdf';
import Form from 'react-bootstrap/Form';
import GervaPhoto from '../assets/gervaphoto1.png';
import HtmlIcon from '../assets/htmlicon.png';
import CssIcon from '../assets/cssicon.png';
import DbIcon from '../assets/dbicon.png';
import NodeIcon from '../assets/nodeicon.png';
import ReactIcon from '../assets/reacticon.png';
import JsIcon from '../assets/jsicon.png';
import mtgphoto from '../assets/mtgphoto.JPG';
import UXexample from '../assets/UX example.JPG';
import FarmImg from '../assets/farmphoto.jpg';
import GitHubIcon from '../assets/githubicon.png';
import mailIcon from '../assets/mailIcon.png';
import LinkedIcon from '../assets/linkedicon.png';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
import Arqua from '../assets/Arqua.JPG';




function Home () {

const mostrarAlert = () => { 
        swal({
            title: "Your message was sent",
            icon: "success",
            button: "Cerrar"
        })
    }

const form = useRef();


    const sendEmail = (e) => {
      e.preventDefault();

      
  
      emailjs.sendForm('service_u8ectry', 'template_wej4hkl', form.current, 'Eae2Ggd3yvqItXhkG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

          mostrarAlert();
          
          setTimeout(() => {
            window.location.replace('/')
          }, 2000);
        ;
    };
    

//<FontAwesomeIcon icon={faFileArrowDown} className='downloadIcon' />

    return (
    <><NavigateBar />

            <Container className='filosofia d-flex flex-row bg-primary text-white p-5 ' id='Home'>
                <Row className=''>
                    <Col className='d-flex flex-column col-12 col-md-6'>
                        <Image src={GervaPhoto} alt="foto" width="260" height="auto"
                        className="rounded-circle align-self-center"/>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center col-12 col-md-6 text-start ">
                        <h3 className="mb-4 ">Hi! Im Gervasio Riveiro</h3>
                        <p className="h5 tracking-in-expand-fwd">I am front-end developer. I offer my services for dynamics web sites for your business proyect or work in data processing for market research.</p>
                        <a className="btn btn-light align-self-start d-inline mt-5" variant="light" size="lg" href={PDF} download>
                        RESUME
                        </a>
                    </Col>
                    
                </Row>
            </Container>
           
        

        <section id="Mywork" className='mt-5'>
            <Container className="my-5">
                <Row classname="text-md-center">
                    <h2 className="mb-1 mt-5 d-flex justify-content-center">WORK</h2>
                    <Col className="col-12 col-md-6 mt-3 mt-md-0 mb-3 my-lg-5 d-flex justify-content-between">    
                        <Card className='mx-3'>
                            <Card.Img variant="top" src={Arqua} alt="f1imagen" height="400"/>
                            <div className="card-body">
                                <Card.Title>Arqua</Card.Title>
                                <Card.Text>A web sit developed for ARQUA "Arquéologos del Uruguay Asociados".</Card.Text>
                                <a href="https://www.arqua.com.uy" className="btn btn-primary">SEE MORE</a>
                            </div>
                        </Card>
                    </Col>
                    
                    <Col className="col-12 col-md-6 mt-3 mt-md-0 mb-3 my-lg-5 d-flex justify-content-between">   
                        <Card className='mx-3'>
                            <Card.Img variant="top" src={mtgphoto} alt="f1imagen"/>
                            <div className="card-body">
                                <Card.Title>Searcher for magic the gathering</Card.Title>
                                <Card.Text>A portfolio project. Using React and axios to query an external api.</Card.Text>
                                <a href="https://gervariveiro.github.io/searchCards/" className="btn btn-primary" target='blank'>SEE MORE</a>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row classname="text-md-center">
                    <Col className="col-12 col-md-6 mt-3 mt-md-0 mb-3 my-lg-5 d-flex justify-content-between">  
                        <Card className='mx-3'>
                            <Card.Img variant="top" src={FarmImg} alt="f1imagen" height="400"/>
                            <div className="card-body">
                                <Card.Title>Website for turistic farm</Card.Title>
                                <Card.Text>Proyect with HTML, CSS and JS about a turistic proyect.</Card.Text>
                                <a href="https://gervariveiro.github.io/chacra/index.html" className="btn btn-primary">SEE MORE</a>
                            </div>
                        </Card>
                    </Col>
                    <Col className="col-12 col-md-6 mt-3 mt-md-0 mb-3 my-lg-5 d-flex justify-content-between">  
                        <Card className='mx-3'>
                            <Card.Img variant="top" src={UXexample} alt="uximage" height="400"/>
                            <div className="card-body">
                                <Card.Title>UX UI Example</Card.Title>
                                <Card.Text>A UX UI proyect for a comic searcher in Figma</Card.Text>
                                <a href="https://www.figma.com/file/XTDkS25LfGEdodggc84qQu/Home-Page-for-Comic-Search-Concept?t=6ic0zbYHd0dLVt7Z-0" className="btn btn-primary" target='blank'>SEE MORE</a>
                            </div>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </section>

        
        <section id="Myskills" className='mt-5'>
            <h3 className="m-5 d-flex justify-content-center">SKILLS</h3>
            <Container>
                <Row className="d-flex flex-row ml-5 justify-content-center p-5">
                    <Col className='col-12 col-md-1 d-flex justify-content-center'>
                            <div className='mb-4 mt-2 d-flex flex-column'>
                                <img src={HtmlIcon} width="50" height="50" alt=''></img>
                                <label className='text-center'>HTML</label>
                            </div>
                    </Col>
                    <Col className='col-12 col-md-1 d-flex justify-content-center'>        
                            <div className='mb-4 d-flex flex-column justify-content-center'>
                                <img src={CssIcon} width="50" height="50" alt=''></img>
                                <label className='text-center'>CSS</label>
                            </div>
                    </Col>
                    <Col className='col-12 col-md-1 d-flex justify-content-center'>
                            <div className='mb-4 d-flex flex-column justify-content-center'>
                                <img src={DbIcon} width="50" height="50" className='align-self-center' alt=''></img>
                                <label className='text-center'>MONGDB-MYSQL</label>
                            </div>
                    </Col>
                    <Col className='col-12 col-md-1  d-flex justify-content-center'>
                            <div className='mb-4 d-flex flex-column justify-content-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#042C4B" className="bi bi-bootstrap-fill align-self-center" viewBox="0 0 16 16">
                                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
                                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
                                </svg>
                                <label className='text-center'>Bootstrap</label>
                            </div>
                    </Col>
                    <Col className='col-12 col-md-1  d-flex justify-content-center'>
                            <div className='mb-4 d-flex flex-column justify-content-center'>
                                <img src={NodeIcon} width="50" height="50" alt=''></img>
                                <label className='text-center'>NODEJS</label>
                            </div>
                    </Col>        
                    <Col className='col-12 col-md-1  d-flex justify-content-center'>
                            <div className='mb-4 d-flex flex-column justify-content-center'>
                                <img src={JsIcon} width="50" height="50" className='align-self-center' alt=''></img>
                                <label className='text-center'>JAVASCRIPT</label>
                            </div>
                    </Col>        
                    <Col className='col-12 col-md-1 d-flex justify-content-center'>
                            <div className='mb-4 d-flex flex-column justify-content-center'>
                                <img src={ReactIcon} width="50" height="50" alt=''></img>
                                <label className='text-center'>React</label>
                            </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
        <section id="ContactMe" className='mt-5'>
            <h2 className="m-5 d-flex justify-content-center">CONTACT</h2>
            <Container>
                <Row className="d-flex flex-row ml-5 justify-content-center p-4">
                   <Col className='col-12 col-md-1 d-flex justify-content-center'>
                            <div className='mb-4'>
                            <a href='https://www.linkedin.com/in/gervasio-riveiro-martínez-36a8b0234/' target="_blank">
                                <img src={LinkedIcon} className='imgicon' width="50" height="50" alt=''></img>
                            </a>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-1 d-flex justify-content-center'>
                            <div className='mb-4'>
                                <a href='https://github.com/gervariveiro' target="_blank">
                                    <img src={GitHubIcon} className='imgicon' width="50" height="50" alt=''></img>
                                </a>
                            </div>
                    </Col>
                    <Col className='col-12 col-md-1 d-flex justify-content-center'>
                            <div className='mb-4'>
                                <a href='mailto:gervasioriveiro@gmail.com?Subject=Contacto' target="_blank">
                                    <img src={mailIcon} className='imgicon' width="45" height="40" alt=''></img>
                                </a>
                            </div>
                    </Col>
                    <Col className='col-12 col-md-1 d-flex justify-content-center'>
                            <div className='mb-4'>
                                <a href='https://soundcloud.com/gerva14' target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#042C4B"  class="bi bi-music-note-list" viewBox="0 0 16 16">
                                        <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                                        <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/>
                                        <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
                                        <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </a>
                            </div>
                    </Col>
                </Row>
                <Container id="ContactMe" className='container-fluid'>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <form  className="mx-5 mt-2 formclass p-5" ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3">
                                <h5>Name</h5>
                                <Form.Control className="my-2" type="text" name="name"  placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <h5>Email</h5>
                                <Form.Control className="my-2"  name="email" type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group as={Col} id="formGridQuery">
                            <h5>Message</h5>
                            <textarea className="textarea" type="text" name="message" rows={3} placeholder="Write your message">
                            </textarea>
                            </Form.Group>
                            <Button variant="primary" className='my-3 ' type="submit" onClick={() => mostrarAlert()} >
                                SEND
                            </Button>
                    </form>
                </Col>
            </Row>
        </Container> 
            </Container>
            </section>
            <br></br>
            <br></br>
               
        </>
                

    )

}

export default Home;


/*<Container id="ContactMe" className='container-fluid'>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <Form  className="mx-5 formclass border border-success p-5"  action="https://f1backend.herokuapp.com/send-emailportfolio" method='POST'>
                            <Form.Group className="mb-3">
                                <h5>Name</h5>
                                <Form.Control className="my-2 mx-4" type="text" name="name"  placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <h5>Email</h5>
                                <Form.Control className="my-2 mx-4"  name="email" type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group as={Col} id="formGridQuery">
                            <h5>Message</h5>
                            <textarea className="m-4 textarea" type="text" name="message" rows={3} placeholder="Write your message">
                            </textarea>
                            </Form.Group>
                            <Button variant="primary" className='mx-4 my-3' type="submit" >
                                Send
                            </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        <br></br>
        <br></br>*/