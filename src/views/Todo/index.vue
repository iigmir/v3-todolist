<template>
    <main>
        <h1>Todo app</h1>
        <div>
            <ul>
                <li v-for="(item, index) in todos" v-bind:key="index">
                    <button v-on:click="remove_todo(index)">X</button>
                    <span>{{ item.name }} : {{ item.value }}</span>
                </li>
            </ul>
        </div>
        <div>
            <Forms v-on:emit="add_todo" />
        </div>
    </main>
</template>

<script>
import Forms from "./Forms.vue";

export default {
    name: "Todo",
    components: {
        Forms
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
