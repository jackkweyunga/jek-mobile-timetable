
const topnav = document.getElementById("tmb-topnav");

topnav.style = `
            width: 100%;
            background: #081126;
            height: auto;
            position: sticky;
            display: flex;
            width: 100%; `;

// bottom
export const topNavBottom = () => {
    const topnav_bottom = document.createElement('nav');

    topnav_bottom.style = ``

    return topnav_bottom;

}


// top nav top
export const topNavTop = () => {
    const topnav_top = document.createElement('nav');

    topnav_top.style = `
        padding: 5px;
        display: flex;
        background: inherit;
        min-height: 5px; 
        align-items: center;
        width: 100%;
    `;

    const title = document.createElement('div');
    title.style = `
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    `

    const search_bar = document.createElement('div');
    search_bar.style = `
        background: inherit;
        color: #FFFFFF;
        padding: 0px;
        overflow: hidden;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    `
    const search_input = document.createElement('input');
    search_input.id = "faculty_search_input";
    search_input.style = `
        border: 0;
        border-radius: 10px;
        padding: 5px;
        flex: 1;
    `;
    search_input.placeholder = "search faculty"

    search_bar.appendChild(search_input)

    topnav_top.appendChild(title);
    topnav_top.appendChild(search_bar);

    return topnav_top;
}

topnav.appendChild(topNavTop());
// topnav.appendChild(topNavBottom());

export default topnav;
