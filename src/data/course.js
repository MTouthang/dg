import artForKid from "../assets/artForKids4.jpg";
import basicRealism from "../assets/basicRealism.jpeg";
import advRealism from "../assets/advRealism2.jpg";

const courseData = () => {
  return [
    {
      id: 1,
      title: "Art Course for Kids",
      description:
        "Kids between 5-9 years of age can join this course on coloring, object drawings, landscape paintings, doodling, etc. using different colour mediums and graphite pencils.",
      enrollmentFee: "1000(valid for 1 year)",
      monthlyFee: 1000,
      pic: artForKid,
      link: "https://docs.google.com/forms/d/e/1FAIpQLScFSMQzxry03CRlcZ7Sw1gDHlhq4pRvsl8VTF_pQ6HCMKzP-A/viewform",
    },
    {
      id: 2,
      title: "Basic Course on Realism",
      description:
        "Course for any above 10yrs of age and beginners who are new to pencil drawings. Here we will be teaching the basics of pencil realism, structures and proportions. The mediums includes Pastel colours, Graphite-Charcoal, crayons, etc. We will focus mainly on object study.",
      enrollmentFee: "1000(valid for 1 year)",
      monthlyFee: 2000,
      pic: basicRealism,
      link: "https://docs.google.com/forms/d/e/1FAIpQLScFSMQzxry03CRlcZ7Sw1gDHlhq4pRvsl8VTF_pQ6HCMKzP-A/viewform",
    },
    {
      id: 3,
      title: "Advanced Course on Realism",
      description:
        "Course only suitable for any above 13yrs of age with basic pencil drawing knowledge. The focus of this course is photorealism, which is one form of realism. The objective of photorealism is to study a photo and attempt to recreate the photo as realistic as possible. ",
      enrollmentFee: "1000(valid for 1 year)",
      monthlyFee: 3000,
      pic: advRealism,
      link: "https://docs.google.com/forms/d/e/1FAIpQLScFSMQzxry03CRlcZ7Sw1gDHlhq4pRvsl8VTF_pQ6HCMKzP-A/viewform",
    },
  ];
};

export default courseData;
