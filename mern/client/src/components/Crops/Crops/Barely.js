import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Barely.css";
import audio from "./Jow/general.mp3";
import audio2 from "./Jow/2.mp3";
import audio3 from "./Jow/3.mp3";
import audio4 from "./Jow/4.mp3";
import audio5 from "./Jow/5.mp3";
import audio6 from "./Jow/6.mp3";
import audio7 from "./Jow/7.mp3";
import audio8 from "./Jow/8.mp3";


function Barely() {
  return (
    <>
      <div className="mainbodyofcrops">
        <div className="forsidebar">
          <Sidebar />
        </div>
        <div className="mainCrops">
          <div className="card12">
            <b>General Information</b>
            <div className="cardbody">
              <p>
                Barley (Hordeum vulgare L.) is generally called “Jau”. It is
                quite significant cereal after wheat, maize & rice. Barley is
                cultivated in summer season in temperate area while it is sown
                in winter seasons in tropical zones. In India it is planted in
                rabi season. It possesses excellent drought resistance capacity.
              </p>
              <audio controls>
                <source src={audio} type="audio/ogg"></source>
              </audio>
            </div>
          </div>

          <div className="card12 mt-5">
            <b>Soil</b>
            <div className="cardbody">
              <p>
                Barley plants are cultivated on significant number of soil such
                as sodic, light & saline soil. Although, it gives good result in
                moderately heavy loam to sandy soils having neutral to saline
                response as well as moderate fertility. Acidic soils are not
                suitable for barley cultivation.
              </p>
              <audio controls>
                <source src={audio2} type="audio/ogg"></source>
              </audio>
            </div>
          </div>

          <div className="card12 mt-5">
            <b>POPULAR VARIETIES WITH THEIR YIELD</b>
            <div className="cardbody">
              <p>
                <b>PL 891:</b> It is a huskless variety. Sattu, Flakes. Dalia,
                flour can be made from this variety. It gives an average yield
                of 16.8qtl/acre. DWRB 123: It is suitable for making beer
                products. It gives an avergae yield of 19.4qtl/acre.
                <br />
                <br />
                <b>PL 419:</b> This variety suitable under rainfed condition. It
                has broad upright leaves. Plant height is 80 cm. Resistant to
                yellow rust and smuts has thin husked bold seeds. Matures in 130
                days. Gives average yield of 14 qtl/acre. <br />
                <br />
                <b>PL 172:</b> Suitable for throughout Punjab state under
                irrigated condition. It is six row semi dwarf variety. Resistant
                to lodging. It is suitable for malting. It matures in 124 days.
                It gives average yield of 14 qtl/acre.
                <br />
                <br />
                <b>PL 807:</b> Medium broad and upright leaves. It is highly
                resistive to lodging. Ears are dense and erect. Grains are of
                medium and light yellow color. It is resistant to brown rust,
                yellow rust and loose rust. Ready to harvest in 137 days. Give
                average yield of 17.2 qtl/acre.
                <br />
                <br />
                <b>DWRUB52:</b> This variety is having profuse tillering. Plant
                height is about 101 cm. Ears are dense, erect, arrow shaped and
                of medium size. It is resistant to brown rust, yellow rust and
                loose rust, covered smut and leaf blight disease. Give average
                yield of 17.3 qtl/acre. <br />
                <br />
                <b>VJM 201:</b>Two variety having narrow and upright leaves.
                Plant height is of 118 cm. this variety prone to less lodging.
                Ears are dense and tapered. Grains are bold and white with thin
                husk. It is resistant to brown rust, yellow rust and loose rust
                and stripe disease. It is suitable for brewing industry. Matures
                in 135 days. It gives average yield of 14.8 qtl/acre.
              </p>
              <audio controls>
                <source src={audio3} type="audio/ogg"></source>
              </audio>
            </div>
          </div>

          <div className="card12 mt-5">
            <b>Land Preparation</b>
            <div className="cardbody">
              <p>
                Carry out ploughing 2-3 times properly to make the land weed
                free. Before sowing crop land must be properly prepared smooth
                till fine tilth. Ploughing should be followed by 2-3 harrowing
                to conserved moisture in soil. The stubbles and roots of earlier
                crop should be hand-picked up and dash out of the ground as it
                attracts termites.
              </p>
              <audio controls>
                <source src={audio4} type="audio/ogg"></source>
              </audio>
            </div>
          </div>

          <div className="card12 mt-5">
            <b>sowing</b>
            <div className="cardbody">
              <p>
                <b>Time Of Sowing: </b>
                For optimum yield, complete sowing from 15 October to 15
                November. If sowing get delayed yield will get declined.
                <br />
                <br />
                <b>Spacing: </b>
                Use row to row spacing of 22.5 cm. In case of delay sowing, use
                spacing of 18-20 cm.
                <br />
                <br />
                <b>Sowing Depth: </b>
                Use depth of 3-5 cm for crop under irrigated conditions and 5-8
                cm depth for rainfed conditions.
                <br />
                <br />
                <b>Method of Sowing: </b>
                For sowing use broadcasting and seed drill method.
                <br />
                <br />
              </p>
              <audio controls>
                <source src={audio5} type="audio/ogg"></source>
              </audio>
            </div>
          </div>

          <div className="card12 mt-5">
            <b>Fertilizer</b>
            <div className="cardbody">
              <br />
              <p>
                <b>Fertilizer Requirement (kg/acre</b>
                <br />
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">UREA</th>
                      <th scope="col">SSP</th>
                      <th scope="col">MURIATE OF POTASH</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>55</td>
                      <td>75</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
                Apply fertilizer dose of N:P:K@25:12:6 kg/acre in term of
                Urea@55 kg/acre, SSP@75 kg/acre and MOP@10 kg/acre.
                <br />
                Apply full dose of phosphorus and potash at time of sowing as a
                basal application whereas give nitrogen dose before giving
                pre-sowing irrigation
              </p>
              <audio controls>
                <source src={audio6} type="audio/ogg"></source>
              </audio>
            </div>
          </div>

          <div className="card12 mt-5">
            <b>WEED CONTROL</b>
            <div className="cardbody">
              <br />
              <p>
                In initial stage of crop, weed control is necessary to obtained
                good crop growth along with good yield. Broad and narrow leaves
                are two major weeds in barley. To control broad leaf weed, apply
                post emergence weedicide 2,4-D@250 gm/100 Ltr of water per acre,
                30-35 days after sowing. <br />
                <br />
                To control narrow leaf weeds use Isoproturon 75%WP@500 gm/100
                Ltr of water or Pendimethalin 30% EC@1.4 Ltr/100 ltr water for
                one acre.
              </p>
              <audio controls>
                <source src={audio7} type="audio/ogg"></source>
              </audio>
            </div>
          </div>

          <div className="card12 mt-5">
            <b>Harvasting</b>
            <div className="cardbody">
              <p>
                Crop matures at end of March or April depending upon variety
                use. To avoid over ripening avoid delay in harvesting. The right
                stage for harvesting is when moisture in grain reaches to
                25-30%. For manual harvesting use serrate edge sickles. Store in
                dry place after harvesting.
              </p>
              <audio controls>
                <source src={audio8} type="audio/ogg"></source>
              </audio>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Barely;
