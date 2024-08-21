<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import NavigationBar from './components/NavigationBar.vue';

@Component({
    components: {
        NavigationBar
    }
})
export default class App extends Vue {

}
</script>

<template>
    <div>
        <NavigationBar />
    </div>
</template>
