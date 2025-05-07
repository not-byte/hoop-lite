<template>
    <IconLogo width="200" height="200" />
    <h2 class="text-center">
        {{ $t(`pages.index.content.form.sent.title`) }}
    </h2>
    <i18n-t
        tag="p"
        keypath="pages.index.content.form.sent.description"
        scope="global"
        class="text-justify"
    >
        <template v-slot:additional_info>
            <NuxtLink
                target="_blank"
                rel="noreferrer"
                to="/regulamin"
                class="text-crimson underline"
            >
                {{ $t(`pages.index.content.form.sent.additional_info`) }}
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
</template>
