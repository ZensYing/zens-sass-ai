<template>
    <div class="space-y-4 py-4 flex-col flex h-full bg-white shadow-sm border-r bg-gradient-to-r from-slate-900 to-slate-700">
        <div class="px-3 py-2 flex-1">
            <NuxtLink to="/" class="">
                <div class="relative h-30 w-60  mr-4 " >
                    <img src="/logo.png" alt="Logo">
                </div>
                <h1 class="text-3xl text-center   font-bold italic text-gray-200 border-b border-solid border-white " > Welcome </h1>
            </NuxtLink>
            <div class="space-y-1">
                <NuxtLink v-for="route in dashboardLinks" 
                :key="route.link"
                :to="route.link"
                class="text-[17px] group text-white   flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition duration-150 hover:bg-white hover:text-teal-500 transform  hover:scale-400 hover:bg-muted  "
                :class="{'bg-muted': currentRoute.path === route.link,}"
                >
                <div class="flex items-center flex-1">
                    <Icon :name="route.icon" :class="`w-5 h-5 mr-3 ${route.color}`" />
                    {{ route.label }}
                </div> 
                </NuxtLink>
            </div>
        </div>
        <!-- counter -->
    </div>
</template>
<script setup lang="ts">
    const currentRoute = useRoute() 
</script>
<style scoped></style>