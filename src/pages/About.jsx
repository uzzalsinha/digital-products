

const About = () => {
    return (
        <div style={styles.container}>
          <header style={styles.header}>
            <h1 className="text-4xl text-teal-700">About Us</h1>
          </header>
    
          <section style={styles.section}>
            <h2 className="text-2xl">Our Story</h2>
            <p>
              Founded in 2012, Digital World has been at the forefront of the digital products revolution. Starting as a small startup with a big vision, we have grown into a leading e-commerce platform specializing in innovative digital solutions.
            </p>
          </section>
    
          <section style={styles.section}>
            <h2 className="text-2xl">Our Mission</h2>
            <p>
              Our mission is to empower individuals and businesses with cutting-edge digital products that enhance productivity, creativity, and connectivity. We are dedicated to providing top-quality digital tools and exceptional customer service.
            </p>
          </section>
    
          <section style={styles.section}>
            <h2 className="text-2xl">Our Vision</h2>
            <p>
              We envision a world where digital solutions drive progress and innovation. Our goal is to be the go-to platform for the latest and most reliable digital products, continually setting new standards in the industry.
            </p>
          </section>
    
          <section style={styles.section}>
            <h2 className="text-2xl">Technology & Innovation</h2>
            <p>
              At [Company Name], we leverage the latest technologies to deliver state-of-the-art digital products. Our dedicated team of developers and designers is constantly exploring new ways to innovate and improve our offerings.
            </p>
          </section>
    
          <section style={styles.section}>
            <h2 className="text-2xl">Meet the Team</h2>
            <div style={styles.team}>
              <div style={styles.teamMember}>
                <img src="/path/to/image.jpg" alt="Team Member" style={styles.teamImage} />
                <h3>Uzzal</h3>
                <p>Founder & CEO</p>
              </div>
              <div style={styles.teamMember}>
                <img src="/path/to/image.jpg" alt="Team Member" style={styles.teamImage} />
                <h3>Joy</h3>
                <p>Chief Technology Officer</p>
              </div>
              <div style={styles.teamMember}>
                <img src="/path/to/image.jpg" alt="Team Member" style={styles.teamImage} />
                <h3>Arif</h3>
                <p>Head of Design</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </section>
        </div>
      );
    };
    
    const styles = {
      container: {
        fontFamily: 'Arial, sans-serif',
        margin: '0 auto',
        padding: '20px',
        maxWidth: '800px',
      },
      header: {
        textAlign: 'center',
        marginBottom: '40px',
      },
      section: {
        marginBottom: '40px',
      },
      team: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      },
      teamMember: {
        textAlign: 'center',
        marginBottom: '20px',
      },
      teamImage: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
      },
    };
    


export default About;