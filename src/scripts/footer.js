
import context from "../scripts/context.json" with {"type":'json'};



// add footer link name and options 

function company_option( ) {
    let options = document.querySelectorAll(".company_options a");


    let values = context.footer.companyDetail.links;
    
    let h4Value = Object.keys(values);
    let pValue = Object.values(values)


     for (let i = 0; i < options.length; i++) {
         const element = options[i].children;
        
        element[0].innerText = h4Value[i];
        element[1].innerText = pValue[i];
        
        


 }

    
}



function contectDetails( ) {
        let contactElement = document.querySelectorAll(".contact_detail")[0].children;
        let value = context.footer.contactDetail;

        let tittleValue= Object.keys(value)
        

    for (let i = 0; i < contactElement.length; i++) {
        const contact = contactElement[i].children;
        
        let headLink = document.createElement("a");
        headLink.innerText = tittleValue[i];
        contact[0].appendChild(headLink)

        let linkgroup = value[tittleValue[i]] 
        let linkName = Object.keys(linkgroup)


        for (let j = 0; j < linkName.length; j++) {
            const link = linkName[j];


            let li = document.createElement("li")
            let a= document.createElement("a")
            a.href="";


            a.innerText= link
           
            
            li.appendChild(a)
            contact[1].appendChild(li)
            
        }
        
        
        
        
        
    }
        
}

company_option()

contectDetails()