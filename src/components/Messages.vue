<template>
    <div>
        <h4>Messages</h4>
        <ul  v-for="(message, index) in messages" :key="index">
            <li>{{message}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                messages: [
                    "hello", "hhi"
                ]
            };
        }
    }
</script>