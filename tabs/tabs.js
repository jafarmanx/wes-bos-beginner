const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabCLick(event){
    const id = event.currentTarget.id
    // hide all tab panles
    tabButtons.forEach(
        tab => {
            if(tab.id == id ){
                tab.setAttribute('aria-selected', true)
            }
            else {tab.setAttribute('aria-selected', false)}
        }
    );
    tabPanels.forEach(
        tabpanel => 
            { 
                tabpanel.setAttribute('hidden','');
                if (tabpanel.getAttribute('aria-labelledby') == id) {
                    tabpanel.removeAttribute('hidden')
                }
                
            }

            /*
                // other Method  
                const tabpanel = tabs.querySelector(`[araia-labelledby = "${id}"]`);
                console.log(tabpanel);
                tabpanel.hidden = false;
            */
        );  
}

tabButtons.forEach(button => button.addEventListener('click',handleTabCLick));
