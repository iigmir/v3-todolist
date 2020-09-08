<template>
    <form v-on:submit="event.submit">
        <fieldset>
            <legend>Write your todos</legend>
            <label for="todo-name">Todo 1</label>
            <input type="text" id="todo-name" name="todo-name" v-model="data.todo_name" />
        </fieldset>
        <fieldset>
            <legend>Write your second todo</legend>
            <label for="todo-value">Todo 2</label>
            <input type="text" id="todo-value" name="todo-value" v-model="data.todo_value" />
        </fieldset>
        <button type="submit">Submit todo</button>
    </form>
</template>

<script>
import { reactive } from "vue";

export default {
    name: "Forms",
    setup( props, { emit })
    {
        const data = reactive({
            todo_name: "",
            todo_value: ""
        });
        const event = {
            submit(e)
            {
                e.preventDefault();
                emit( "emit", data );
            },
        };
        return { data, event, };
    }
};
</script>
