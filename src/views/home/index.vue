
<template>
    <div class="home">
        <main-panel></main-panel>
        <chat-pane></chat-pane>
    </div>
</template>
<script>
import mainPanel from './mainPanel'
import chatPane from './chat'
export default {
    created() {
    },
    methods: {
        
    },
    components: {
        mainPanel,
        chatPane,
    }
};
</script>
<style scoped lang="scss">
.home {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>