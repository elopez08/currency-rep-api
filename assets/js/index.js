
        const searchForm = document.querySelector("#form");
        const getSelectedValue = () => document.querySelector("#city").value;
        const resultsContainer = document.querySelector("#results");
        const baseUrl = "https://en.wikipedia.org/w/api.php";

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

        const showResults = results => {
            let firstResult = results[0];
            resultsContainer.innerHTML += `
            <div>
                <a href="https://en.wikipedia.org/?curid=${firstResult.pageId}" target="_blank">
                    <p>${firstResult.intro}</p>
                </a>
            </div>
        `;
        };

        const gatherData = pages => {
            const results = Object.values(pages).map(page => ({
                pageId: page.pageid,
                title: page.title,
                intro: page.extract,
            }));
            showResults(results);
        };


        const clearPreviousResults = () => {
            resultsContainer.innerHTML = '';
        };

        const getData = async (search) => {
            params.gsrsearch = search;
            clearPreviousResults();
            const { data } = await axios.get(baseUrl, { params });
            if (data.error) throw new Error(data.error.info);
            gatherData(data.query.pages);
        }

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let city = getSelectedValue();
            localStorage.setItem('city', city)
            getData(city);
        })