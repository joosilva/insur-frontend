import { useState } from 'react';
import { Col, Container, Input, Label, Row } from "reactstrap";

const NewPage = () => {
    document.title = "Home";

    const [tipoPessoa, setTipoPessoa] = useState("pessoaFisica");
    console.log(tipoPessoa);

    const changeTipoPessoa = () => {
        setTipoPessoa(tipoPessoa === "pessoaFisica" ? "pessoaJuridica" : "pessoaFisica");
    };

    return (
        <div className="page-content">
            <Container fluid={false}>
                <Row md={12}>
                    <Col xxl={3} md={6} onChange={changeTipoPessoa}>
                        <div className="form-check mb-3">
                            <Input className="form-check-input" name="tipoPessoa" type="radio" id="pessoaFisica" value="pessoaFisica" defaultChecked />
                            <Label className="form-check-label" for="pessoaFisica">
                                Pessoa Física
                            </Label>
                        </div>
                    </Col>
                    <Col xxl={3} md={6} onChange={changeTipoPessoa}>
                        <div className="form-check mb-3">
                            <Input className="form-check-input" name="tipoPessoa" type="radio" id="pessoaJuridica" value="pessoaFisica" />
                            <Label className="form-check-label" for="pessoaJuridica">
                                Pessoa Jurídica
                            </Label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {tipoPessoa === "pessoaFisica" ?
                        <Col md={12}>
                            <div className="mb-3">
                                <Label for="nameInput" className="form-label">Nome</Label>
                                <Input type="text" className="form-control" placeholder="Informe seu nome" id="nameInput" />
                            </div>
                        </Col>
                        :
                        <Col md={12}>
                            <div className="mb-3">
                                <Label for="nameInput" className="form-label">Razão Social</Label>
                                <Input type="text" className="form-control" placeholder="Informe a razão social" id="nameInput" />
                            </div>
                        </Col>
                    }
                    {tipoPessoa === "pessoaFisica" ?
                        <Col md={12}>
                            <div className="mb-3">
                                <Label for="nameInput" className="form-label">CPF</Label>
                                <Input type="text" className="form-control" placeholder="Informe seu CPF" id="nameInput" />
                            </div>
                        </Col>
                        :
                        <Col md={12}>
                            <div className="mb-3">
                                <Label for="nameInput" className="form-label">CNPJ</Label>
                                <Input type="text" className="form-control" placeholder="Informe seu CNPJ" id="nameInput" />
                            </div>
                        </Col>
                    }
                    <Col md={12}>
                        <div className="mb-3">
                            <Label for="emailInput" className="form-label">Email</Label>
                            <Input type="text" className="form-control" placeholder="exemplo@email.com" id="emailInput" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="mb-3">
                            <Label for="senhaInput" className="form-label">Senha</Label>
                            <Input type="tel" className="form-control" placeholder="Digite sua senha" id="senhaInput" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="mb-3">
                            <Label for="senhaInput" className="form-label">Confirmar senha</Label>
                            <Input type="tel" className="form-control" placeholder="Confirme sua senha" id="senhaInput" />
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NewPage;