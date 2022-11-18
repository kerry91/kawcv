const Profile = () => {
    return (
      <>
        <div className="profile-card">
          <div className="card-content">
            <div class="card">
              <img
              className="profile-picture"
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
  