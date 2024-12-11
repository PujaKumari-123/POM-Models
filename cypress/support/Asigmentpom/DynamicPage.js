class contentPage{
    scroll(){
        cy.visit("https://www.flipkart.com/")
    }
    NewContentIsLoaded(){
             cy.scrollTo("bottom",{ensureScrollable: false})
             cy.scrollTo("top",{ensureScrollable: false})
             cy.scrollTo("0,1300",{ensureScrollable: false})
           
        
    }
}  
export default contentPage;