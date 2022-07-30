export const Page = {
    match(pages, error404) {
        let page = this._matchAndSetComponent(pages)
        if (!page) {
            page = error404;
        }
        return page;
    },
    _matchAndSetComponent(pages) {
        for (const page of pages) {
            const reString = page.path.replace(/<[^/]+>/g, '[^/]+');
            const re = new RegExp(`^${reString}/?$`);
            if (re.test(location.pathname)) {
                let matchedPage = page;
                matchedPage.params = this._setParams(page.path)
                return matchedPage;
            }
        }
    },
    _setParams(path) {
        let params = {}
        for (const [i, slug] of path.split('/').entries()) {
            if (slug.startsWith('<')) {
                const key = slug.replace('<', '').replace('>', '');
                const value = location.pathname.split('/')[i];
                params[key] = value;
            }
        }
        return params;
    }
}