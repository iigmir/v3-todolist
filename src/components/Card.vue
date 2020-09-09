<template>
    <article class="card">
        <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.value }}</p>
            <a href="javascript:;" class="btn btn-primary">Delete</a>
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
    setup(props)
    {
        const item = computed( () => props.data.item );
        return { item };
    },
};
</script>
