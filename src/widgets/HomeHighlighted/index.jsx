import { FilterEqual, WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';

import { Row } from '../../components/Common';
import { getContentIcon } from '../../components/Icons';
import { ArticleCard, ArticleCardContent, ArticleCardImage } from './styled';

export const HomeHighlightedComponent = () => {
  const {
    widgetRef,
    queryResult: { data: { content: articles = [] } = {} },
  } = useSearchResults({
    query: (query) => {
      query.getRequest().setSearchFilter(new FilterEqual('type', 'Knowledge Content'));
    },
  });
  const articlesToShow = articles.slice(0, 3);
  return (
    <Row ref={widgetRef}>
      {articlesToShow.map((a, index) => (
        <ArticleCard key={`${a.id}-${index}`}>
          <ArticleCardContent>
            <div className="articleUpper">
              <ArticleCardImage>{getContentIcon(a.type)}</ArticleCardImage>
                <a href={`${a.url}`}><h3>{a.name}</h3></a>
                <span className="test">{a.description}</span>
            </div>
            <div className="articleLower">
              <div className="promotional-tile__bottom"><a target="" className="primary-btn promotional-tile__cta" href={a.url}><span className="primary-btn__circle"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 11.813h13.75M13.938 7l4.812 4.813-4.813 4.812" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></span><span className="primary-btn__text">Read more</span></a></div>
            </div>
          </ArticleCardContent>
          
        </ArticleCard>
       
      ))}
    </Row>
  );
};

export default widget(HomeHighlightedComponent, WidgetDataType.SEARCH_RESULTS, 'content');
