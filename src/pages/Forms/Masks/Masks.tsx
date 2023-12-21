import React, { FC, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import InputMask from "react-input-mask";
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.in";

const InputCPF = () => {
  const [cpf, setCpf] = useState("");

  function onCpfChange(e: any) {
    setCpf(e.target.rawValue);
  };

  return (
    <Col>
      <div className="mb-3">
        <InputMask
          mask={"999.999.999-99"}
          placeholder="000.000.000-00"
          value={cpf}
          onChange={(e: any) => onCpfChange(e)}
          className="form-control"
        />
      </div>
    </Col>
  )
}

const InputCNPJ = () => {
  const [cnpj, setCnpj] = useState("");

  function onCnpjChange(e: any) {
    setCnpj(e.target.rawValue);
  }

  return (
    <Col>
      <div className="mb-3">
        <Cleave
          placeholder="00.000.000/0000-00"
          options={{
            numericOnly: true,
            delimiters: [".", ".", "/", "-"],
            blocks: [2, 3, 3, 4, 2],
          }}
          value={cnpj}
          onChange={(e: any) => onCnpjChange(e)}
          className="form-control"
        />
      </div>
    </Col>
  )
}

const InputDate = () => {
  const [date, setDate] = useState("");

  function onDateChange(e: any) {
    setDate(e.target.rawValue);
  }

  return (
    <Col>
      <div className="mb-3">
        <Cleave
          placeholder="DD/MM/YYYY"
          options={{
            date: true,
            delimiter: '/',
            datePattern: ['d', 'm', 'Y']
          }}
          value={date}
          onChange={(e: any) => onDateChange(e)}
          className="form-control"
        />
      </div>
    </Col>
  )
}

const InputDateFormat = () => {
  const [dateFormat, setDateFormat] = useState("");

  function onDateFormatChange(e: any) {
    setDateFormat(e.target.rawValue);
  }

  return (
    <Col>
      <div className="mb-3">
        <Cleave
          placeholder="MM/YYYY"
          options={{
            date: true,
            datePattern: ['m', 'Y']
          }}
          value={dateFormat}
          onChange={(e: any) => onDateFormatChange(e)}
          className="form-control"
        />
      </div>
    </Col>
  )
}

const InputTime = () => {
  const [time, setTime] = useState("");

  function onTimeChange(e: any) {
    setTime(e.target.rawValue);
  }

  return (
    <Col>
      <div className="mb-3">
        <Cleave
          placeholder="hh:mm:ss"
          options={{
            time: true,
            timePattern: ['h', 'm', 's']
          }}
          value={time}
          onChange={(e: any) => onTimeChange(e)}
          className="form-control"
        />
      </div>

    </Col>
  )
}

const InputTimeFormat = () => {
  const [timeFormat, setTimeFormat] = useState("");

  function onTimeFormatChange(e: any) {
    setTimeFormat(e.target.rawValue);
  }

  return (
    <Col>
      <div className="mb-3">
        <Cleave
          placeholder="hh:mm"
          options={{
            time: true,
            timePattern: ['h', 'm']
          }}
          value={timeFormat}
          onChange={(e: any) => onTimeFormatChange(e)}
          className="form-control"
        />
      </div>
    </Col>
  )
}

const InputCreditCard = () => {
  const [creditCardNo, setCreditCardNo] = useState("");

  function onCreditCardChange(e: any) {
    setCreditCardNo(e.target.rawValue)
  }

  return (
    <Col>
      <div className="mb-3">
        <Cleave
          placeholder="xxxx xxxx xxxx xxxx"
          options={{
            creditCard: true,
          }}
          value={creditCardNo}
          onChange={(e: any) => onCreditCardChange(e)}
          className="form-control"
        />
      </div>
    </Col>
  )
}

const InputDelimiter: FC<DelimiterProps> = (props): JSX.Element => {
  const [delimiter, setDelimiter] = useState("");

  function onDelimiterChange(e: any) {
    setDelimiter(e.target.rawValue);
  }

  const claveProps = props;

  return (
    <Col>
      <div className="mb-3">
        <Cleave
          placeholder={claveProps.placeholder}
          options={{
            delimiter: claveProps.options.delimiter,
            blocks: claveProps.options.blocks,
            uppercase: claveProps.options.uppercase
          }}
          value={delimiter}
          onChange={(e: any) => onDelimiterChange(e)}
          className="form-control"
        />
      </div>
    </Col>
  )
}

interface DelimiterProps {
  placeholder: string,
  options: {
    delimiter: string,
    blocks: [number],
    uppercase: boolean
  }
}

const InputPrefix: FC<PrefixProps> = (props): JSX.Element => {
  const [prefix, setPrefix] = useState("");

  function onPrefixChange(e: any) {
    setPrefix(e.target.rawValue);
  }

  const cleaveProps = props;

  return (
    <Col>
      <div className="mb-3">
        <Cleave 
          options={{
            prefix: props.prefix,
            delimiter: props.delimiter,
            blocks: props.blocks,
            uppercase: props.uppercase
          }}
          value={prefix && props.value}
          onChange={(e: any) => onPrefixChange(e)}
          className="form-control"
        />
      </div>
    </Col>
  )
}

interface PrefixProps {
  prefix: string,
  delimiter: string,
  blocks: [number],
  uppercase: boolean,
  value:boolean
}

const Masks = () => {
  const [date, setDate] = useState("");
  const [dateFormat, setDateFormat] = useState("");
  const [time, setTime] = useState("");
  const [timeFormat, setTimeFormat] = useState("");
  const [creditCardNo, setCreditCardNo] = useState("");
  const [delimiter, setDelimiter] = useState("");
  const [delimiter2, setDelimiter2] = useState("");
  const [prefix, setPrefix] = useState("");
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");

  //Date 
  function onDateChange(e: any) {
    setDate(e.target.rawValue);
  }
  //Date Format
  function onDateFormatChange(e: any) {
    setDateFormat(e.target.rawValue);
  }
  //Time 
  function onTimeChange(e: any) {
    setTime(e.target.rawValue);
  }
  //Time Format
  function onTimeFormatChange(e: any) {
    setTimeFormat(e.target.rawValue);
  }
  //Credit card 
  function onCreditCardChange(e: any) {
    setCreditCardNo(e.target.rawValue);
  }

  //Delimeter
  function onDelimiterChange(e: any) {
    setDelimiter(e.target.rawValue);
  }
  //Delimeter
  function onDelimiterChange2(e: any) {
    setDelimiter2(e.target.rawValue);
  }

  //Prefix
  function onPrefixChange(e: any) {
    setPrefix(e.target.rawValue);
  }
  //Phone
  function onPhoneChange(e: any) {
    setPhone(e.target.rawValue);
  }
  //Number
  function onNumberChange(e: any) {
    setNumber(e.target.rawValue);
  }

  document.title = "Input Masks | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">

        <Container fluid>
          <BreadCrumb title="Input Masks" pageTitle="Forms" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Examples</h4>
                </CardHeader>

                <CardBody >
                  <form action="#">
                    <div>
                      <h5 className="fs-14 mb-3 text-muted">Date Formatting</h5>
                      <Row >
                        <Col xl={6}>
                          <div className="mb-3">
                            <label htmlFor="cleave-date" className="form-label">Date</label>
                            <Cleave
                              placeholder="DD-MM-YYYY"
                              options={{
                                date: true,
                                delimiter: '-',
                                datePattern: ['d', 'm', 'Y']
                              }}
                              value={date}
                              onChange={(e: any) => onDateChange(e)}
                              className="form-control"
                            />
                          </div>
                        </Col>

                        <Col xl={6}>
                          <div className="mb-3">
                            <label htmlFor="cleave-date-format" className="form-label">Date Formatting</label>
                            <Cleave
                              placeholder="MM/YYYY"
                              options={{
                                date: true,
                                datePattern: ['m', 'Y']
                              }}
                              value={dateFormat}
                              onChange={(e: any) => onDateFormatChange(e)}
                              className="form-control"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="border mt-3 border-dashed"></div>

                    <div className="mt-4">
                      <h6 className="mb-3 fs-14 text-muted">Time Formatting</h6>
                      <Row>
                        <Col xl={6}>
                          <div className="mb-3">
                            <label htmlFor="cleave-time" className="form-label">Time</label>
                            <Cleave
                              placeholder="hh:mm:ss"
                              options={{
                                time: true,
                                timePattern: ['h', 'm', 's']
                              }}
                              value={time}
                              onChange={(e: any) => onTimeChange(e)}
                              className="form-control"
                            />
                          </div>

                        </Col>

                        <Col xl={6}>
                          <div className="mb-3">
                            <label htmlFor="cleave-time-format" className="form-label">Time Formatting</label>
                            <Cleave
                              placeholder="hh:mm"
                              options={{
                                time: true,
                                timePattern: ['h', 'm']
                              }}
                              value={timeFormat}
                              onChange={(e: any) => onTimeFormatChange(e)}
                              className="form-control"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="border mt-3 border-dashed"></div>

                    <div className="mt-4">
                      <h5 className="fs-14 mb-3 text-muted">Custom Options</h5>
                      <Row>
                        <Col xl={6}>
                          <div className="mb-3">
                            <label htmlFor="cleave-ccard" className="form-label">Credit Card</label>
                            <Cleave
                              placeholder="xxxx xxxx xxxx xxxx"
                              options={{
                                creditCard: true,
                              }}
                              value={creditCardNo}
                              onChange={(e: any) => onCreditCardChange(e)}
                              className="form-control"
                            />
                          </div>

                        </Col>

                        <Col xl={6}>
                          <div className="mb-3">
                            <label htmlFor="cleave-delimiter" className="form-label">Delimiter</label>
                            <Cleave
                              placeholder="xxx·xxx·xxx"
                              options={{
                                delimiter: '·',
                                blocks: [3, 3, 3],
                                uppercase: true
                              }}
                              value={delimiter}
                              onChange={(e: any) => onDelimiterChange(e)}
                              className="form-control"
                            />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xl={6}>
                          <div className="mb-3">
                            <label htmlFor="cleave-delimiters" className="form-label">Delimiters</label>
                            <Cleave
                              placeholder="xxx.xxx.xxx-xx"
                              options={{
                                delimiters: ['.', '.', '-'],
                                blocks: [3, 3, 3, 2],
                                uppercase: true
                              }}
                              value={delimiter2}
                              onChange={(e: any) => onDelimiterChange2(e)}
                              className="form-control"
                            />
                          </div>
                        </Col>

                        <Col xl={6}>
                          <div className="mb-3">
                            <label htmlFor="cleave-prefix" className="form-label">Prefix</label>
                            <Cleave
                              options={{
                                prefix: 'PREFIX',
                                delimiter: '-',
                                blocks: [6, 4, 4, 4],
                                uppercase: true
                              }}
                              value={prefix}
                              onChange={(e: any) => onPrefixChange(e)}
                              className="form-control"
                            />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xl={6}>
                          <div className="mb-3 mb-xl-0">
                            <label htmlFor="cleave-phone" className="form-label">Phone</label>
                            <Cleave
                              placeholder="xxxx xxx xxx"
                              options={{
                                phone: true,
                                phoneRegionCode: "IN"
                              }}
                              value={phone}
                              onChange={onPhoneChange}
                              className="form-control"
                            />
                          </div>
                        </Col>

                        <Col xl={6}>
                          <div className="mb-0">
                            <label htmlFor="cleave-numeral" className="form-label">Numeral Formatting</label>
                            <Cleave
                              placeholder="Enter numeral"
                              options={{
                                numeral: true,
                                numeralThousandsGroupStyle: 'thousand'
                              }}
                              value={number}
                              onChange={(e: any) => onNumberChange(e)}
                              className="form-control"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export { InputCPF, InputCNPJ, InputDate, InputDateFormat, InputTime, InputTimeFormat, InputCreditCard, InputDelimiter, InputPrefix };

export default Masks;
