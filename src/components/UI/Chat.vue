<template>
    <div id="frame">
        <div class="chat--block">
            <div class="chat--title">
                <div class="chat--image">
                    <img src="" alt="">
                </div>
                <h2></h2>
            </div>
            <div class="chat--frame"></div>
            <div class="chat--input"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'chat-view',
    props: {
        chat: {
            type: Object,
            required: true,
        }
    }
}
</script>
<style scoped>
#frame {
    height: calc(100vh - 70px);
}

.chat--block {
    width: 70%;
    height: 100%;
    float: right;
    background: #111;
}
</style>