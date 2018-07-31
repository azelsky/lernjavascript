import {createSelector} from 'reselect'

// export function filtrateArticles(state) {
//     const {filters, articles} = state
//
//     const {selected, dateRange: {from, to}} = filters
//
//     return articles.filter(article => {
//         const published = Date.parse(article.date);
//         return (!selected.length || selected.includes(article.id)) &&
//             (!from || !to || (published > from && published < to))
//     })
// }

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;

export const  filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})