import Banner from "../shared/banner";
import NewsLetterImg from "../assets/banner2.png";

function NewsLetter() {
    return (
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
        <Banner
          banner={NewsLetterImg}
          heading="Ready to take your cooking skills to the next level? Sign up for one of our courses today!"
          subHeading={
            "Whether you're a novice looking to explore new cuisines or a seasoned cook wanting to refine your techniques, our classes are tailored to meet your needs. Experience the joy of cooking alongside fellow food lovers, and leave with not just recipes but also memories that will last a lifetime."
          }
          btn1={"Start Learning"}
          btn2={"I wanna order something!"}
        />
      </div>
    );
}
export default NewsLetter;