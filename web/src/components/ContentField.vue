<template>
    <div class="container content-field"> <!--便捷写法 div.container>div.card>div.card.body可以自动生成这一段代码-->
        <div class="card">
            <div class="card body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
div.content-field {
    margin-top: 20px;
}
</style>