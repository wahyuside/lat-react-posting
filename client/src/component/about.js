import React from "react";

const About = () => {
  return (
    <div className="container">
      <h3 className="text-center mb-3">About Us</h3>
      <div class="card mb-3">
        <div class="card-header">Intro</div>

        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://avatars.githubusercontent.com/u/37928500?v=4"
              class="img-fluid rounded-start"
              alt="profile"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">Wahyu Said Nugroho</h4>
              <p class="card-text">
                Hi, I'm Wahyu Said Nugroho, I'm a fresh graduate from a
                bachelor's degree in information systems. I'm currently taking a
                NodeJS fullstack bootcamp at Code X Academy.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a href="https://github.com/wahyuside">Follow me on Github</a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3">
        <div class="card-header">Academics</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>(2017/10 - 2023/02) Gunadarma</p>
            <footer class="blockquote-footer">Information Systems</footer>
            <p>(2014/7 - 2017/6) SMA Negeri 23 Kab. Tangerang</p>
            <footer class="blockquote-footer">Science</footer>
          </blockquote>
        </div>
      </div>
      <div class="card mb-3">
        <div class="card-header">Organization Experience</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>(2017/8 - 2022/12) Karang Taruna RW 012 Medang Lestari</p>
            <footer class="blockquote-footer">Secretary 2</footer>
            <p>(2016/1 - 2017/1) OSIS SMA Negeri 23 Kab. Tangerang</p>
            <footer class="blockquote-footer">Secretary 2</footer>
          </blockquote>
        </div>
      </div>
      <div class="card mb-3">
        <div class="card-header">Working Experience</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              (2019/9 - 2020/3) Part Time Student Academics Center, Gunadarma
            </p>
            <footer class="blockquote-footer">
              Manage students who make KRS (study plan cards)
            </footer>
            <footer class="blockquote-footer">
              Manage the database during the KRS filling period
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
