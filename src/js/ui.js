import cache from './cache.js'
export default {
    set text_banner(value) {
        document.querySelector('.js-text_banner').innerHTML = value
    },
    set text_banner_size(value) {
        document.querySelector('.js-text_banner').style.fontSize = `${value}px`
    },
    set menu_color_bg(value) {
        document.querySelector('.js-menu_color_bg').style.backgroundColor = value
        document.querySelector('.js-menu-color-br').value = value
    },
    set menu_color_text(value) {
        document.documentElement.style.setProperty('--cor-link-menu', value);
        document.querySelector('.js-menu-color-text').value = value
    },
    set construtor(status) {
        cache.data = { construtor: status }
        if (status) {
            document.querySelector('.js-g-layout').classList.add('g-layout-one')
            document.querySelector('.js-aside-menu').removeAttribute('hidden')
        } else {
            document.querySelector('.js-aside-menu').setAttribute('hidden', '')
            document.querySelector('.js-g-layout').classList.remove('g-layout-one')
        }
    },
    get construtor() {
        return cache.data.construtor || false
    }
}