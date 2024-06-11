/* 改成react */
/* function laugh() {
    var face1_box = document.getElementById("face1_box");
    face1_box.classList.add("hide");
} */
document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.querySelectorAll('.nav')[0];
    if (iframe) {
        iframe.addEventListener('load', () => {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.addEventListener('mousemove', (e) => {
                const y = e.clientY;
                const subsLists = iframeDocument.querySelectorAll('ul.subs');
                const cartContent = iframeDocument.querySelector('.cart_content');
                const mobile = iframeDocument.querySelector('.m_out');
                if (y <= 90) {
                    console.log("Mouse within 90px from the top");
                    iframe.style.height = '500px';
                } else {
                    // Check if all ul.subs elements and div.cart_content have display: none
                    let allHidden = true;
                    if (cartContent && getComputedStyle(cartContent).display !== 'none') {
                        allHidden = false;
                    }
                    subsLists.forEach(subsList => {
                        if (getComputedStyle(subsList).display !== 'none') {
                            allHidden = false;
                        }
                    });

                    if (getComputedStyle(mobile).display !== 'none') {
                        allHidden = false;
                    }

                    if (allHidden) {
                        iframe.style.height = '60px';
                    }
                }
            });
        });
    }
});

