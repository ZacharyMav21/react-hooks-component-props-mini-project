function About({ image="https://i5.walmartimages.com/seo/Polly-Pocket-Double-Play-Skating-Compact-2-in-1-Playset-with-2-Micro-Dolls-16-Accessories_205d44eb-6dc9-4667-b65e-470552ec082d.1c2fd25ed7fb2f45cc2f3b67dfba3773.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", about }) {
    return (
      <aside>
          <img src={image} />
          <p>{about}</p>
      </aside>
    )
  }
  
  export default About