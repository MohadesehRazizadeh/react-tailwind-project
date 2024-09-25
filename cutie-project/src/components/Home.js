import banner from "../assets/banner.png";
import "../App.css"; 
import Banner from "../shared/banner";
function Home() {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl max-auto mt-32" id="home">
      <Banner
        banner={banner}
        heading="Welcome to Seoul Bites: Where Fast Food Meets Korean Flavors!"
        subHeading="At Seoul Bites, we believe that fast food doesn’t have to compromise on quality or taste. Our unique fusion menu brings the vibrant flavors of Korea right to your fingertips. From our signature bulgogi burgers to spicy kimchi fries, every dish is crafted with fresh ingredients and authentic recipes, ensuring a delicious experience that satisfies your cravings in no time. Whether you're looking for a quick lunch or a late-night snack, Seoul Bites is your go-to destination for mouthwatering meals that are both convenient and flavorful."
        btn1="Start Ordering"
        btn2="Courses"
      />
    </div>
  );
}
export default Home;
