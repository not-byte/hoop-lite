<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps({
    error: Object as () => NuxtError
});

const page = `${error?.statusCode || 500}`;

useSiteData().setSiteData(page);
</script>

<template>
    <NuxtLayout>
        <main>
            <IconLogo width="200" height="200" />
            <h1 v-if="error" class="text-center">
                {{ $t(`pages.${page}.title`) }}
            </h1>

            <i18n-t
                tag="p"
                :keypath="`pages.${page}.description`"
                scope="global"
                class="text-justify"
            ></i18n-t>

            <ButtonBase>
                <NuxtLink :to="useLocalePath()(`index`)" rel="noreferrer">
                    {{ $t(`pages.${page}.content.back`) }}
                </NuxtLink>
            </ButtonBase>
        </main>
    </NuxtLayout>
</template>
