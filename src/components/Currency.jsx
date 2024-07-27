import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';


const Currency = () => {

    const [value, setValue] = useState(1)
    const [birim, setBirim] = useState("TRY")
    const [birimCevir, setBirimCevir] = useState("USD")
    const [sonuc, setSonuc] = useState(0)


    const resData = async () => {
        const res = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_rczeakN0du8slN8PdHyfNFDNp5KCrKyQKjPP71aO&base_currency=${birim}`)
        const doviz = (res.data.data[birimCevir] * value).toFixed(2);
        setSonuc(doviz)


    }



    return (
        <div className="currency-div">
            <div>
                <h3 style={{ marginTop: "-10px", fontFamily: "arial" }}>Döviz Kuru Uygulaması</h3>
            </div>
            <div>
                <input value={value} onChange={e => setValue(e.target.value)} type="number" className="amount" />
                <select onChange={e => setBirim(e.target.value)} className='from-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <FaArrowAltCircleRight style={{ marginRight: "10px" }} />
                <select onChange={e => setBirimCevir(e.target.value)} className='to-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <input value={sonuc} onChange={e => setSonuc(e.target.value)} type='number' className='result' />
            </div>
            <div>
                <button onClick={resData} style={{ marginTop: "10px", width: "150px", height: "30px" }}>Çevir</button>
            </div>


        </div>
    )
}

export default Currency