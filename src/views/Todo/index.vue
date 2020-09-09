<template>
    <main class="container">
        <h1>Todo app</h1>
        <div class="row row-cols-3">
            <div class="col mb-4" v-for="(item, index) in todos" v-bind:key="index">
                <Card v-bind:data="{ item, index }" v-on:emit="remove_todo" />
            </div>
        </div>
        <!-- <div>
            <ul>
                <li v-for="(item, index) in todos" v-bind:key="index">
                    <button v-on:click="remove_todo(index)">X</button>
                    <span>{{ item.name }} : {{ item.value }}</span>
                </li>
            </ul>
        </div> -->
        <!-- <article class="card-group row-cols-3">
            <section class="card" v-for="(item, index) in todos" v-bind:key="index">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </section>
        </article> -->
        <div>
            <Forms v-on:emit="add_todo" />
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
