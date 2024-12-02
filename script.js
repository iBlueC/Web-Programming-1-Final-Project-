document.addEventListener('DOMContentLoaded', function() {
  
  const introSection = document.getElementById('intro-section');
  const aboutSection = document.getElementById('about-section');
  const skillsSection = document.getElementById('skills-section');
  const projectSection = document.getElementById('project-section');
  const contactSection = document.getElementById('contact-section');

  introSection.style.display = 'flex';
  introSection.innerHTML = `
      <header class="header">

          <a href="#intro-section" class="logo"><span>Car</span>los</a>
          
          <nav class="navbar">
              <a href="#intro-section" class="active">Home</a>
              <a href="#about-section">About</a>
              <a href="#skills-section">Skills</a>
              <a href="#project-section">Projects</a>
          </nav>

          <a href="#contact-section" class="contact">Contact Me</a>

      </header>

      <div class="home">

          <div class="introduction-text">
              <h4>Hi!</h4>
              <h3>I'm <span>John Carlos L. Laririt</span></h3>
              <p>An aspirant to be a game developer, game designer, and game writer</p>
              
              <div class="about-btnbox">
                  <button class="showAboutBtn" id="showAbout">About Me</button>
              
              </div>
          </div>

          <div class="img-box">
              <img src="images/carlos.jpg" alt="">
          </div>

      </div>
  `;

  const scrollToSection = (section) => {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -100); 
  };

  

      const aboutButton = document.getElementById('showAbout');
      aboutButton.addEventListener('click', () => {
          aboutButton.textContent = "Know Me";
          aboutSection.style.display = 'flex';
          aboutSection.innerHTML = `
              <div class="about">

                  <div class="map-container">
                      <iframe class="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.5048954800986!2d121.83264703421403!3d13.442944620654272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a32641a16c601b%3A0xa432e39fa7097a95!2sIsok%20II%20Pob.%20(Kalamias)%2C%20Boac%2C%20Marinduque!5e0!3m2!1sen!2sph!4v1733034356103!5m2!1sen!2sph" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>

                  <div class="about-content">
                      <h2>About <span>Me</span></h2>
                      <p>I’m an aspiring game developer from Boac, Marinduque,
                    eager to delve into the world of digital entertainment.
                    While I’m still a novice, I’m focused on learning
                    the fundamentals of game design and development. I’m focused
                    on building a solid foundation in both the creative and technical
                    aspects of game creation, including story development, coding, and
                    user experience. With a growing interest in creating interactive and
                    engaging gameplay experiences, I aim to hone my skills and ultimately
                    create a decent game at the very least.</p>
                      <button class="showSkillsBtn" id="showSkills">Skills</button>
                  </div>

              </div>
          `;
          scrollToSection(aboutSection);

          const skillsButton = document.getElementById('showSkills');
          skillsButton.addEventListener('click', () => {
              if (!skillsSection.classList.contains('loaded')) {
                  skillsSection.innerHTML = `
                      <div class="skills">

                          <div class="my-skills">
                              <h1>MY <span>SKILLS</span></h1>
                          </div>

                          <div class="skills-section">
                              <div class="skill-card">
                                  <div class="developed-skills">
                                      <img src="images/c-sharp.png">
                                      <div class="skills-content">
                                          <h2>C#</h2>
                                          <p>I’m comfortable with the basics of C#, including variables, loops,
                                          conditionals, and object-oriented concepts like classes and methods.
                                          I’m still learning more advanced topics and enjoy improving my skills.</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="skill-card">
                                  <div class="developed-skills">
                                      <img src="images/html.png">
                                      <div class="skills-content">
                                          <h2>HTML</h2>
                                          <p>I’ve worked with html first in high school, learning the basics of
                                          structure, elements, and layout.I’ve created simple webpages, working
                                          with headings, paragraphs, links, and forms. I’m a little familiar with styling
                                          using CSS  .</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="skill-card">
                                  <div class="developed-skills">
                                      <img src="images/unity.png">
                                      <div class="skills-content">
                                          <h2>Unity</h2>
                                          <p>I’m a novice with Unity, having worked with it for a bit.
                                          I’m familiar with the basic interface, creating simple 2D scenes,
                                          and using C# for basic scripts and player controls.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div>
                              <button class="showProjectsBtn" id="showProjects">Projects</button>
                          </div>

                      </div>
                  `;
                  skillsSection.classList.add('loaded');
              }
              scrollToSection(skillsSection);

              const projectButton = document.getElementById('showProjects');
              projectButton.addEventListener('click', () => {
                  projectSection.innerHTML = `
                      <div class="myproject-section">
                          <div class="my-projects">
                              <h1>MY <span>PROJECTS</span></h1>
                          </div>
                          <div class="myprojects">
                              <div class="project-card">
                                  <img src="images/roblox-obby-fiasco.png" alt="">
                                  <div class="project-description">
                                      <h1>Obby Fiasco!</h1>
                                      <p>I helped worked on this as a designer and tester during my evleventh grade. It was a fresh experience for me regardless if it was said to be a kids game.</p>
                                  </div>
                              </div>
                              <div class="project-card">
                                  <img src="images/petpal.png" alt="">
                                  <div class="project-description">
                                      <h1>PetPal</h1>
                                      <p>A supposedly online counter for medicational purposes of animals (dogs and cats) where it has medical prescription for some certain diseases.</p>
                                  </div>
                              </div>
                              <div class="project-card">
                                  <img src="images/worldshardest.jpg" alt="">
                                  <div class="project-description">
                                      <h1>The World's Hardest Game</h1>
                                      <p>A game development project which solidified my awareness on contacts and events while running the process.</p>
                                  </div>
                              </div>
                              <div class="project-card">
                                  <img src="images/standard.png" alt="">
                                  <div class="project-description">
                                      <h1>Standard Hotel</h1>
                                      <p>It is hotel webpage that which is a project we did where it was also my first time using php and learning only the simplest form of it.</p>
                                  </div>
                              </div>
                          </div>
                          <div>
                              <button class="showContactBtn" id="showContact">Contact Me</button>
                          </div>
                      </div>
                  `;
                  scrollToSection(projectSection);

                  const contactButton = document.getElementById('showContact');
                  contactButton.addEventListener('click', () => {
                    contactSection.innerHTML = `
                      <div class="contact-form">

                        <h2 class="contact-me">Contact <span>Me</span></h2>
                        
                        <form action="#" id="contactForm">

                            <div class = "input-box">
                                <input type="text" placeholder="Full Name" required>
                                <input type="email" placeholder="Email" required>
                                <input type="tel" id="phone" placeholder="Phone Number (+63)123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required>
                            </div>
                
                            <textarea name="" id="" cols="30" rows="8" placeholder="Leave a Message"></textarea>
                            <button class="submitBTN" type="submit" value="Send Message">Submit</button>
                          
                        
                        </form>    
                      </div>
                      
                      <footer class="footer">
                          <div class="socials">
                              <a href="https://www.facebook.com/jc13233/"><i class='bx bxl-facebook-square'></i></a>
                              <a href="https://www.instagram.com/_hellocar/"><i class='bx bxl-instagram'></i></a>
                              
                          </div>
                          <ul class="list">
                              <li>
                                  <a href="#about-section">About Me</a>
                              </li>
                              <li>
                                  <a href="#skills-section">Skills</a>
                              </li>
                              <li>
                                  <a href="#project-section">Projects</a>
                              </li>
                          </ul>

                          <p class="copyright">&copy; 2024 John Carlos Laririt | All Rights Reserved</p>
                      </footer>
                    `;
                    scrollToSection(contactSection);
                    document.getElementById("contactForm").addEventListener("submit", function(event) {
                      event.preventDefault();
                      
                      const inputs = document.querySelectorAll("#contactForm input, #contactForm textarea");
                      inputs.forEach(input => input.value = "");
                  });
                  })
              });
          });
      });
  });

