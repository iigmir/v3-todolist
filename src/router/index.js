import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Todo from "../views/Todo.vue";

Vue.use(VueRouter);

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

const router = new VueRouter({ routes });

export default router;
