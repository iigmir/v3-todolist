<template>
    <form v-on:submit="event.submit">
        <div class="form-group">
            <label for="todo-name">Todo name</label>
            <input type="text" id="todo-name" name="todo-name" class="form-control" v-model="data.todo_name" />
        </div>
        <div class="form-group">
            <label for="todo-value">Todo value</label>
            <input type="text" id="todo-value" name="todo-value" class="form-control" v-model="data.todo_value" />
        </div>
        <button type="submit" class="btn btn-primary">Submit todo</button>
    </form>
</template>

<script>
import { reactive } from "vue";

export default {
    name: "TodoForm",
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
