import React from 'react'

const pricelist = () => {
  return (
    <div>
       <details>
                <summary><b>Katso koko hinnasto</b></summary>
                <div className="dropdown-text">
                    <h1 style={{}}>Hinnasto</h1>
                    <p style={{}}>Käytämme urakkaveloitusta, jotta tiedät työn hinnan tarkalleen etukäteen. Hinta sis. alv 24 %.
                        Käytämme vain ammattikäyttöön tarkoitettuja, erittäin laadukkaita laitteita ja pesuaineita. Pidätämme
                        oikeuden hinnanmuutoksiin. Minimiveloituksemme on 100 €. Pesu tapahtuu kätevästi asiakkaan kotona.
                        Maksaminen onnistuu kätevästi maksupäätteellä. Palvelumme ovat kotitalousvähennyskelpoisia (60 %).
                    </p>
                    <h2>Hinta-arvio:</h2>
                    <table>
                        <tr>
                            <th>Palvelu:</th>
                            <th>Hinta:</th>
                        </tr>
                        <tr>
                            <td>Hinta-arvio puhelimitse</td>
                            <td>0 €</td>
                        </tr>
                        <tr>
                            <td>Hinta-arviokäynti kotona (Oulu)</td>
                            <td>0 €</td>
                        </tr>
                    </table>
                    <h2>Tekstiilikalusteet:</h2>
                    <p>Tekstiilipintaiset kalusteet pestään ammattikäyttöön tarkoitetulla tekstiilipesurilla.
                    </p>
                    <table>
                        <tr>
                            <th>Työ:</th>
                            <th>Hinta:</th>
                        </tr>
                        <tr>
                            <td>Ruokatuoli</td>
                            <td>14 €</td>
                        </tr>
                        <tr>
                            <td>Työtuoli</td>
                            <td>21 €</td>
                        </tr>
                        <tr>
                            <td>Rahi</td>
                            <td>25 €</td>
                        </tr>
                        <tr>
                            <td>Nojatuoli</td>
                            <td>49 €</td>
                        </tr>
                        <tr>
                            <td>Kahden istuttava sohva</td>
                            <td>69 €</td>
                        </tr>
                        <tr>
                            <td>Kolmen istuttava sohva</td>
                            <td>98 €</td>
                        </tr>
                        <tr>
                            <td>Neljän istuttava sohva</td>
                            <td>12
                                6 €</td>
                        </tr>
                        <tr>
                            <td>Viiden istuttava sohva</td>
                            <td>147 €</td>
                        </tr>
                        <tr>
                            <td>Kuuden istuttava sohva</td>
                            <td>161 €</td>
                        </tr>
                        <tr>
                            <td>Yhden hengen sänky</td>
                            <td>56 €</td>
                        </tr>
                        <tr>
                            <td>Parisänky</td>
                            <td>84 €</td>
                        </tr>
                    </table>
                    <h2>Nahkakalusteet:</h2>
                    <p>Nahkakalusteisiin sovelletaan samaa hinnastoa kuin kangaskalusteisiin. Nahkakalusteet pestään käsin. Pesun jälkeen nahkakalusteet
                        käsitellään niihin soveltuvilla laadukkailla hoitoaineilla.</p>
                    <h2>Matot:</h2>
                    <table>
                        <tr>
                            <th>Työ:</th>
                            <th>Hinta:</th>
                        </tr>
                        <tr>
                            <td>XS-matto ( 0,5 m²)</td>
                            <td>9 €</td>
                        </tr>
                        <tr>
                            <td>S-matto ( 1 m²)</td>
                            <td>11 €</td>
                        </tr>
                        <tr>
                            <td>M-matto (3 m²)</td>
                            <td>29 €</td>
                        </tr>
                        <tr>
                            <td>L-matto ( 5 m²)</td>
                            <td>48 €</td>
                        </tr>
                        <tr>
                            <td>XL-matto ( 8 m²)</td>
                            <td>70 €</td>
                        </tr>
                        <tr>
                            <td>XXL-matto (10 m²)</td>
                            <td>84 €</td>
                        </tr>
                    </table>
                    <h2>Ajoneuvot (penkit, muu verhoilu):</h2>
                    <table>
                        <tr>
                            <th>Työ:</th>
                            <th>Hinta:</th>
                        </tr>
                        <tr>
                            <td>Yksittäinen penkki</td>
                            <td>35 €</td>
                        </tr>
                        <tr>
                            <td>Mopoauto</td>
                            <td>60 €</td>
                        </tr>
                        <tr>
                            <td>2-paikkainen auto</td>
                            <td>60 €</td>
                        </tr>
                        <tr>
                            <td>5-paikkainen auto</td>
                            <td>120 €</td>
                        </tr>
                        <tr>
                            <td>7-paikkainen auto</td>
                            <td>150 €</td>
                        </tr>
                        <tr>
                            <td>Venetekstiilit</td>
                            <td>Tarjouksen mukaan</td>
                        </tr>
                        <tr>
                            <td>Asuntoauton tekstiilit</td>
                            <td>Tarjouksen mukaan</td>
                        </tr>
                    </table>
                    <h2>Muut tekstiilipestävät:</h2>
                    <table>
                        <tr>
                            <th>Työ:</th>
                            <th>Hinta:</th>
                        </tr>
                        <tr>
                            <td>Puutarhakalusteen pehmuste</td>
                            <td>14 - 42 €</td>
                        </tr>
                        <tr>
                            <td>Pehmolelu</td>
                            <td>8 €</td>
                        </tr>
                        <tr>
                            <td>Ryijyt ja seinävaatteet</td>
                            <td>14 €/m²</td>
                        </tr>
                        <tr>
                            <td>Lastenvaunut ja -rattaat</td>
                            <td>21 €</td>
                        </tr>
                        <tr>
                            <td>Lasten turvaistuin</td>
                            <td>21 €</td>
                        </tr>
                    </table>
                    <h2>Lisäpalvelut:</h2>
                    <table>
                        <tr>
                            <th>Palvelu:</th>
                            <th>Hinta:</th>
                        </tr>
                        <tr>
                            <td>Pelkkä tekstiilipinnan imurointi</td>
                            <td>Tarjouksen mukaan</td>
                        </tr>
                        <tr>
                            <td>Hoitokäsittely hoitoaineella</td>
                            <td>Tarjouksen mukaan</td>
                        </tr>
                    </table>
                    <h2>Huom!</h2>
                    <p>Jos et löytänyt etsimääsi hintaa tältä välilehdeltä, lähetäthän meille tarjouspyynnön sähköpostitse
                        (mielellään kuvan kera). Voit tiedustella tarjouspyyntöä myös puhelimitse.
                    </p>
                    <p>Jos pestävässä tuotteessa ei ole pesulappua, tapahtuu pesu asiakkaan omalla vastuulla.</p>
                </div> 
                <button className="button-2" onClick={() => console.log("clik")}>Varaa aika</button>
                <button className="button-mobile"  onClick={() => console.log("clik")}>Varaa aika</button>   
            </details>
    </div>
  )
}

export default pricelist
