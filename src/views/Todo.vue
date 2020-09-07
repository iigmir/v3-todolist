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
            <form v-on:submit="add_todo">
                <fieldset>
                    <legend>Write your todos</legend>
                    <label for="todo1">Todo 1</label>
                    <input type="text" id="todo1" name="todo1" />
                    <label for="todo2">Todo 2</label>
                    <input type="text" id="todo2" name="todo2" />
                </fieldset>
                <button type="submit">Submit todo</button>
            </form>
        </div>
    </main>
</template>

<script>
import { ref, reactive } from "vue";

export default {
    name: "Todo",
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
