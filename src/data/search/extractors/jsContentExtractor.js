// Sample extractor function. Change the function to suit your individual needs
function extract(request, response) {
    $ = response.body;

    let pageType, title, description, bodyContent;    
    let unknownText = "Unknown";
    let network, assetClass, lifeCycleStage;
    
    title = $("h1.contentTitle").text() || $('title').text();
    bodyContent = $("div.contentDescription").text();
    description = bodyContent.slice(0, 100);

    // get page and document attributes
    pageType = $('meta[name="page_type"]').attr('content') || unknownText;
    network = $('meta[name="network"]').attr('content') || unknownText;
    assetClass = $('meta[name="asset_class"]').attr('content') || unknownText;
    lifeCycleStage = $('meta[name="lifecycle_stage"]').attr('content') || unknownText;

    // The following is an example of getting a list of values from the 
    // HTML DOM into a string array
    /*let categoryAry = [];
    contentCategory = $("ul#categoryList li").each(function(){
        categoryAry.push($(this).text());
    });*/

    return [{
        'description': description,
        'name': title,
        'type': 'Knowledge Content',
        'url': $('meta[property="og:url"]').attr('content'),
        'content': bodyContent,
        'category': pageType,
        'network': network,
        'asset_class': assetClass,
        'lifecycle_stage': lifeCycleStage     
    }];
}