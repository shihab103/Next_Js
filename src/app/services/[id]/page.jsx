import React from "react";

// Next.js App Router automatically injects { params } into the component props
const ServiceDetailsPage = ({ params }) => {
  const id = params.id;

  const data = [
    {
      _id: "64f1a3b2e9a1c2d3f4b5a001",
      service_name: "Cafe Banner Photoshoot",
      service_image:
        "https://i.ibb.co/Dfc4tkGy/pexels-content-pixie-1405717-2836945-1.jpg",
      service_description:
        "High-quality lifestyle photography for branded cafes or restaurants, including staging, lighting, and professional retouching.",
    },
    {
      _id: "64f1a3b2e9a1c2d3f4b5a002",
      service_name: "Home Cooking Video Thumbnail",
      service_image: "https://i.ibb.co/KjxgScpr/pexels-myfoodie-2616172.jpg",
      service_description:
        "Professional thumbnail and social media images for cooking bloggers and YouTube channels with recipe-focused composition.",
    },
    {
      _id: "64f1a3b2e9a1c2d3f4b5a003",
      service_name: "Professional Portrait Lighting",
      service_image: "https://i.ibb.co/FqBXyYf5/pexels-olly-842548.jpg",
      service_description:
        "Studio headshot and portrait session with advanced lighting, retouching, and color grading for personal branding or LinkedIn profiles.",
    },
    {
      _id: "64f1a3b2e9a1c2d3f4b5a004",
      service_name: "Nature Inspired Brand Shoot",
      service_image: "https://i.ibb.co/35FTygfr/pexels-pixabay-266755-1.jpg",
      service_description:
        "Outdoor and nature-themed product or lifestyle photography, including location scouting, model direction, and post-production.",
    },
    {
      _id: "64f1a3b2e9a1c2d3f4b5a005",
      service_name: "Event Coverage Photography",
      service_image: "https://i.ibb.co/vvdM56hM/pexels-sarah-33270-122370.jpg",
      service_description:
        "Live coverage of small to medium events such as workshops or gatherings, capturing key moments, group portraits, and candid shots.",
    },
    {
      _id: "64f1a3b2e9a1c2d3f4b5a006",
      service_name: "Food Styling and Photography",
      service_image:
        "https://i.ibb.co/27ZTw4KD/pexels-thought-catalog-317580-904616-1.jpg",
      service_description:
        "Complete food styling and photography service for restaurants and catering businesses, optimized for social media and marketing.",
    },
    {
      _id: "64f1a3b2e9a1c2d3f4b5a007",
      service_name: "Fashion Lookbook Mini Shoot",
      service_image: "https://i.ibb.co/qYjR1JrQ/pexels-myfoodie-2638019-2.jpg",
      service_description:
        "Compact photoshoot for fashion brands to showcase seasonal collections with stylist support and accessory-focused images.",
    },
    {
      _id: "64f1a3b2e9a1c2d3f4b5a008",
      service_name: "Educational Content Graphics",
      service_image: "https://i.ibb.co/v6g1kdrn/pexels-ifreestock-585753.jpg",
      service_description:
        "Infographic-style visuals and illustrations for online courses, blogs, or educational marketing materials.",
    },
  ];

  const singleData = data.find((d) => d._id === id);

  if (!singleData) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <p>No service found with ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{singleData.service_name}</h1>
      <img
        src={singleData.service_image}
        alt={singleData.service_name}
        className="w-full h-72 object-cover rounded-lg shadow"
      />
      <p className="mt-4 text-gray-700">{singleData.service_description}</p>
      <p className="mt-6 text-sm text-gray-500">Service ID: {id}</p>
    </div>
  );
};

export default ServiceDetailsPage;
