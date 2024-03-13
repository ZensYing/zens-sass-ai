
<template>
    <div class="flex item-center p-4 ">
        <!-- Mobile Sidebar -->
        <div class="flex w-full justify-end ">
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="outline">
                        <Icon name="lucide:user" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" class="w-72 left-{100px}">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div class="w-full flex items-center p-2 pl-3">
                        <Avatar>
                            <AvatarImage v-if="user?.user_metadata.avatar_url" :src="user.user_metadata.avatar_url">
                                <AvatarFallback>
                                    {{ user.email?.charAt(0).toUpperCase() }}
                                    {{ user.email?.charAt(1).toUpperCase() }}

                                </AvatarFallback>
                            </AvatarImage>
                        </Avatar>
                        <div>
                            <div class="font-bold">
                                {{ user?.user_metadata.full_name }}
                            </div>
                            <div class="text-sm">
                                {{ user?.email}}
                            </div>
                        </div>
                    </div>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
</script>

<style lang="scss" scoped></style>