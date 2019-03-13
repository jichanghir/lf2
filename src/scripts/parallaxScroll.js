{
    const DOC = document;
    const WIN = window;

    if (WIN.screen.width >= 1200) {
        const parallaxContainer = DOC.getElementById('bg-parallax-scroll');
        const topSection = DOC.getElementById('top-section');

        const docHeight = DOC.documentElement.clientHeight > 550 ? DOC.documentElement.clientHeight : 550;

        if (topSection) {
            topSection.style.backgroundImage = 'none';
        }

        if (parallaxContainer) {
            const layers = parallaxContainer.children;

            const moveLayers = (e) => {
                [].slice.call(layers).forEach((layer, index) => {
                    const scrollVal = 0 - WIN.pageYOffset * (index/5);

                    const transformString = `translateY(${scrollVal}px)`;
                    layer.style.transform = transformString;
                });
            };

            WIN.addEventListener('scroll', moveLayers);

            DOC.addEventListener('DOMContentLoaded', () => {
                [].slice.call(layers).forEach((layer, index) => {
                    const img = layer.children;
                    img[0].setAttribute('src', require(`images/parallaxtrain/ls${index+1}.png`));

                    const height = docHeight * 2;
                    layer.firstElementChild.style.height = height + 'px';
                });
            });
        }
    }
};
