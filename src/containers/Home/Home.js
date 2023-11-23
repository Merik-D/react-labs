import React from "react";
import "./Home.css";
import Article from "../../components/SongTemplate/SongTemplate";
import Button from "../../components/Button/Button";
import img from "../../Icons/image.png";

const Home = () => {
  return (
    <div className="third_section">
      <div className="container">
        <div className="hero">
          <img src={img} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            efficitur, nibh ut luctus faucibus, est arcu fermentum enim, eu
            convallis lectus ex quis tellus. Aliquam facilisis dictum nulla, eu
            condimentum enim. Pellentesque ut magna elementum, imperdiet velit
            ac, dapibus libero. Nullam pellentesque mauris erat, et pellentesque
            lorem aliquet sed. Nunc rutrum ligula non massa malesuada, non
            consectetur quam finibus. Duis pharetra, risus sed ornare accumsan,
            dolor lectus sollicitudin eros, at egestas nibh nibh quis est. Nam
            consequat lorem ut nunc mattis varius. Proin non faucibus justo.
            Fusce nec lorem cursus lectus rutrum mattis.
          </p>
        </div>
        <div className="articles">
          <Article
            title="123"
            description="to help maximise your health and happiness..."
            img={img}
          />
          <Article
            title="321"
            description="From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit..."
            img={img}
          />
          <Article
            title="231"
            description="It’s remote and challenging to get, but braving the jungle and exploring these ruins without the..."
            img={img}
          />
          <Article
            title="132"
            description="If learning to surf has in on your to-do list for a while, the good news is: it’s never too late..."
            img={img}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button name="View more" />
        </div>
      </div>
    </div>
  );
};

export default Home;
