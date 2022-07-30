// https://tabler-icons.io/
// https://feathericons.com/

function svg(width, height, cls, style, stroke, content) {
    const ICON_SIZE = 24;
    const STROKE_WIDTH = 2;

    return `<svg xmlns="http://www.w3.org/2000/svg"
                 width="${width || ICON_SIZE}px"
                 height="${height || ICON_SIZE}px"
                 ${(style) ? 'style="' + style + '"' : ''}
                 ${(cls) ? 'class="' + cls + '"' : ''}
                 stroke-width="${stroke || ICON_SIZE / (width || ICON_SIZE) * STROKE_WIDTH}"
                 viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
            >
                ${content}
            </svg>`
}

export const icons = {
    home: ({width, height, cls, style, stroke}={}) => svg(width, height, cls, style, stroke, `
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
    `), // https://feathericons.com/?query=home
    external_link: ({width, height, cls, style, stroke}={}) => svg(width, height, cls, style, stroke, `
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
       <line x1="10" y1="14" x2="20" y2="4"></line>
       <polyline points="15 4 20 4 20 9"></polyline>
    `), // https://tabler-icons.io/
    arrow_up: ({width, height, cls, style, stroke}={}) => svg(width, height, cls, style, stroke, `
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="18" y1="11" x2="12" y2="5"></line>
        <line x1="6" y1="11" x2="12" y2="5"></line>
    `), // https://tabler-icons.io/
    tie: ({width, height, cls, style, stroke}={}) => svg(width, height, cls, style, stroke, `
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4z"></path>
<!--   <path d="M10.5 7h3l5 5.5"></path>-->
    `), // https://tabler-icons.io/
    check: ({width, height, cls, style, stroke}={}) => svg(width, height, cls, style, stroke, `
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l5 5l10 -10"></path>
    `), // https://tabler-icons.io/
    x: ({width, height, cls, style, stroke}={}) => svg(width, height, cls, style, stroke, `
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    `), // https://tabler-icons.io/
}