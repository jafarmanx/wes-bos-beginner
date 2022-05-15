const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabCLick(event){
    const id = event.currentTarget.id
    console.log(event.currentTarget)
    console.log(id)
    // hide all tab panles
    tabPanels.forEach(
        tabpanel => 
            { 
                tabpanel.setAttribute('hidden','');
                if (tabpanel.getAttribute('aria-labelledby') == id) {
                    tabpanel.removeAttribute('hidden')
                }
                
            }
        );
    
    


}

tabButtons.forEach(button => button.addEventListener('click',handleTabCLick));
