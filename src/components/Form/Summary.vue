<script lang="js" setup>
const { Stage, stage, data, previous, set } = useStageManager();
</script>

<template>
    <h2 class="text-center">
        <span>{{ stage }}/3</span>
        {{ $t(`pages.index.content.form.summary.title`) }}
    </h2>

    <i18n-t
        tag="p"
        keypath="pages.index.content.form.summary.description"
        scope="global"
        class="text-justify"
    >
        <template v-slot:messenger>
            <NuxtLink
                external
                target="_blank"
                rel="noreferrer"
                to="https://www.facebook.com/knury.knurow"
                class="text-crimson underline"
            >
                {{ $t(`pages.index.content.form.summary.messenger`) }}
            </NuxtLink>
        </template>
        <template v-slot:instagram>
            <NuxtLink
                external
                target="_blank"
                rel="noreferrer"
                to="https://www.instagram.com/knury.knurow"
                class="text-crimson underline"
            >
                {{ $t(`pages.index.content.form.summary.instagram`) }}
            </NuxtLink>
        </template>
    </i18n-t>

    <h3 class="w-full text-left">
        {{ $t(`pages.index.content.form.summary.subtitle.team`) }}
    </h3>
    <ul class="w-full">
        <li>
            <p class="flex justify-between">
                1.1
                {{ $t(`components.input.team.name`) }}
                <span
                    @click="set(Stage.TEAM)"
                    class="text-crimson underline hover:cursor-pointer"
                >
                    {{
                        !data.name
                            ? $t(`components.input.fill`)
                            : `${data.name.substring(0, 7)}...`
                    }}
                </span>
            </p>
        </li>
        <li>
            <p class="flex justify-between">
                1.2
                {{ $t(`components.select.category.0`) }}
                <span
                    @click="set(Stage.TEAM)"
                    class="text-crimson underline hover:cursor-pointer"
                >
                    {{
                        !data.category
                            ? $t(`components.input.fill`)
                            : `${$t(`components.select.category.${data.category}`).substring(0, 7)}...`
                    }}
                </span>
            </p>
        </li>
        <li>
            <p class="flex justify-between">
                1.3
                {{ $t(`components.input.team.email`) }}
                <span
                    @click="set(Stage.TEAM)"
                    class="text-crimson underline hover:cursor-pointer"
                >
                    {{
                        !data.email
                            ? $t(`components.input.fill`)
                            : `${data.email.substring(0, 7)}...`
                    }}
                </span>
            </p>
        </li>
        <li>
            <p class="flex justify-between">
                1.4
                {{ $t(`components.input.team.phone`) }}
                <span
                    @click="set(Stage.TEAM)"
                    class="text-crimson underline hover:cursor-pointer"
                >
                    {{
                        !data.phone
                            ? $t(`components.input.fill`)
                            : `${data.phone.substring(0, 7)}...`
                    }}
                </span>
            </p>
        </li>
    </ul>

    <h3 class="w-full text-left">
        {{ $t(`pages.index.content.form.summary.subtitle.players`) }}
    </h3>
    <ul class="w-full">
        <li>
            <p
                v-for="(player, number) in data.players"
                class="flex justify-between"
            >
                2.{{ number + 1 }}
                {{
                    player.first_name ||
                    $t(`components.input.player.first_name`)
                }}
                {{
                    player.last_name || $t(`components.input.player.last_name`)
                }}
                <span
                    @click="stage.setPlayers()"
                    class="text-crimson underline hover:cursor-pointer"
                >
                    {{ player.age || $t(`components.input.fill`) }}
                </span>
            </p>
        </li>
    </ul>

    <fieldset class="w-full flex gap-2 items-center justify-end">
        <input
            v-model="data.accepted"
            type="checkbox"
            required
            class="accent-crimson"
        />
        <i18n-t
            tag="span"
            keypath="components.input.submit"
            scope="global"
            class="text-high text-sm text-right"
        >
            <template v-slot:regulations>
                <NuxtLink
                    target="_blank"
                    rel="noreferrer"
                    to="/regulamin"
                    class="text-crimson underline"
                >
                    {{
                        $t(`pages.index.content.form.start.regulations`)
                            .split(" ", 1)
                            .at(0)
                    }}
                </NuxtLink>
            </template>
        </i18n-t>
    </fieldset>

    <aside class="w-full grid grid-cols-2 gap-4">
        <ButtonBase @click="previous()" type="button">
            {{ $t(`components.button.previous`) }}
        </ButtonBase>
        <ButtonBase>
            {{ $t(`components.button.submit`) }}
        </ButtonBase>
    </aside>
</template>
