import me from '../images/me.jpg'

const Profile = () => {
    return (
      <>
        <div className="profile-card">
          <div className="card-content">
            <div class="card">
              <img
              className="profile-picture"
                src={me}
                alt="Profile"
              />
              <h3>Kerry A Warnes</h3>
              <p class="profile-title">Frontend Developer in Training</p>
              <p></p>
              <p>
                <div className="card-bottom">
                  <a
                    href="https://github.com/kerry91"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Profile;
  