<template>
    <main>
        <h1>Todo app</h1>
        <div>
            <ul>
                <li v-for="(item, index) in todos" v-bind:key="index">
                    <button>X</button> {{ item.name }} : {{ item.value }}
                </li>
            </ul>
        </div>
        <div>
            <Forms v-on:emit="form_emit" />
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
        form_emit: (api) =>
        {
            debugger;
            const todos = this.todos;
            debugger;
            todos.push({
                name: api.todo_name,
                value: api.todo_value
            });
            this.todos = todos;
        }
    }
};
</script>
