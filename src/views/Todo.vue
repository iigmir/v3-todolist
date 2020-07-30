<template>
    <main>
        <h1>Todo app</h1>
        <div>
            <!--  -->
        </div>
        <div>
            <form v-on:submit="foobar">
                <fieldset>
                    <legend>Write your first todo</legend>
                    <label for="todo1">Todo 1</label>
                    <input type="text" id="todo1" name="todo1" />
                </fieldset>
                <fieldset>
                    <legend>Write your second todo</legend>
                    <label for="todo2">Todo 2</label>
                    <input type="text" id="todo2" name="todo2" />
                </fieldset>
                <button type="submit">Submit todo</button>
            </form>
        </div>
    </main>
</template>

<script>
export default {
    name: "Todo"
};
</script>
