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
                if (y <= 90) {
                    console.log("Mouse within 90px from the top");
                    iframe.style.height = '500px';
                }
            });
            const uls = iframeDocument.querySelectorAll('ul');
            uls.forEach((ul) => {
                console.log("subs element found");
                ul.addEventListener('mouseout', () => {
                    console.log("Mouse out of subs");
                    iframe.style.height = '90px';
                });
            })
        });
    }
});