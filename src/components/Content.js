import React from 'react';
import './../styles/Content.css';

const Content = () => {
    const scrollingFeatures = [
        'Guaranteed rewards',
        'Community',
        'Job listings',
        'Discover events',
        'In-app complaints',
        '100% secure',
        'Online payments'
      ];
      
      const cities = [
          {name: 'Hyderabad',imageUrl: 'https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__'},
          {name: 'Bangalore', imageUrl: 'https://s3-alpha-sig.figma.com/img/95b2/7d15/6b738d8ca4a7c9cec791143572d92a20?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jlGlnorxc0uQAqiaU58YxBHt3xOod0Rq8AtGpESnHxpnqB2GS1HhqeUPitBFBevt78OvjTjvdUiSZFqwOWrf9d4j~gftR5UzzvoKOThNfBqdgq1GrzqhydERwpH52IZMw79~xBzFkwDwLEG~EjrocWlAgp6udCjHnuQ3Ka9fe1iWg2ONgTDGyFuO17ALhZtVylG0yOmegDZPwzH1HVuh3dIvfi-BZOr9aFsoUsA0gAfvUEnTqGrDnhKfzNDx44MgOCbGv7PSRUhRGGS5AN5sVgRP8ho19h4os3ELYt6wvSKYMj9o9~~o65RD3s83BGL9ooNHW2dH7yJKKouJPklFWg__'},
          {name: 'Vijayawada',imageUrl:'https://s3-alpha-sig.figma.com/img/33d0/5b11/3a3aa888a78e7e54af807aba4c95d73a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e0Hf37CQg1Ux7V8-WA3h6s9R1tcOuTRkGcBKRvNjOtvVuCj6KmNf5i~pVYmYr0RRxE5Pb3sv8GN5amGeXDbGsjIpuXFFJvriPilbScZqjnpKS~rXe0KiOPwWrs3GG26z-hFmF7fNPLFyvkRJGw8Tb9nFi-iELjGTfs3Tq5e8V4R9OU3L3NaBku2xFnEyWNa6baM7LbhAeoA-IxVA3hXXcoC8KLNQRYFO3jBfA3e0gDS-5vnzYSVuZiHCako1d-YWOdgEFVivM05nnJAQX8~GM0qDuMajkXMW7Xwrmnlcqm7Z~JFcXf-upQRoiVeqXm6rHBHQ4j9reVuxS1OBEHOUvg__'},
          {name: 'Guwahati',imageUrl:'https://s3-alpha-sig.figma.com/img/28d2/dde9/bcaad5d3556bbc283b3793981216e80b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rh0Ji6oHultV8BTp5N6iBERaEfiwB9ElmeOCSMIQgRXKW~tCjC~zwWt8kTqUnaelHvhBVe5WW0uWy5ZLnHXGKksXuT4sM8pUU-Gnqy58dryUA4NwYvvo-LohZ-EsgT5xvABx~GiFiZ3~f5RVLBtdzM5Mk7JntL3EH6LP3JZvCeI23~zoug56e7FXg7O6A7MNXOk886tfqc5WC3r~Ab0XgzlDR9PEu4aknEQvkgXfXQQBN1eGq9jG0VP2mADT5S-RWmeC9Oep-rxIAopj8~w6FpoAdEqdSdrSKmkNIeYyz7JTKNk9qCp7hWW9ILOm~ALavR4alSiY6fji0XS8Xo3x5A__'},
          {name: 'Ahmedabad',imageUrl:'https://s3-alpha-sig.figma.com/img/28d2/dde9/bcaad5d3556bbc283b3793981216e80b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rh0Ji6oHultV8BTp5N6iBERaEfiwB9ElmeOCSMIQgRXKW~tCjC~zwWt8kTqUnaelHvhBVe5WW0uWy5ZLnHXGKksXuT4sM8pUU-Gnqy58dryUA4NwYvvo-LohZ-EsgT5xvABx~GiFiZ3~f5RVLBtdzM5Mk7JntL3EH6LP3JZvCeI23~zoug56e7FXg7O6A7MNXOk886tfqc5WC3r~Ab0XgzlDR9PEu4aknEQvkgXfXQQBN1eGq9jG0VP2mADT5S-RWmeC9Oep-rxIAopj8~w6FpoAdEqdSdrSKmkNIeYyz7JTKNk9qCp7hWW9ILOm~ALavR4alSiY6fji0XS8Xo3x5A__'}
      ];
  return (
    <div className='content'>
      

    <div className='scroll'>
    <div className="city-scrolling-container">
      <div className="city-scrolling-line">
        {cities.map((city, index) => (
          <div key={index} className="city-name-container">
            <img src={city.imageUrl} alt={city.name} className="city-image" />
            <div className="city-name">{city.name}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="scrolling-line-container">
      <div className="scrolling-line">
        {scrollingFeatures.map((feature, index) => (
          <div key={index} className="scrolling-line-item">
            {feature}
          </div>
        ))}
      </div>
    </div>
    </div>
    <div className="feature-container">
        <div className="feature-box">
          <div className="feature-number">Upto</div>
          <div className='feature-header'>
            <div className="feature-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#0D64F3" fill-opacity="0.12"/>
<mask id="mask0_1975_11400" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
<rect x="12" y="12" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1975_11400)">
<path d="M24 34C22.6333 34 21.3417 33.7375 20.125 33.2125C18.9083 32.6875 17.8458 31.9708 16.9375 31.0625C16.0292 30.1542 15.3125 29.0917 14.7875 27.875C14.2625 26.6583 14 25.3667 14 24C14 22.6167 14.2625 21.3208 14.7875 20.1125C15.3125 18.9042 16.0292 17.8458 16.9375 16.9375C17.8458 16.0292 18.9083 15.3125 20.125 14.7875C21.3417 14.2625 22.6333 14 24 14C25.3833 14 26.6792 14.2625 27.8875 14.7875C29.0958 15.3125 30.1542 16.0292 31.0625 16.9375C31.9708 17.8458 32.6875 18.9042 33.2125 20.1125C33.7375 21.3208 34 22.6167 34 24C34 25.3667 33.7375 26.6583 33.2125 27.875C32.6875 29.0917 31.9708 30.1542 31.0625 31.0625C30.1542 31.9708 29.0958 32.6875 27.8875 33.2125C26.6792 33.7375 25.3833 34 24 34ZM24 28C25 28 25.975 28.1458 26.925 28.4375C27.875 28.7292 28.7667 29.15 29.6 29.7C30.3667 28.9333 30.9583 28.0625 31.375 27.0875C31.7917 26.1125 32 25.0833 32 24C32 21.7667 31.225 19.875 29.675 18.325C28.125 16.775 26.2333 16 24 16C21.7667 16 19.875 16.775 18.325 18.325C16.775 19.875 16 21.7667 16 24C16 25.0833 16.2042 26.1167 16.6125 27.1C17.0208 28.0833 17.6167 28.95 18.4 29.7C19.2333 29.15 20.125 28.7292 21.075 28.4375C22.025 28.1458 23 28 24 28ZM24 30C23.3167 30 22.65 30.0833 22 30.25C21.35 30.4167 20.7333 30.6667 20.15 31C20.7333 31.3333 21.35 31.5833 22 31.75C22.65 31.9167 23.3167 32 24 32C24.6833 32 25.35 31.9167 26 31.75C26.65 31.5833 27.2667 31.3333 27.85 31C27.2667 30.6667 26.65 30.4167 26 30.25C25.35 30.0833 24.6833 30 24 30ZM19 23C19.2833 23 19.5208 22.9042 19.7125 22.7125C19.9042 22.5208 20 22.2833 20 22C20 21.7167 19.9042 21.4792 19.7125 21.2875C19.5208 21.0958 19.2833 21 19 21C18.7167 21 18.4792 21.0958 18.2875 21.2875C18.0958 21.4792 18 21.7167 18 22C18 22.2833 18.0958 22.5208 18.2875 22.7125C18.4792 22.9042 18.7167 23 19 23ZM22 20C22.2833 20 22.5208 19.9042 22.7125 19.7125C22.9042 19.5208 23 19.2833 23 19C23 18.7167 22.9042 18.4792 22.7125 18.2875C22.5208 18.0958 22.2833 18 22 18C21.7167 18 21.4792 18.0958 21.2875 18.2875C21.0958 18.4792 21 18.7167 21 19C21 19.2833 21.0958 19.5208 21.2875 19.7125C21.4792 19.9042 21.7167 20 22 20ZM29 23C29.2833 23 29.5208 22.9042 29.7125 22.7125C29.9042 22.5208 30 22.2833 30 22C30 21.7167 29.9042 21.4792 29.7125 21.2875C29.5208 21.0958 29.2833 21 29 21C28.7167 21 28.4792 21.0958 28.2875 21.2875C28.0958 21.4792 28 21.7167 28 22C28 22.2833 28.0958 22.5208 28.2875 22.7125C28.4792 22.9042 28.7167 23 29 23ZM24 26C24.55 26 25.0208 25.8042 25.4125 25.4125C25.8042 25.0208 26 24.55 26 24C26 23.7833 25.9667 23.5708 25.9 23.3625C25.8333 23.1542 25.7333 22.9667 25.6 22.8L26.95 19.4C27.0667 19.1333 27.0708 18.8708 26.9625 18.6125C26.8542 18.3542 26.6667 18.1667 26.4 18.05C26.15 17.9333 25.8958 17.9292 25.6375 18.0375C25.3792 18.1458 25.2 18.3333 25.1 18.6L23.75 22C23.25 22.0833 22.8333 22.3125 22.5 22.6875C22.1667 23.0625 22 23.5 22 24C22 24.55 22.1958 25.0208 22.5875 25.4125C22.9792 25.8042 23.45 26 24 26Z" fill="#0D64F3"/>
</g>
            </svg>

            </div> {/* Use an icon or replace it with your SVG */}
            <div className="feature-title">20x</div>
          </div>
          <div className="feature-text">quicker than finding properties manually</div>
        </div>
        <div className="feature-box">
          <div className="feature-number">Upto</div>
          <div className='feature-header'>
            <div className="feature-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#0D64F3" fill-opacity="0.12"/>
<mask id="mask0_1975_11408" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
<rect x="12" y="12" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1975_11408)">
<path d="M24 29.5C25.1333 29.5 26.1625 29.1792 27.0875 28.5375C28.0125 27.8958 28.6833 27.05 29.1 26H18.9C19.3167 27.05 19.9875 27.8958 20.9125 28.5375C21.8375 29.1792 22.8667 29.5 24 29.5ZM19.8 23L20.9 21.95L21.95 23L23 21.95L20.9 19.8L18.75 21.95L19.8 23ZM26.05 23L27.1 21.95L28.2 23L29.25 21.95L27.1 19.8L25 21.95L26.05 23ZM24 34C22.6167 34 21.3167 33.7375 20.1 33.2125C18.8833 32.6875 17.825 31.975 16.925 31.075C16.025 30.175 15.3125 29.1167 14.7875 27.9C14.2625 26.6833 14 25.3833 14 24C14 22.6167 14.2625 21.3167 14.7875 20.1C15.3125 18.8833 16.025 17.825 16.925 16.925C17.825 16.025 18.8833 15.3125 20.1 14.7875C21.3167 14.2625 22.6167 14 24 14C25.3833 14 26.6833 14.2625 27.9 14.7875C29.1167 15.3125 30.175 16.025 31.075 16.925C31.975 17.825 32.6875 18.8833 33.2125 20.1C33.7375 21.3167 34 22.6167 34 24C34 25.3833 33.7375 26.6833 33.2125 27.9C32.6875 29.1167 31.975 30.175 31.075 31.075C30.175 31.975 29.1167 32.6875 27.9 33.2125C26.6833 33.7375 25.3833 34 24 34ZM24 32C26.2333 32 28.125 31.225 29.675 29.675C31.225 28.125 32 26.2333 32 24C32 21.7667 31.225 19.875 29.675 18.325C28.125 16.775 26.2333 16 24 16C21.7667 16 19.875 16.775 18.325 18.325C16.775 19.875 16 21.7667 16 24C16 26.2333 16.775 28.125 18.325 29.675C19.875 31.225 21.7667 32 24 32Z" fill="#0D64F3"/>
</g>
            </svg>

            </div> {/* Use an icon or replace it with your SVG */}
            <div className="feature-title">25%</div>
          </div>
          <div className="feature-text">higher satisfaction rate than joining offline</div>
        </div>
        <div className="feature-box">
          <div className="feature-number">Upto</div>
          <div className='feature-header'>
            <div className="feature-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#0D64F3" fill-opacity="0.12"/>
<mask id="mask0_1975_11416" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
<rect x="12" y="12" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1975_11416)">
<path d="M21.075 28.25L24 26.475L26.925 28.25L26.15 24.925L28.75 22.675L25.325 22.4L24 19.25L22.675 22.4L19.25 22.675L21.85 24.925L21.075 28.25ZM24 35.3L20.65 32H16V27.35L12.7 24L16 20.65V16H20.65L24 12.7L27.35 16H32V20.65L35.3 24L32 27.35V32H27.35L24 35.3ZM24 32.5L26.5 30H30V26.5L32.5 24L30 21.5V18H26.5L24 15.5L21.5 18H18V21.5L15.5 24L18 26.5V30H21.5L24 32.5Z" fill="#0D64F3"/>
</g>
            </svg>

            </div> {/* Use an icon or replace it with your SVG */}
            <div className="feature-title">4x</div>
          </div>
          <div className="feature-text">Increased efficiency</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
