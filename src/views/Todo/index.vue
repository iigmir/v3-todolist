<template>
    <main class="container">
        <h1>Todo app</h1>
        <div class="row row-cols-12">
            <div class="col">
                <Forms v-on:emit="add_todo" />
            </div>
            <div class="col">
                <a v-bind="dl_json">Download JSON</a>
            </div>
        </div>
        <hr />
        <div class="row row-cols-3">
            <div class="col mb-4" v-for="(item, index) in todos" v-bind:key="index">
                <Card v-bind:data="{ item, index }" v-on:emit="remove_todo" />
            </div>
        </div>
    </main>
</template>

<script>
import Forms from "./Forms.vue";
import Card from "../../components/Card.vue";

export default {
    name: "Todo",
    components: {
        Forms, Card,
    },
    data: () => ({
        todos: [
            { name: "Hello", value: "World" },
        ],
    }),
    computed:
    {
        dl_json()
        {
            return {
                href: "data:text/json;charset=utf-8," + encodeURIComponent( JSON.stringify(this.todos) ),
                download: "todos.json",
                class: [ "btn", "btn-primary" ],
            };
        }
    },
    methods: 
    {
        add_todo(api)
        {
            this.todos.push({
                name: api.todo_name,
                value: api.todo_value
            });
        },
        remove_todo(index)
        {
            if (index > -1) {
                this.todos.splice(index, 1);
            }
        },
    }
};
</script>
