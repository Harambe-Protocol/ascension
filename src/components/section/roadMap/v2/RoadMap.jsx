import SectionTitle from "../../../../common/sectionTitle";
import dividerShape from "../../../../assets/images/nft/roadmap_v2_middle_shape.png";
import RoadMapItem from "./RoadMapItem";
import roadMapBgShape from "../../../../assets/images/nft/v2_roadmap_bg_shape.png";
import data from "../../../../assets/data/roadMap/roadMapV1";
import RoadMapStyleWrapper from "./RoadMap.style";
const RoadMap = () => {
  return (
    <RoadMapStyleWrapper id="roadmap">
      <div className="container">
        <SectionTitle
          isCenter={true}
          title="Roadmap"
          subtitle="Our Goals"
          className="text-center"
        />
        <div className="v2_roadmap_card_list">
          <div className="v2_roadmap_divider">
            <img src={dividerShape} alt="bith nft road map" />
          </div>
          <div className="row">
            {data?.map((item, i) => (
              <div key={i} className="col-md-6">
                <RoadMapItem id={i} {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="riph_v2_roadmap_mass_gard">
        <img src={roadMapBgShape} alt="riph nft roadmap bg shape" />
      </div>
    </RoadMapStyleWrapper>
  );
};

export default RoadMap;
