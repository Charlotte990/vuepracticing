Vue.component('modal', {
    template: `
    <div class="card" style="width: 500px;">
        <div class="card-image">
        <figure class="image is-4by3">
            <img :src="current.url" alt="Pick a Shark...">
        </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                <figure class="image is-48x48">
                    <img :src="current.url" width="96px" alt="Click something below...">
                </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{current.titleName}}</p>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <div class="card-footer-item">
                <button :class="{'is-active': current == shark}" class="button is-primary" v-for="shark in sharks" @click="showShark(shark)">{{shark.buttonName}}</button>
            </div>
        </footer>
    </div>
    
    
    
    `,

    data() {
        return {
            current: {name: '', url: ''},
            sharks: [
                {
                    buttonName: 'shark one', 
                    titleName: 'IMASHARK', 
                    url:'https://upload.wikimedia.org/wikipedia/commons/3/31/Great_white_shark_south_africa.jpg'
                },
                {
                    buttonName: 'shark two', 
                    titleName: 'IMASHARKkkkkkk', 
                    url:'data:image/jpeg;base64,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'
                },
                {
                    buttonName: 'shark three', 
                    titleName: 'IMAaaaaaaaaaSHARK', 
                    url:'https://cdn.pixabay.com/photo/2015/03/15/19/05/shark-674867_960_720.jpg'
                },
                {
                    buttonName: 'shark four', 
                    titleName: 'IMNOTACTUALLY ASHARK', 
                    url:'https://c1.staticflickr.com/8/7326/10346101216_f55a3fbd70_b.jpg'
                }
            ]
        };
    },

    methods: {
        showShark(url) {
            this.current = url;
            console.log(url)
        }
    }
})

new Vue({
    el: '#root'

});
