<template>
    <div>

        <div class=" border-b-4 border-black flex w-full">
            <button class=" w-12">=</button>
            <p class=" text-center grow font-bold text-5xl">{{store.title}}</p>
            <button class=" w-12">=</button>
        </div>

        <slot />

    </div>
</template>

<script lang="ts">

    import { useMainStore } from '@/stores/main'

    export default {

        setup() {

            const store = useMainStore()

            return {
                store,
            }

        },

    }
    
</script>