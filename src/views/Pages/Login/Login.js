import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Form, FormFeedback, FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';
import RequestHandlerFunctions from "../../TOUviews/RequestHandler";
import axios from 'axios'

class Login extends Component {

    state = {
        isSignedIn: 0,
        typeInfoCard: 0,
        whatsApp: '0821 - 9009 - 0638',
        phone: '0821 - 9009 - 0638',

        signInMessageDefault: 'Silahkan gunakan Nomor Telepon & Kata Sandi / Password akun TOU-System untuk masuk',
        signInMessage: 'Silahkan gunakan Nomor Telepon & Kata Sandi akun TOU-System untuk masuk',

        inputPhone: '',
        inputErrorPhone: false,
        inputIsPhoneDisabled: false,

        inputPassword: '',
        inputErrorPass: false,
        inputIsPassDisabled: false,

        signInButtonReady: true,

        isLoading: false,
    }

    handleOnInputChange = (e, type) => {
        let v = e.target.value
        if (type === 'phone') {
            this.setState({inputPhone: v})


            if (!/^\d+$/.test(v)) {
                let msg = 'Nomor Telepon hanya terdiri dari 0 - 9'
                this.setState({
                    inputErrorPhone: true,
                    signInButtonReady: false,
                    signInMessage: msg,
                    inputIsPassDisabled: true
                })
                return
            }

            if (!v.startsWith("0")) {
                let msg = 'Nomor Telepon harus dimulai dengan angka 0'
                this.setState({
                    inputErrorPhone: true,
                    signInButtonReady: false,
                    signInMessage: msg,
                    inputIsPassDisabled: true
                })
                return
            }

            // if (v.length < 11) {
            //     let msg = 'Nomor Telepon harus berjumlah lebih dari 10 angka'
            //     this.setState({
            //         inputErrorPhone: true,
            //         signInButtonReady: false,
            //         signInMessage: msg,
            //         inputIsPassDisabled: true
            //     })
            //     return
            // }

            this.setState({
                inputErrorPhone: false,
                signInButtonReady: true,
                signInMessage: this.state.signInMessageDefault,
                inputIsPassDisabled: false,
            })

        } else {
            this.setState({inputPassword: v})
            if (v.length < 1) {
                let msg = 'Password tidak boleh kosong'
                this.setState({
                    inputErrorPass: true,
                    signInButtonReady: false,
                    signInMessage: msg,
                    inputIsPhoneDisabled: true
                })
            } else {
                this.setState({
                    inputErrorPass: false,
                    signInButtonReady: true,
                    signInMessage: this.state.signInMessageDefault,
                    inputIsPhoneDisabled: false,
                })
            }
        }
    }

    handleOnKeyPressed = (e) => {
        if (e.key === 'Enter') {
            this.handleOnButtonSignIn(e)
        }
    }

    handleOnButtonSignIn = e => {
        e.preventDefault()

        if (!this.state.inputPhone) {
            let msg = 'Nomor Telepon tidak boleh kosong'
            this.setState({
                inputErrorPhone: true,
                signInButtonReady: false,
                signInMessage: msg,
                inputIsPassDisabled: true
            })
            return
        }

        if (!this.state.inputPassword) {
            let msg = 'Password tidak boleh kosong'
            this.setState({
                inputErrorPass: true,
                signInButtonReady: false,
                signInMessage: msg,
                inputIsPhoneDisabled: true
            })
            return
        }

        this.signIn(this.state.inputPhone, this.state.inputPassword)

    }

    signIn = (phone, password) => {

        this.setState({isLoading: true})

        axios.post(RequestHandlerFunctions.generateLocalURLFromPath('/panel-dashboard'),
            {phone: this.state.inputPhone, password: this.state.inputPassword},
            RequestHandlerFunctions.generateDefaultConfig())
        .then(res => {
            let data = res.data
            this.setState({isLoading: false})
            console.log(data)
            if (data.error) {
                this.setState({
                    signInMessage: data.message
                })
            } else {
                RequestHandlerFunctions.signIn(
                    true,
                    data.data.church_id,
                    data.data.church_name,
                    data.data.church_kelurahan,
                    data.data.auth_token,
                )

                this.setState({
                    isSignedIn: RequestHandlerFunctions.isSignedIn()
                })
            }
        }).catch(err => {
            console.log(err)
        })
    }

    handleSignUp = e => {
        e.preventDefault()
        this.setState({
            typeInfoCard: this.state.typeInfoCard === 1 ? 0 : 1
        })
    }

    handleForget = e => {
        e.preventDefault()
        this.setState({
            typeInfoCard: this.state.typeInfoCard === 2 ? 0 : 2
        })
    }

    displayInfoCard = (type) => {

        let render;
        switch (type) {
            case 1:
                render = <Card className="text-white bg-primary py-5 d-md-down-none animated fadeInUpBig"
                               style={{width: '100%'}}>
                    <CardBody className="text-center pt-5">
                        <div>
                            <h2>TOU-System | CARA DAFTAR</h2>
                            <p>Fitur ini masih dalam perbaikan, untuk saat ini hanya bisa di lakukan pendaftaran secara
                                manual dengan menghubungi nomor:<br/>Telepon, WhatsApp, SMS</p>
                            <div className='alert alert-secondary pt-2'>
                                <i className='fa fa-phone pr-1'/>{this.state.phone}<br/>
                                <i className='fa fa-whatsapp pr-1'/>{this.state.whatsApp}
                            </div>
                        </div>
                    </CardBody>
                </Card>
                break
            case 2:
                render = <Card className="text-white bg-primary py-5 d-md-down-none animated fadeInUpBig"
                               style={{width: '100%'}}>
                    <CardBody className="text-center pt-5">
                        <div>
                            <h2>TOU-System | LUPA AKUN</h2>
                            <p>Fitur ini masih dalam perbaikan, untuk saat ini hanya bisa di lakukan pemulihan akun
                                manual dengan menghubungi nomor:<br/>Telepon, WhatsApp, SMS</p>
                            <div className='alert alert-secondary pt-2'>
                                <i className='fa fa-phone pr-1'/>{this.state.phone}<br/>
                                <i className='fa fa-whatsapp pr-1'/>{this.state.whatsApp}
                            </div>
                        </div>
                    </CardBody>
                </Card>
                break
            default:
                render = <Card className="text-white bg-primary py-5 d-md-down-none animated fadeInUpBig"
                               style={{width: '100%'}}>
                    <CardBody className="text-center pt-5">
                        <div>
                            <h2>TOU-System</h2>
                            <p>Sistem informasi yang di desain spesifik untuk membantu
                                mempermudah operasi Gereja menjadi lebih mudah dan efisien bagi
                                seluruh anggota gereja
                            </p>
                        </div>
                    </CardBody>
                </Card>
                break
        }
        return render
    }

    render() {
        return this.state.isSignedIn ?
            <Redirect to='/dashboard'/>
            :
            <React.Fragment>
                <div className="app animated fadeIn">
                    <div className='flex-row  my-auto'>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md="12" lg='12' sm='12'>
                                    <CardGroup>
                                        <Card className="p-4">

                                            <CardBody className='animated fadeIn'>
                                                <Form>
                                                    <h2>Halaman Masuk, Panel TOU-System</h2>
                                                    <p className='text-muted my-1 small animated fadeIn'><i
                                                        className='fa fa-warning text-warning pr-1'/>
                                                        {this.state.signInMessage} </p>
                                                    {this.state.isLoading ?
                                                        <CardBody className='text-center animated fadeIn'>
                                                            <div className="spinner-border text-primary  my-5"
                                                                 role="status"/>
                                                        </CardBody>
                                                        :
                                                        <React.Fragment>
                                                            <InputGroup className="mb-3">
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="icon-phone"/>
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                {this.state.inputErrorPhone ?
                                                                    <Input type="text"
                                                                           placeholder="Nomor Telepon"
                                                                           invalid
                                                                           disabled={this.state.inputIsPhoneDisabled}
                                                                           onKeyPress={this.handleOnKeyPressed}
                                                                           onChange={(e) => this.handleOnInputChange(e, 'phone')}
                                                                           value={this.state.inputPhone}
                                                                           autoComplete="phone"/>
                                                                    :
                                                                    <Input type="text"
                                                                           placeholder="Nomor Telepon"
                                                                           disabled={this.state.inputIsPhoneDisabled}
                                                                           onKeyPress={this.handleOnKeyPressed}
                                                                           onChange={(e) => this.handleOnInputChange(e, 'phone')}
                                                                           value={this.state.inputPhone}
                                                                           autoComplete="phone"/>
                                                                }
                                                            </InputGroup>
                                                            <InputGroup className="mb-3">
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="icon-lock"/>
                                                                    </InputGroupText>
                                                                </InputGroupAddon>

                                                                {this.state.inputErrorPass ?
                                                                    <Input type="password"
                                                                           placeholder="Kata Sanddi / Password"
                                                                           invalid
                                                                           disabled={this.state.inputIsPassDisabled}
                                                                           onKeyPress={this.handleOnKeyPressed}
                                                                           onChange={(e) => this.handleOnInputChange(e, 'password')}
                                                                           value={this.state.inputPassword}
                                                                           autoComplete="current-password"/>
                                                                    :
                                                                    <Input type="password"
                                                                           placeholder="Kata Sandi / Password"
                                                                           disabled={this.state.inputIsPassDisabled}
                                                                           onKeyPress={this.handleOnKeyPressed}
                                                                           onChange={(e) => this.handleOnInputChange(e, 'password')}
                                                                           value={this.state.inputPassword}
                                                                           autoComplete="current-password"/>
                                                                }
                                                            </InputGroup>
                                                            <Row>
                                                                <Col xs="6">
                                                                    {this.state.signInButtonReady ?
                                                                        <Button color="primary"
                                                                                className="px-4"
                                                                                onKeyPress={this.handleOnKeyPressed}
                                                                                onClick={this.handleOnButtonSignIn}>
                                                                            Masuk
                                                                        </Button>
                                                                        :
                                                                        <Button color="primary"
                                                                                disabled
                                                                                className="px-4"
                                                                                onKeyPress={this.handleOnKeyPressed}
                                                                                onClick={this.handleOnButtonSignIn}>
                                                                            Masuk
                                                                        </Button>
                                                                    }
                                                                </Col>
                                                                <Col xs="6" className="text-right">
                                                                    <Button onClick={this.handleForget} color="primary"
                                                                            className="px-4 btn-ghost-primary">Lupa akun
                                                                        ?</Button>
                                                                </Col>
                                                            </Row>
                                                            <Row className='mt-2'>
                                                                <Col>
                                                                    <Button
                                                                        outline
                                                                        color="primary"
                                                                        onClick={this.handleSignUp}
                                                                        className="px-4">Daftar
                                                                    </Button>

                                                                </Col>
                                                            </Row>
                                                            <Row className='mt-2'>
                                                                <Col>
                                                                    <a
                                                                        href="https://play.google.com/store/apps/details?id=com.meimodev.sitouhandler"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer">
                                                                        <i className="fa fa-play pl-1"/> Android App
                                                                    </a>
                                                                </Col>
                                                            </Row>
                                                        </React.Fragment>
                                                    }
                                                </Form>
                                            </CardBody>

                                        </Card>

                                        {this.displayInfoCard(this.state.typeInfoCard)}

                                    </CardGroup>
                                    <div className='small text-muted '>
                                        <span> Awesomely Possible
                                            <strong className='text-primary'> MEIMO </strong>&#128526; thanks <a target="_blank" rel="noopener noreferrer" href="https://coreui.io/pro/react/"> CORE UI React </a>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </React.Fragment>
    }
}

export default Login;
// <React.Fragment>
//
//   <div className="app">
//     <div className='flex-row align-items-center my-auto'>
//       <Container >
//         <Row className="justify-content-center">
//           <Col md="8">
//             <CardGroup>
//               <Card className="p-4">
//                 <CardBody>
//                   <Form>
//                     <h1>Login</h1>
//                     <p className="text-muted">Sign In to your account</p>
//                     <InputGroup className="mb-3">
//                       <InputGroupAddon addonType="prepend">
//                         <InputGroupText>
//                           <i className="icon-user"/>
//                         </InputGroupText>
//                       </InputGroupAddon>
//                       <Input type="text" placeholder="Username" autoComplete="username"/>
//                     </InputGroup>
//                     <InputGroup className="mb-4">
//                       <InputGroupAddon addonType="prepend">
//                         <InputGroupText>
//                           <i className="icon-lock"/>
//                         </InputGroupText>
//                       </InputGroupAddon>
//                       <Input type="password" placeholder="Password"
//                              autoComplete="current-password"/>
//                     </InputGroup>
//                     <Row>
//                       <Col xs="6">
//                         <Button color="primary" className="px-4"
//                                 onClick={this.handleSignIn}>Sign in</Button>
//                       </Col>
//                       <Col xs="6" className="text-right">
//                         <Button color="link" className="px-0">Forgot password?</Button>
//                       </Col>
//                     </Row>
//                   </Form>
//                 </CardBody>
//               </Card>
//               <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
//                 <CardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//                       eiusmod tempor incididunt ut
//                       labore et dolore magna aliqua.</p>
//                     <Link to="/register">
//                       <Button color="primary" className="mt-3" active tabIndex={-1}>Register
//                         Now!</Button>
//                     </Link>
//                   </div>
//                 </CardBody>
//               </Card>
//             </CardGroup>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   </div>
//
//
// </React.Fragment>