<template>
    <div class="text-center p-4">
        <h1 class="text-lg font-bold mb-4">Example</h1>
        <!-- Image centered with Tailwind CSS -->
        <img src="/img_typewriter.jpeg" alt="Typewriter" class="mx-auto">
        <p class="mt-2">Typewriters left in storage: {{ typeWriters }}</p>
        <button @click="remove" class="mt-2 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Remove one
        </button>

        <p class="italic mt-2">"{{ storageComment }}"</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const typeWriters = ref(10);

function remove() {
    if (typeWriters.value > 0) {
        typeWriters.value--;
    }
}

const storageComment = computed(() => {
    if (typeWriters.value > 5) {
        return "Many left"
    } else if (typeWriters.value > 0) {
        return "Very few left"
    } else {
        return "No typewriters left"
    }
})
</script>
