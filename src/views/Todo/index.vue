<template>
    <main class="container">
        <h1>Todo app</h1>
        <div class="row row-cols-12">
            <div class="col">
                <Forms v-on:emit="add_todo" />
            </div>
            <div class="col">
                <a v-bind="dl_json">Download JSON</a>
                <div style="margin-top:1rem;">
                    <label class="btn btn-primary" for="load-json">Load JSON</label>
                    <input hidden type="file" id="load-json" name="load-json" accept="json" v-on:change="load_json" />
                </div>

                <!-- <input type="file" value="Load file" class="btn btn-primary" /> -->
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
        load_json_core(e)
        {
            try {
                const result = JSON.parse(e.target.result);
                this.todos = result; 
            } catch (error) {
                console.error({ error, data: e.target.result });
                this.todos = []; 
            }
        },
        load_json(e)
        {
            const reader = new FileReader();
            const file = e.target.files[0];
            reader.onload = (() => e => this.load_json_core(e) )(file);
            reader.readAsText(file);
        }
    }
};
</script>
