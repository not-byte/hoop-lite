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
                :to="useLocalePath()(`regulations`)"
                rel="noreferrer"
                class="text-crimson underline"
            >
                {{ $t(`pages.index.content.form.start.regulations`) }}
            </NuxtLink>
        </template>
        <template v-slot:link>
            <NuxtLinkLocale
                :to="useLocalePath()(`about`)"
                rel="noreferrer"
                class="text-crimson underline"
            >
                {{ $t(`pages.index.content.form.start.link`) }}
            </NuxtLinkLocale>
        </template>
    </i18n-t>
    <aside class="w-full grid grid-cols-1 gap-4">
        <ButtonBase @click="next()" type="button">
            {{ $t(`components.button.start`) }}
        </ButtonBase>
    </aside>
</template>
