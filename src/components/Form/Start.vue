<script lang="js" setup>
const { next } = useStageManager();
</script>

<template>
    <IconLogo width="200" height="200" />
    <h1 class="text-center">
        {{ $t(`pages.index.content.form.start.title`) }}
    </h1>
    <i18n-t
        tag="p"
        keypath="pages.index.content.form.start.description"
        scope="global"
        class="text-justify"
    >
        <template v-slot:regulations>
            <NuxtLink
                target="_blank"
                rel="noreferrer"
                to="/regulamin"
                class="text-crimson underline"
            >
                {{ $t(`pages.index.content.form.start.regulations`) }}
            </NuxtLink>
        </template>
        <template v-slot:link>
            <NuxtLink
                target="_blank"
                rel="noreferrer"
                to="/o-turnieju"
                class="text-crimson underline"
            >
                {{ $t(`pages.index.content.form.start.link`) }}
            </NuxtLink>
        </template>
    </i18n-t>
    <aside class="w-full grid grid-cols-1 gap-4">
        <ButtonBase @click="next()" type="button">
            {{ $t(`components.button.start`) }}
        </ButtonBase>
    </aside>
</template>
