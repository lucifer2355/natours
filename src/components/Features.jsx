import React from "react";
import FeatureBox from "./FeatureBox";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <section className='section-feature'>
      <div className='row'>
        <FeatureBox
          icon={faGlobe}
          title='Explore the world'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur.'
        />
        <FeatureBox
          icon={faCompass}
          title='Meet natoure'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur.'
        />
        <FeatureBox
          icon={faMap}
          title='Find your way'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur.'
        />
        <FeatureBox
          icon={faHeart}
          title='live a healthier life'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur.'
        />
      </div>
    </section>
  );
}

export default Features;
