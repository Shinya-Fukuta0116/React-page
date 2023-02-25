import React from 'react';
import './Company.css'


const Company = () => {
  return (
    <main>
      <div className="content wrapper">
        <h1 className="page-title">Company</h1>
        <div id="company">
          <dl className="info">
            <dt>社名</dt>
            <dd>株式会社ファニチャーデザイン</dd>
            <dt>住所</dt>
            <dd>〒107-0062 東京都港区南青山１丁目1600</dd>
            <dt>設立</dt>
            <dd>XXXX年XX月</dd>
            <dt>資本金</dt>
            <dd>XXXX万円</dd>
            <dt>従業員数</dt>
            <dd>XX名</dd>
            <dt>事業内容</dt>
            <dd>
              家具、インテリアの企画・生産<br />
              家具、インテリアの販売<br />
              店舗の企画・デザイン・設計
            </dd>
          </dl>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2916151866066!2d139.72342666590234!3d35.66982093019686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c820ac932eb%3A0xc68079dd10afd971!2s1%20Chome%20Minamiaoyama%2C%20Minato%20City%2C%20Tokyo%20107-0062!5e0!3m2!1sen!2sjp!4v1677305215170!5m2!1sen!2sjp"></iframe>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Company