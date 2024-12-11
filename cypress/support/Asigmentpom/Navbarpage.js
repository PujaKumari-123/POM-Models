class NAVBAR {
    
     EnterUrl(){

        cy.visit("https://www.flipkart.com/")
     }

     Home(){

        cy.xpath('(//*[@title="Flipkart"])[3]').click()
     }

     AboutUs(){
         cy.wait(800)
         cy.get("._30XB9F").click()
        cy.get('[aria-label="About Us"]').click()
     }

     ContactUs(){
        cy.wait(1000)
        cy.visit("https://www.flipkart.com/")
        cy.wait(1000)
        cy.get('[aria-label="Contact Us"]').click()
     }
  }
  
  export default new NAVBAR();
  