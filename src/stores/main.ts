import { defineStore } from 'pinia'

type State = {
    title: string,
    count: number
}

let state = (): State => ({
        title: "Nuxt 3 + Pinia + Tailwind CSS",
        count: 0
})

export const useMainStore = defineStore('main', {
    state: state,
    actions: {
        increment () {
            this.count ++;
            console.log('Increasing');
        },
        decrement() {
            this.count --;
            console.log('Decreasing');
        }
    }
})