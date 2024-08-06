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
            <h5 className="mb-3">추가정보</h5>
            <div className="row col-md-12">
              <div className="col-md-6 mb-3">
                <select className="custom-select d-block w-100">
                  <option >지역</option>
                  <option value="1">서울특별시</option>
                  <option value="2">경기도</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <select className="custom-select d-block w-100">
                  <option >연령대</option>
                  <option value="1">10대</option>
                  <option value="2">20대</option>
                </select>
              </div>
            </div>
            <div className="row col-md-12">
              <div className="col-md-6 mb-3">
                <select className="custom-select d-block w-100">
                  <option >회사분류</option>
                  <option value="1">제조업체</option>
                  <option value="2">언론/출판기관</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <select className="custom-select d-block w-100">
                  <option >직책분류</option>
                  <option value="1">경영관리직</option>
                  <option value="2">일반사무직</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className='mb-3'>
                <label className="align-middle" htmlFor="purpose">관람목적 (중복 선택 가능)</label>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="">
                      <Form.Check
                        inline
                        label="정보수집"
                        name="purpose"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="구매상담"
                        name="purpose"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="시장조사"
                        name="purpose"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="일반관람"
                        name="purpose"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
              <div className='mb-3'>
                <label className="align-middle" htmlFor="field">관심분야 (중복 선택 가능)</label>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="">
                      <Form.Check
                        inline
                        label="방송"
                        name="field"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="애니메이션, 웹툰, 일러스트레이션"
                        name="field"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="캐릭터"
                        name="field"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="게임"
                        name="field"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                      <Form.Check
                        inline
                        label="메타버스, AI, 실감콘텐츠"
                        name="field"
                        type={type}
                        id={`inline-${type}-5`}
                      />
                      <Form.Check
                        inline
                        label="기타"
                        name="field"
                        type={type}
                        id={`inline-${type}-6`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
              <div className='mb-3'>
                <label className="align-middle" htmlFor="howToKnow">전시회 인지경로 (중복 선택 가능)</label>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="">
                      <Form.Check
                        inline
                        label="초청장"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="인터넷"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="이메일"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="유관기관/단체"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                      <Form.Check
                        inline
                        label="라디오"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-5`}
                      />
                      <Form.Check
                        inline
                        label="TV"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-6`}
                      />
                      <Form.Check
                        inline
                        label="전문지"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-7`}
                      />
                      <Form.Check
                        inline
                        label="옥외홍보물"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-8`}
                      />
                      <Form.Check
                        inline
                        label="엘리베이터 LCD"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-9`}
                      />
                      <Form.Check
                        inline
                        label="Facebook"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-10`}
                      />
                      <Form.Check
                        inline
                        label="Instagram"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-11`}
                      />
                      <Form.Check
                        inline
                        label="Youtube"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-12`}
                      />
                      <Form.Check
                        inline
                        label="기타"
                        name="howToKnow"
                        type={type}
                        id={`inline-${type}-13`}
                      />
                    </div>
                  ))}
                </Form>
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