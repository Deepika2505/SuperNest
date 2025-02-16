import React from 'react';
import './../styles/AvailableIn.css';

const locations = [
  { imageUrl: 'https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__', location: 'Hyderabad', nests: 236 },
  { imageUrl: 'https://s3-alpha-sig.figma.com/img/95b2/7d15/6b738d8ca4a7c9cec791143572d92a20?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jlGlnorxc0uQAqiaU58YxBHt3xOod0Rq8AtGpESnHxpnqB2GS1HhqeUPitBFBevt78OvjTjvdUiSZFqwOWrf9d4j~gftR5UzzvoKOThNfBqdgq1GrzqhydERwpH52IZMw79~xBzFkwDwLEG~EjrocWlAgp6udCjHnuQ3Ka9fe1iWg2ONgTDGyFuO17ALhZtVylG0yOmegDZPwzH1HVuh3dIvfi-BZOr9aFsoUsA0gAfvUEnTqGrDnhKfzNDx44MgOCbGv7PSRUhRGGS5AN5sVgRP8ho19h4os3ELYt6wvSKYMj9o9~~o65RD3s83BGL9ooNHW2dH7yJKKouJPklFWg__', location: 'Bangalore', nests: 236 },
  { imageUrl: 'https://s3-alpha-sig.figma.com/img/33d0/5b11/3a3aa888a78e7e54af807aba4c95d73a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UdiMeu5nAgOcEDs4SVYQja-OzLpcjuu7bm8o~QD5uTXWc6HnGfz1pVYQk1s9NJMc8GKTW9K0pjyGoNoYD-UG4Y7x5L2NT3SKDlEvWM8QQihw9o7oRHZqBKfRFGPJUlw8L0gG6gWAMLU9j8l2v4i9iqPEH~DF6AwG~insj0~mljDy7za4RvQ3TpyqoyLwX4mcvJAwSZMtVlVMqthmjEx45jiXoNejarK~tkNwJqpn9~jRipXyJP4Gzv6cmW1TOJPrsR9uqEUlZOcwVBHcdhT0m-yHfPO79b-fus330TvBkyA1GSdFW5k4uVZJwvMOK4k-z4Ydp2g1KKDsecT4IsqHag__', location: 'Vijayawada', nests: 236 },
  { imageUrl: 'https://s3-alpha-sig.figma.com/img/28d2/dde9/bcaad5d3556bbc283b3793981216e80b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rh0Ji6oHultV8BTp5N6iBERaEfiwB9ElmeOCSMIQgRXKW~tCjC~zwWt8kTqUnaelHvhBVe5WW0uWy5ZLnHXGKksXuT4sM8pUU-Gnqy58dryUA4NwYvvo-LohZ-EsgT5xvABx~GiFiZ3~f5RVLBtdzM5Mk7JntL3EH6LP3JZvCeI23~zoug56e7FXg7O6A7MNXOk886tfqc5WC3r~Ab0XgzlDR9PEu4aknEQvkgXfXQQBN1eGq9jG0VP2mADT5S-RWmeC9Oep-rxIAopj8~w6FpoAdEqdSdrSKmkNIeYyz7JTKNk9qCp7hWW9ILOm~ALavR4alSiY6fji0XS8Xo3x5A__', location: 'Guwahati', nests: 236 },
  { imageUrl: 'https://s3-alpha-sig.figma.com/img/e3f9/c408/09700e848a233fcd9645c513db0354ae?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ePXCjGrLMCtBH-2qPOtPOUapaMqPVTkJEKKD1XrHL7SBPmTgrQ4Goz0ZojJ29wypmaMnVZFe-W0YFgFBPtDtmoEBczhfjxmqq7~zazazvP6peqHKZ5UOy5pRr4gB-OUz5wnFPEAiAqWLHh1V14XFZcDg8~xUWpnKaZ8gJyfoHOoQJ~98rpRwz4spXIjSQXKjUOmCCyak6qA1sMUPxhUKbqVFYiuQqpzzbXUfhIQRDyZiym7~uM~7jN1dCSzGVNhNfPUP7SBhsX7fexbsntqsvsDgsGDl~YJx3duKW5Hgpn-9USyJrMBqLxBii0sE9dRCp6C47MBPI0aOKM3zHV5A2g__', location: 'Ahmedabad', nests: 236 },
];

const AvailableIn = () => {
  return (
    <div className="available-in-container">
      <h2 className="available-in-title">Available In...</h2>
      <div className="image-row">
        {locations.slice(0, 2).map((loc, index) => (
          <div key={index} className="image-box">
            <img src={loc.imageUrl} alt={loc.location} className="location-image" />
            <div className="image-overlay">
              <div className="location">{loc.location}</div>
              <div className="nests">{loc.nests} nests</div>
            </div>
          </div>
        ))}
      </div>
      <div className="image-row">
        {locations.slice(2).map((loc, index) => (
          <div key={index} className="image-box">
            <img src={loc.imageUrl} alt={loc.location} className="location-image" />
            <div className="image-overlay">
              <div className="location">{loc.location}</div>
              <div className="nests">{loc.nests} Nests</div>
            </div>
          </div>
        ))}
      </div>
      <div className='request-section'>
        <p>
            Don't see your city here?{' '}
            <a href='#request' className='request-link'>Send us a request</a> to accelerate our launch.
        </p>
      </div>
    </div>
  );
};

export default AvailableIn;
