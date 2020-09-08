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
            <Forms v-on:emit="events.form_emit" />
        </div>
    </main>
</template>

<script>
import { reactive } from "vue";
import Forms from "./Forms.vue";

export default {
    name: "Todo",
    components: {
        Forms
    },
    setup()
    {
        const todos = reactive([
            { name: "Hello", value: "World" },
        ]);
        const events = {
            form_emit: (value) =>
            {
                console.log(value);
            }
        };
        return { todos, events };
    }
};
</script>
