import React from 'react';
import { Styles } from './styles/registNgef';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

const RegistNgef = () => {

  return (
    <Styles>
      <div className="container w-50 px-0">
        <div className="input-form-backgroud row">
          <div className="input-form col-md-12 mx-auto px-0">
            <h5 className="mb-3">개인정보 취급방침</h5>
            <div className="box-agree-provision">
              <div className="row col-md-12">
                <div className='col-md-12'>
                  <h5>개인정보 이용/취급방안</h5>
                </div>
                <div className='col-md-12'>
                  개인정보 약관
                </div>
              </div>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="aggrement" required/>
              <label className="custom-control-label" htmlFor="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
            </div>
            <hr className="mb-4"/>
            <h5 className="mb-3">참관유형</h5>
            <div className="col-md-3">
            <label className="align-middle" htmlFor="enterCase">참관유형 <i class="bi bi-asterisk text-danger"></i></label>
            <Form>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="">
                  <Form.Check
                    inline
                    label="개인"
                    name="enterCase"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="단체"
                    name="enterCase"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
            </div>
            <hr className="mb-4"/>
            <h5 className="mb-3">참관객 정보</h5>
            <div className="row col-md-12">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" id="name" placeholder="이름" required/>
                <div className="invalid-feedback">
                  이름을 입력해주세요.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" id="nickname" placeholder="회사명" required/>
                <div className="invalid-feedback">
                  회사명을 입력해주세요.
                </div>
              </div>
            </div>
            <div className="row col-md-12">
              <div className="col-md-6 mb-3">
                <input type="email" className="form-control" id="email" placeholder="연락처 (010-0000-0000)" required/>
                <div className="invalid-feedback">
                  연락처를 입력해주세요.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <input type="email" className="form-control" id="email" placeholder="이메일" required/>
                <div className="invalid-feedback">
                  이메일을 입력해주세요.
                </div>
              </div>
            </div>
            <hr className="mb-4"/>
            {/* <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="aggrement" required/>
              <label className="custom-control-label" htmlFor="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
            </div> */}
            <div className="mb-4"></div>
            <div className='d-flex justify-content-center'>
              <div className='col-md-6'>
                <Link className="btn btn-primary btn-lg btn-block" to={"/"}>가입 완료</Link>
              </div>
            </div>
          </div>
        </div>
        <footer className="my-3 text-center text-small">
          <p className="mb-1">2024 YD</p>
        </footer>
      </div>
    </Styles>
  )
}

export default RegistNgef