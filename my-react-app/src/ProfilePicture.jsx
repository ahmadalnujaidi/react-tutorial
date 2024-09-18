function ProfilePicture() {
  const imageUrl = "./src/assets/gig2.png";

  const handleClick = (e) => {
    console.log("OUCH");
    e.target.style.display = "none";
  };

  return <img onClick={(e) => handleClick(e)} src={imageUrl}></img>;
}
export default ProfilePicture;
