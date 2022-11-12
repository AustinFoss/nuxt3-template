<template>
    <div>

        <div class=" text-center">
            
            <p>Counter</p>

            <div class="flex place-content-center">
                <button class=" w-12" @click="store.decrement">-</button>
                <p>{{store.count}}</p>
                <button class=" w-12" @click="store.increment">+</button>
            </div>

        </div>

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