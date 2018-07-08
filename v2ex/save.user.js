// ==UserScript==
// @name         V2EX 存档助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @match        https://www.v2ex.com/t/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getPageCount () {
        const pageInput = document.querySelector('.page_input');
        if (pageInput) {
            const lastPage = pageInput.parentNode.querySelector('a:last-of-type');
            return parseInt(lastPage.innerHTML);
        } else {
            return 1;
        }
    }

    function getCurrentPage () {
        const url = new URL(window.location.href);
        return parseInt(url.searchParams.get('p')) || 1;
    }

    function fetchPageDoc (url) {
        const init = { credentials: 'include' }
        return fetch(url, init).then(resp => resp.text()).then(html => {
            const doc = document.implementation.createHTMLDocument('virtual');
            doc.body.innerHTML = html;
            return doc;
        });
    }

    function getRepliesContent (doc) {
        return doc.querySelector('#Main > div:nth-child(4)').innerHTML;
    }

    function collectReplies (page) {
        console.log('Processing page', page);
        return new Promise((resolve, reject) => {
            if (page == getCurrentPage()) {
                resolve(getRepliesContent(document));
            } else {
                const url = new URL(window.location.href);
                url.searchParams.set('p', page);
                fetchPageDoc(url.toString()).then(pageDoc => {
                    resolve(getRepliesContent(pageDoc));
                }).catch(reject);
            }
        });
    }

    function clearElements (selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(elem => elem.remove());
    }

    function fixMedia () {
        const styles = document.querySelectorAll('link[media],link[rel="stylesheet"],link[type="text/css"],style');
        styles.forEach(style => style.setAttribute('media', 'all'));
    }

    function doClear () {
        clearElements('#Rightbar');
        clearElements('#Top td[align="right"]');
        clearElements('#Search');
        document.querySelector('#Main').style.marginRight = '20px';
    }

    function doPrint() {
        window.print();
    }

    function save () {
        const maxPage = getPageCount();
        console.log('Processing', document.location.href);

        Promise.all(Array.from(Array(maxPage)).map((_, i) => {
            return collectReplies(i + 1);
        })).then(pages => {
            const replyBox = document.querySelector('#Main > div:nth-child(4)');
            replyBox.innerHTML = pages.join('');
            fixMedia();
            doClear();
            setTimeout(doPrint, 2000);
        }, err => {
            alert(`失败了 ${err.message}`);
        });
    }

    function installButton () {
        const button = document.createElement('a');
        button.href = 'javascript:;';
        button.innerHTML = '保存';
        button.className = 'tb';
        button.addEventListener('click', save);
        document.querySelector('.topic_buttons').appendChild(button);
    }

    installButton();
})();
