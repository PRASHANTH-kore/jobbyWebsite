import './index.css'

const UserProfile = props => {
  const {profileInfo} = props
  return (
    <div className="profile-bg">
      <img
        src={profileInfo.profileImageUrl}
        alt="profile"
        className="profile-pic"
      />
      <h1 className="profile-name">{profileInfo.name}</h1>
      <p className="profile-description">{profileInfo.shortBio}</p>
    </div>
  )
}

export default UserProfile
