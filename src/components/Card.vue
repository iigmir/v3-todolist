<template>
    <article class="card">
        <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.value }}</p>
            <a v-on:click="action(index)" href="javascript:;" class="btn btn-primary">Delete</a>
        </div>
    </article>
</template>

<script>
import { computed } from "vue";

export default {
    name: "Card",
    props:
    {
        data: {
            type: Object,
            default: () => ({
                item: {
                    name: "",
                    value: "",
                },
                index: -1
            }),
        }
    },
    setup(props, { emit })
    {
        const item = computed( () => props.data.item );
        const index = computed( () => props.data.index );
        const action = (id = 0) => emit( "emit", id );
        return { item, index, action };
    },
};
</script>
