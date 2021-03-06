Vue.component('results-area', {
    template: `
        <div>    
            <div class="container">
                <div class="centreMe">
                    <a href="#" @click="isActive = !isActive">
                        <img src="money.gif">
                    </a>
                </div>
                
                <div id="output-area" class="columns is-gapless is-multiline is-mobile">
                    <div class="column is-one-quarter">
                        -
                    </div>
                    <div class="column is-one-half">    
                        <div>
                            <result v-if="isActive" v-for="result in results">
                                {{result.name + ': ' + result.id}}
                            </result>
                        </div>
                    </div>
                    <div class="column is-one-quarter">
                        -
                    </div>
                </div> 
            </div>
        </div>
    `,

    data() {
        return {
            results: [
                {name: 'Name 1', id: 123},
                {name: 'Name 2', id: 456},
                {name: 'Name 3', id: 789}
            ],
            isActive: false
        };
    }
})

Vue.component('result', {
    template: '<p><slot></slot></p>'
})

Vue.component('navigation-area', {
    template: `
        <nav class="navbar is-danger">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="logominiformockui.jpg" alt="Mock UI." width="60" height="40">
                </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="file:///Users/charlottejewer/Projects/vue2/8-Build_generic_interface/index.html">
                        Home
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="/documentation/overview/start/">
                            Docs
                        </a>
                        <div class="navbar-dropdown is-boxed">
                            <a class="navbar-item" href="/documentation/overview/start/">
                                Overview
                            </a>
                            <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                                Modifiers
                            </a>
                            <hr class="navbar-divider">
                            <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                                Elements
                            </a>
                        </div>
                    </div>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                    <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                                    <span class="icon">
                                        <i class="fa fa-twitter"></i>
                                    </span>
                                    <span>
                                        Tweet
                                    </span>
                                </a>
                            </p>
                        <p class="control">
                            <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                                <span class="icon">
                                    <i class="fa fa-download"></i>
                                </span>
                                <span>Download</span>
                            </a>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`
});

new Vue({
    el: '#root',
});