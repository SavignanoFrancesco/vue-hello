
var app = new Vue(
  {
      el: '#root',
      data: {
          container1: 'container1',
          container2: 'container2',
          titleText: 'Hello VUE!!!',
          titleStyle: 'titleStyle',
          buttonText: 'Fai comparire l\'immagine',
          imgByVue: 'https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png',
          imgStyle: 'imgStyle1'
      },
      methods: {
            changeImgDimension() {
                if(this.imgStyle == 'imgStyle1') {
                    // se il colore attuale è rosso => lo imposto a blu
                    this.imgStyle = 'imgStyle2';
                } else {
                    // se il colore attuale è blu => lo imposto a rosso
                    this.imgStyle = 'imgStyle1';
                }
            }
        }
  }
);
