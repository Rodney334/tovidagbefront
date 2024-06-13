import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert, Spinner } from 'reactstrap';
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import { resetLoginFlag } from "../../store/actions";

import logoDark from "../../assets/images/logo-dark.png";

import withRouter from '../../Components/Common/withRouter';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { key } from '../../constantes/key';

const Login = (props) => {
    const dispatch = useDispatch();
    const { user, errorMsg, error } = useSelector(state => ({
        user: state.Account.user,
        errorMsg: state.Login.errorMsg,
        error: state.Login.error,
    }));

    const [userLogin, setUserLogin] = useState([]);
    const [passwordShow, setPasswordShow] = useState(false);
    
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (user && user) {
            const updatedUserData = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? user.multiFactor.user.email : user.user.email;
            setUserLogin({
                email: updatedUserData,
                password: user.user.confirm_password ? user.user.confirm_password : ""
            });
        }
    }, [user]);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Veuillez entrer votre email"),
            password: Yup.string().required("Veuillez entrer votre mot de passe"),
        }),
        onSubmit: (values) => {
            // dispatch(loginUser(values, props.router.navigate));
            setLoading(true)
            console.log("connexion data :: ", values)
            axios.post(
                key.apiBaseURL + "/login",
                values
            ).then(data => {
                console.log("data :: ", data)
                toast.success("Connexion réussit")
                setLoading(false)
                sessionStorage.setItem("authUser", JSON.stringify(data))
                props.router.navigate("/dashboard")
            }).catch(error => {
                console.log("error :: ", error)
                setLoading(false)
                toast.error("Echec de la connexion. Veuillez vérifier vos identifiants et réessayer.")
            })

        }
    });

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                dispatch(resetLoginFlag());
            }, 3000);
        }
    }, [dispatch, error]);


    document.title = "Connexion";
    return (
        <React.Fragment>
            <ToastContainer closeButton={false} />
            {/* <ParticlesAuth> */}
                <div className="auth-page-content">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-3 text-white-50">
                                    <div>
                                        <Link to="/" className="d-inline-block auth-logo">
                                            <img src={logoDark} alt=""/>
                                        </Link>
                                    </div>
                                    {/* <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p> */}
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4">
                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Bienvenue chez TOVIDAGBE !</h5>
                                            <p className="text-muted">Connectez vous pour continuer.</p>
                                        </div>
                                        {errorMsg && errorMsg ? (<Alert color="danger"> {errorMsg} </Alert>) : null}
                                        <div className="p-2 mt-4">
                                            <Form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    validation.handleSubmit();
                                                    return false;
                                                }}
                                                action="#">

                                                <div className="mb-3">
                                                    <Label htmlFor="email" className="form-label">Email</Label>
                                                    <Input
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Entrez votre email"
                                                        type="email"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.email || ""}
                                                        invalid={
                                                            validation.touched.email && validation.errors.email ? true : false
                                                        }
                                                    />
                                                    {validation.touched.email && validation.errors.email ? (
                                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                    ) : null}
                                                </div>

                                                <div className="mb-3">
                                                    <div className="float-end">
                                                        <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
                                                    </div>
                                                    <Label className="form-label" htmlFor="password-input">Password</Label>
                                                    <div className="position-relative auth-pass-inputgroup mb-3">
                                                        <Input
                                                            name="password"
                                                            value={validation.values.password || ""}
                                                            type={passwordShow ? "text" : "password"}
                                                            className="form-control pe-5"
                                                            placeholder="Entrez votre mot de passe"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            invalid={
                                                                validation.touched.password && validation.errors.password ? true : false
                                                            }
                                                        />
                                                        {validation.touched.password && validation.errors.password ? (
                                                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                        ) : null}
                                                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}> <i className="ri-eye-fill align-middle"></i> </button>
                                                    </div>
                                                </div>

                                                {/* <div className="form-check">
                                                    <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                    <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label>
                                                </div> */}

                                                <div className="mt-4">
                                                    <Button disabled={error ? null : loading ? true : false} color="success" className="btn btn-success w-100" type="submit">
                                                        {error ? null : loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                                        Connexion
                                                    </Button>
                                                </div>

                                                {/* <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                                    </div>
                                                    <div>
                                                    <Link
                                                        to="#"
                                                        className="btn btn-primary btn-icon me-1"
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            socialResponse("facebook");
                                                        }}
                                                        >
                                                        <i className="ri-facebook-fill fs-16" />
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="btn btn-danger btn-icon me-1"
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            socialResponse("google");
                                                        }}
                                                        >
                                                        <i className="ri-google-fill fs-16" />
                                                    </Link>
                                                        <Button color="dark" className="btn-icon"><i className="ri-github-fill fs-16"></i></Button>{" "}
                                                        <Button color="info" className="btn-icon"><i className="ri-twitter-fill fs-16"></i></Button>
                                                    </div>
                                                </div> */}
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>

                                <div className="mt-4 text-center">
                                    <p className="mb-0">N'avez vous pas de compte ? <Link to="/register" className="fw-semibold text-primary text-decoration-underline"> Inscription </Link> </p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
            {/* </ParticlesAuth> */}
        </React.Fragment>
    );
};

export default withRouter(Login);