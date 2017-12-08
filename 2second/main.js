Vue.component('task-list', {
    
        template: '<div><task v-for="task in tasks">{{task.description}}</task></div>',

        data() {
            return {
                tasks: [
                    {description: 'Go to the store', complete: true},
                ]
            };
        }
    });

Vue.component('task', {

    template: '<li><slot></slot></li>'
});

Vue.component('heading', {

    template: '<h1><slot></slot></h1>'
});

Vue.component('description', {

    template: '<p>I am a Description</p>'
});

Vue.component('message', {

    props: ['title', 'body'],

    data() {
        return {
            isVisible: true
        };
    },

    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{title}}
                <button type="button" class="delete" aria-label="delete" @click="hideModal"></button>
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </article>
    `,

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

Vue.component('modal', {

    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>
                        <slot></slot>
                    </p>
                </div>
            </div>
        <button class="modal-close is-large" @click="$emit('close')"aria-label="close"></button>
    </div>
`
});

new Vue({
    el: '#root',

    data: {
        showModal: false
    }
});
