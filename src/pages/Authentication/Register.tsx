import React, { useEffect, useState } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback, Button, Spinner } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//input masks
import Masks, { InputCPF, InputCNPJ } from "pages/Forms/Masks/Masks";

// action
import { registerUser, resetRegisterFlag } from "../../slices/thunks";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

//import images 
import logoLight from "../../assets/images/logo-light.png";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { createSelector } from "reselect";


const Register = () => {
    const history = useNavigate();
    const dispatch: any = useDispatch();
    const [loader, setLoader] = useState<boolean>(false);

    const messageValidation = "Por favor, preencha este campo";

    Yup.setLocale({
        string: {
            email: "Digite um email válido",
            min: "Preencha com no mínimo ${min} caractéres",
            max: "Preencha com no máximo ${max} caractéres",
        },
    });

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,


        initialValues: {
            nome: '',
            cpf_cnpj: '',
            email: '',
            password: '',
            confirm_password: ''
        },


        validationSchema: Yup.object({
            nome: Yup.string().required(messageValidation),
            cpf_cnpj: Yup.number().required(messageValidation),
            email: Yup.string().email().required(messageValidation),
            password: Yup.string().min(8).max(16).required(messageValidation),
            confirm_password: Yup.string()
                .oneOf([Yup.ref('password')], "A confirmação deve ser igual sua senha",)
                .required(messageValidation)
        }),
        onSubmit: (values) => {
            dispatch(registerUser(values));
            setLoader(true)
        }
    });

    const selectLayoutState = (state: any) => state.Account;
    const registerdatatype = createSelector(
        selectLayoutState,
        (account) => ({
            success: account.success,
            error: account.error
        })
    );
    // Inside your component
    const {
        error, success
    } = useSelector(registerdatatype);

    useEffect(() => {
        if (success) {
            setTimeout(() => history("/login"), 3000);
        }

        setTimeout(() => {
            dispatch(resetRegisterFlag());
        }, 3000);

    }, [dispatch, success, error, history]);

    const [tipoPessoa, setTipoPessoa] = useState("pessoaFisica");
    const [passwordShow, setPasswordShow] = useState<boolean>(false);

    const changeTipoPessoa = () => {
        setTipoPessoa(tipoPessoa === "pessoaFisica" ? "pessoaJuridica" : "pessoaFisica");
    };

    return (
        <React.Fragment>
            <ParticlesAuth>
                <div className="auth-page-content mt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <Link to="/" className="d-inline-block auth-logo">
                                            <img src={logoLight} alt="" height="20" />
                                        </Link>
                                    </div>
                                    <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4">

                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Criar Nova Conta</h5>
                                            <p className="text-muted">Crie uma conta e venha para Insur</p>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <Form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    validation.handleSubmit();
                                                    return false;
                                                }}
                                                className="needs-validation" action="#">

                                                {success && success ? (
                                                    <>
                                                        {toast("Redirecionando para página de login...", { position: "top-center", hideProgressBar: true, className: 'bg-success text-white', progress: undefined, toastId: "" })}
                                                        <ToastContainer autoClose={2000} limit={1} />
                                                        <Alert color="success">
                                                            Usuário cadastrado com suceso! Você será redirecionado para a página de login...
                                                        </Alert>
                                                    </>
                                                ) : null}

                                                {error && error ? (
                                                    <Alert color="danger"><div>
                                                        Já existe um cadastro com esse email... <Link to="/login">Login</Link></div></Alert>
                                                ) : null}

                                                <Row className="mb-3" onChange={changeTipoPessoa}>
                                                    <Col>
                                                        <div className="form-check">
                                                            <Input className="form-check-input" name="tipoPessoa" type="radio" id="pessoaFisica" value="pessoaFisica" defaultChecked />
                                                            <Label className="form-check-label" for="pessoaFisica">
                                                                Pessoa Física
                                                            </Label>
                                                        </div>
                                                    </Col>
                                                    <Col>
                                                        <div className="form-check">
                                                            <Input className="form-check-input" name="tipoPessoa" type="radio" id="pessoaJuridica" value="pessoaJuridica" />
                                                            <Label className="form-check-label" for="pessoaJuridica">
                                                                Pessoa Jurídica
                                                            </Label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                {tipoPessoa === "pessoaFisica" ?
                                                    <div className="mb-3">
                                                        <Label htmlFor="username" className="form-label">Nome <span className="text-danger">*</span></Label>
                                                        <Input
                                                            id="nome"
                                                            name="nome"
                                                            type="text"
                                                            placeholder="Digite seu nome"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.nome || ""}
                                                            invalid={
                                                                validation.touched.nome && validation.errors.nome ? true : false
                                                            }
                                                        />
                                                        {validation.touched.nome && validation.errors.nome ? (
                                                            <FormFeedback type="invalid"><div>{validation.errors.nome}</div></FormFeedback>
                                                        ) : null}

                                                    </div>
                                                    :
                                                    <div className="mb-3">
                                                        <Label htmlFor="username" className="form-label">Razão Social <span className="text-danger">*</span></Label>
                                                        <Input
                                                            id="nome"
                                                            name="nome"
                                                            type="text"
                                                            placeholder="Digite a razão social"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.nome || ""}
                                                            invalid={
                                                                validation.touched.nome && validation.errors.nome ? true : false
                                                            }
                                                        />
                                                        {validation.touched.nome && validation.errors.nome ? (
                                                            <FormFeedback type="invalid"><div>{validation.errors.nome}</div></FormFeedback>
                                                        ) : null}

                                                    </div>
                                                }

                                                {tipoPessoa === "pessoaFisica" ?
                                                    <div className="mb-3">
                                                        <Label htmlFor="cpf_cnpj" className="form-label">CPF <span className="text-danger">*</span></Label>
                                                        <Input
                                                            id="cpf_cnpj"
                                                            name="cpf_cnpj"
                                                            className="form-control"
                                                            placeholder="Insira seu CPF"
                                                            type="number"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.cpf_cnpj || ""}
                                                            invalid={
                                                                validation.touched.cpf_cnpj && validation.errors.cpf_cnpj ? true : false
                                                            }
                                                        />
                                                        {validation.touched.cpf_cnpj && validation.errors.cpf_cnpj ? (
                                                            <FormFeedback type="invalid"><div>{validation.errors.cpf_cnpj}</div></FormFeedback>
                                                        ) : null}
                                                        <InputCPF />
                                                    </div>
                                                    :
                                                    <div className="mb-3">
                                                        <Label htmlFor="cpf_cnpj" className="form-label">CNPJ <span className="text-danger">*</span></Label>
                                                        <InputCNPJ />
                                                    </div>
                                                }

                                                <div className="mb-3">
                                                    <Label htmlFor="useremail" className="form-label">Email <span className="text-danger">*</span></Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Insira seu email"
                                                        type="email"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.email || ""}
                                                        invalid={
                                                            validation.touched.email && validation.errors.email ? true : false
                                                        }
                                                    />
                                                    {validation.touched.email && validation.errors.email ? (
                                                        <FormFeedback type="invalid"><div>{validation.errors.email}</div></FormFeedback>
                                                    ) : null}

                                                </div>

                                                <div className="mb-3">
                                                    <Label className="form-label" htmlFor="password">Senha <span className="text-danger">*</span></Label>
                                                    <div className="form-label position-relative auth-pass-inputgroup mb-3">
                                                        <Input
                                                            name="password"
                                                            value={validation.values.password || ""}
                                                            type={passwordShow ? "text" : "password"}
                                                            className="form-control pe-5"
                                                            placeholder="Crie uma senha"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            invalid={
                                                                validation.touched.password && validation.errors.password ? true : false
                                                            }
                                                        />
                                                        {validation.touched.password && validation.errors.password ? (
                                                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                        ) : null}
                                                        <button className="btn btn-link position-absolute mr-1 end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}><i className="ri-eye-fill align-middle"></i></button>
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <Label className="form-label" htmlFor="confirm_password">Confirmar Senha <span className="text-danger">*</span></Label>
                                                    <div className="form-label position-relative auth-pass-inputgroup mb-3">
                                                        <Input
                                                            name="confirm_password"
                                                            value={validation.values.confirm_password || ""}
                                                            type={passwordShow ? "text" : "password"}
                                                            className="form-control pe-5"
                                                            placeholder="Confirme sua senha"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            invalid={
                                                                validation.touched.confirm_password && validation.errors.confirm_password ? true : false
                                                            }
                                                        />
                                                        {validation.touched.confirm_password && validation.errors.confirm_password ? (
                                                            <FormFeedback type="invalid">{validation.errors.confirm_password}</FormFeedback>
                                                        ) : null}
                                                        <button className="btn btn-link position-absolute mr-1 end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}><i className="ri-eye-fill align-middle"></i></button>
                                                    </div>
                                                </div>

                                                <div className="mt-4">
                                                    <Button color="success" className="w-100" type="submit" disabled={loader && true}>
                                                        {loader && <Spinner size="sm" className='me-2'> Carregando... </Spinner>}
                                                        Cadastrar
                                                    </Button>
                                                </div>

                                                <div className="mt-1">
                                                    <p className="mt-1 fs-12 text-muted fst-italic">Ao se cadastrar você aceita nossos
                                                        <Link to="#" className="m-1 text-primary text-decoration-underline fst-normal fw-medium">termos de uso</Link>.</p>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <h5 className="fs-13 mb-1 title text-muted">Cadastre-se com</h5>
                                                    </div>

                                                    <div>
                                                        <button type="button" className="btn btn-primary btn-icon waves-effect waves-light"><i className="ri-facebook-fill fs-16"></i></button>{" "}
                                                        <button type="button" className="btn btn-danger btn-icon waves-effect waves-light"><i className="ri-google-fill fs-16"></i></button>{" "}
                                                        <button type="button" className="btn btn-dark btn-icon waves-effect waves-light"><i className="ri-github-fill fs-16"></i></button>{" "}
                                                        <button type="button" className="btn btn-info btn-icon waves-effect waves-light"><i className="ri-twitter-fill fs-16"></i></button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-4 text-center">
                                    <p className="mb-0"> Já possui conta? <Link to="/login" className="fw-semibold text-primary text-decoration-underline"> Login </Link> </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

document.title = "INSUR - Cadastro";

export default Register;
