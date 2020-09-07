<template>
    <main>
        <h1>Todo app</h1>
        <div>
            <ul>
                <li v-for="(item, index) in todos" v-bind:key="index">
                    <button>X</button> {{ item.todo1 }} ------ {{ item.todo2 }}
                </li>
            </ul>
        </div>
        <div>
            <Forms />
        </div>
    </main>
</template>

<script>
import { ref, reactive } from "vue";
import Forms from "./Forms.vue";

export default {
    name: "Todo",
    components: {
        Forms
    },
    setup()
    {
        const readersNumber = ref(0);
        const todos = reactive([
            { todo1: "Hello", todo2: "World" },
        ]);
        return {
            readersNumber,
            todos
        };
    }
};
</script>
