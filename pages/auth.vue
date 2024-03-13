<!-- App.vue -->
<template>
  <div class="w-full min-h-screen flex items-center">
    <div class="max-w-[880px] w-full mx-auto">
      <card>
        <CardTitle>
          <div class="text-center py-4">Welcome</div>
        </CardTitle>
        <CardContent>
          <Auth
            :supabaseClient="supabaseClient"
            :appearance="{
              theme: ThemeSupa,
            }"
            :providers="['github', 'google']"
            redirectTo=""
          />
        </CardContent>
      </card>
    </div>
  </div>
</template>
  
<script setup lang="ts">
    // Import predefined theme
    import { ThemeSupa } from "@supabase/auth-ui-shared";
    import { Auth } from "@nuxtbase/auth-ui-vue";

    const supabaseClient = useSupabaseClient();
    definePageMeta({
    layouts: "home",
    });
</script>