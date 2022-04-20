const submitButton = document.querySelector('#submit');
const input = document.querySelector("#input");
const resultsContainer = document.querySelector("#results");


// create a base url variable and set it to the wiki api url copied from wikipedia.com
const baseUrl= "https://en.wikipedia.org/w/api.php";
// write a function that makes a get request to the base url
const params = {
    origin: '*',
    format: 'json',
    action: 'query',
    prop: 'extracts',
    exchars: 250,
    exintro: true,
    explaintext: true,
    generator: 'search',
    gsrlimit: 20,
};

const getData = async () => {
    const userInput = input.value;
    params.gsrsearch = userInput;
    clearPreviousResults();
    const { data } = await axios.get(baseUrl, { params });
    if (data.error) throw new Error(data.error.info);
    gatherData(data.query.pages);
};

const showResults = results => {
    let firstResult = results[0];
    // results.forEach(result => {
        resultsContainer.innerHTML += `
        <div>
            <a href="https://en.wikipedia.org/?curid=${firstResult.pageId}" target="_blank">
                <p>${firstResult.intro}</p>
            </a>
        </div>
    `;
    // });
};

const clearPreviousResults = () => {
    resultsContainer.innerHTML = '';
};

const gatherData = pages => {
    const results = Object.values(pages).map(page => ({
        pageId: page.pageid,
        title: page.title,
        intro: page.extract,
    }));
    showResults(results);
};

const registerEventHandlers = () => {
    submitButton.addEventListener('click', getData);
};

registerEventHandlers();