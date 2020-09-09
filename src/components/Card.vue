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
    computed:
    {
        item() {
            return this.data.item;
        }
    }
};
</script>
