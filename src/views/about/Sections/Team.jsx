import React from "react";
import judyImg from "../../../assets/spree/img/coachJudyPic.jpg";
import robertImg from "../../../assets/spree/img/robertPic.jpg";
//import benImg from "../../../assets/img/faces/card-profile1-square.jpg";
import bethImg from "../../../assets/spree/img/beth.jpg";
import mikeImg from "../../../assets/spree/img/mikePic.jpg";

const Team = () => {
  return (
    <div className="about-team team-1">
      <div className="row">
        <div className="col-md-8 ml-auto mr-auto text-center">
          <h2 className="title">A Note From The Coach...</h2>

          <h5 className="description">
            Welcome to the Spree Programs. The Spree Gymnastics, Color Guard and
            Twirling Teams Programs are structured classes uniquely designed to
            enhance each child's self-esteem, physical ability and pride in a
            noncompetitive setting. The children progress at their own pace.
            With over 36 years experience working with children ages 2 through
            13, and 31 years teaching dance, gymnastics and baton twirling in
            private schools (1984-2000 in the NW Houston area, and 2001- present
            in Fort Wayne, Indiana), I look forward to working with your
            children in their safe, enthusiastic and supportive learning
            environment.
            <br />
            <span>"Coach Judy"</span>
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 ml-auto mr-auto text-center">
          <h2 className="title">Meet the staff</h2>
          <h5 className="description">
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card card-profile card-plain">
            <div className="card-avatar">
              <a href="#pablo">
                <img className="img" src={judyImg} alt="Coach Judy" />
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">Coach Judy</h4>
              <h6 className="category text-muted">Owner / Head-Coach</h6>
              <p className="card-description">
                Over 35 years experience teaching dance, gymnastics and baton
                twirling in private schools (1984-2000) in Houston and
                2001-present in Ft. Wayne.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-profile card-plain">
            <div className="card-avatar">
              <a href="#pablo">
                <img
                  className="img"
                  src={robertImg}
                  alt="Robert Blaise Cortise"
                />
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">Robert Blaise Cortise</h4>
              <h6 className="category text-muted">Color Guard Director</h6>
              <p className="card-description">
                Robert was a member of the Color Guard at both Elmhurst High
                School (until the school closed in 2010), and at Northrop High
                School, where he graduated in 2012. Robert is currently one of
                the Creative and Tech Directors for the North Side HS Color
                Guard, and Assistant Director for the Bishop Dwenger HS Color
                Guard.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-profile card-plain">
            <div className="card-avatar">
              <a href="#pablo">
                <img className="img" src={bethImg} alt="Beth Perkins" />
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">Beth Perkins</h4>
              <h6 className="category text-muted">
                Color Guard Assistant Director
              </h6>
              <p className="card-description">
                Vast knowledge of dance, flag drill, rifle work and incredible
                assistance in working with our youngest Guard members. Beth was
                a member of the Homestead HS Color Guard, where she graduated in
                1999.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-profile card-plain">
            <div className="card-avatar">
              <a href="#pablo">
                <img className="img" src={mikeImg} alt="Mike Klopfenstein" />
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">Michael Klopfenstein</h4>
              <h6 className="category text-muted">Media Director</h6>
              <p className="card-description">
                Mike is the Director of all Film and audio edit/production tasks
                related to Spree. He's a 2014 graduate from The University of
                St. Francis with a Bachelor’s degree in Communication. He was a
                member of the Elmhurst HS Marching, Jazz & Pep Bands, and
                University of St. Francis Jazz & Pep Band.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
