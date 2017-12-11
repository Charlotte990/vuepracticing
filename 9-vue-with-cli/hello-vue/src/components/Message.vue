<template>
    <div class="box">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
.box {
    background: grey;
    padding: 10px;
    border: 1px solid darkblue;
    margin-bottom: 2px;
}
</style>