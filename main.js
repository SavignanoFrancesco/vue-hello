
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
            //funzione assegnata al bottone con evento @click
            changeImgDimension() {
                //se l'immagine è presente
                if(this.imgStyle == 'imgStyle1') {
                    //fai scomparire l'immagine cambiandogli classe
                    this.imgStyle = 'imgStyle2';
                    //cambia il testo del bottone
                    this.buttonText = 'Fai scomparire l\'immagine';
                }
                //se l'immagine non è presente
                else {
                    //fai comparire l'immagine cambiandogli classe
                    this.imgStyle = 'imgStyle1';
                    //cambia il testo del bottone
                    this.buttonText = 'Fai comparire l\'immagine';
                }
            }
        }
  }
);
