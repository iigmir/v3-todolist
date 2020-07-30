import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/Main.vue";
import Todo from "../views/Todo.vue";

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main
    },
    {
        path: "/todo",
        name: "Todo",
        component: Todo
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
