<template>
    <div :class="{ 'dark': isDark }" class="min-h-screen bg-gray-100 dark:bg-dark text-black dark:text-white">
        <Sidebar />
        <main class="ml-64 p-4">
        <Header @toggleDark="isDark = !isDark" />
        <slot />
        </main>
    </div>
</template>

<script setup>
    const isDark = ref(false)
</script>
