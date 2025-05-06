<template>
    <main class="w-full h-full grid place-content-center">
      <section
        class="w-screen sm:w-[75vw] lg:w-[25vw] flex flex-col gap-4 items-center px-3 mt-6 sm:mt-24 mb-24"
      >
        <IconLogo width="200" height="200" />
  
        <h1 class="text-center">
            {{ $t(`pages.about.title`) }}
        </h1>
  
        <i18n-t
            tag="p"
            keypath="pages.about.description"
            scope="global"
            class="text-justify max-w-2xl"
        >
        <template v-slot:hour>
            <TextImportant>{{ $t(`pages.about.hour`) }}</TextImportant>
        </template>
        <template v-slot:eventname>
            <TextImportant>{{ $t(`pages.about.eventname`) }}</TextImportant>
        </template>
        <template v-slot:president>
            <TextImportant>{{ $t(`pages.about.president`) }}</TextImportant>
        </template>
        </i18n-t>
  
        <h3>FAZA ZASADNICZA TURNIEJU (mecze w grupach)</h3>
        <i18n-t
            tag="p"
            keypath="pages.about.content.p1.content"
            scope="global"
            class="text-justify max-w-2xl"
        >
        <template v-slot:hour>
            <TextImportant>{{ $t(`pages.about.content.p1.hour`) }}</TextImportant>
        </template>
        </i18n-t>
  
        <h3>{{ $t('pages.about.content.p2.title') }}</h3>
<ul class="max-w-2xl list-disc list-inside">
  <li>
    <i18n-t
      keypath="pages.about.content.p2.list.item1.description"
      tag="span"
      scope="global"
    >
      <template #label>
        <TextImportant>{{ $t('pages.about.content.p2.list.item1.label') }}</TextImportant><br />
      </template>
    </i18n-t>
  </li>
  <li>
    <i18n-t
      keypath="pages.about.content.p2.list.item2.description"
      tag="span"
      scope="global"
    >
      <template #label>
        <TextImportant>{{ $t('pages.about.content.p2.list.item2.label') }}</TextImportant><br />
      </template>
    </i18n-t>
  </li>
  <li>
    <i18n-t
      keypath="pages.about.content.p2.list.item3.description"
      tag="span"
      scope="global"
    >
      <template #label>
        <TextImportant>{{ $t('pages.about.content.p2.list.item3.label') }}</TextImportant><br />
      </template>
    </i18n-t>
  </li>
</ul>

  
        <h3>{{ $t(`pages.about.content.p3.title`) }}</h3>
<i18n-t
  tag="p"
  keypath="pages.about.content.p3.content"
  scope="global"
  class="text-justify max-w-2xl"
>
  <template #organization>
    <TextImportant>{{ $t(`pages.about.content.p3.organization`) }}</TextImportant>
  </template>
</i18n-t>

<h3>{{ $t(`pages.about.content.p4.title`) }}</h3>
<i18n-t
  tag="p"
  keypath="pages.about.content.p4.beforeList"
  scope="global"
  class="text-justify max-w-2xl"
>
  <template #zone>
    <TextImportant>{{ $t(`pages.about.content.p4.zone`) }}</TextImportant>
  </template>
  <template #donation>
    <TextImportant>{{ $t(`pages.about.content.p4.donation`) }}</TextImportant>
  </template>
</i18n-t>

<ul class="text-justify max-w-2xl list-disc list-inside">
  <li>{{ $t(`pages.about.content.p4.list.item1`) }}</li>
  <li>{{ $t(`pages.about.content.p4.list.item2`) }}</li>
  <li>{{ $t(`pages.about.content.p4.list.item3`) }}</li>
  <li>{{ $t(`pages.about.content.p4.list.item4`) }}</li>
</ul>

<i18n-t
  tag="p"
  keypath="pages.about.content.p4.afterList"
  scope="global"
  class="text-justify max-w-2xl"
>
  <template #goal>
    <TextImportant>{{ $t(`pages.about.content.p4.goal`) }}</TextImportant>
  </template>
</i18n-t>

<h3>{{ $t(`pages.about.content.p5.title`) }}</h3>
<i18n-t
  tag="p"
  keypath="pages.about.content.p5.content"
  scope="global"
  class="text-justify max-w-2xl"
>
  <template #zone>
    <TextImportant>{{ $t(`pages.about.content.p5.zone`) }}</TextImportant>
  </template>
</i18n-t>

<h3>{{ $t(`pages.about.content.p6.title`) }}</h3>
<i18n-t
  tag="p"
  keypath="pages.about.content.p6.content"
  scope="global"
  class="text-justify max-w-2xl"
>
  <template #group>
    <TextImportant>{{ $t(`pages.about.content.p6.group`) }}</TextImportant>
  </template>
</i18n-t>

<h3>{{ $t(`pages.about.content.p7.title`) }}</h3>
<i18n-t
  tag="p"
  keypath="pages.about.content.p7.content"
  scope="global"
  class="text-justify max-w-2xl"
>
  <template #prizes>
    <TextImportant>{{ $t(`pages.about.content.p7.prizes`) }}</TextImportant>
  </template>
</i18n-t>

<h3>{{ $t(`pages.about.content.p8.title`) }}</h3>
<i18n-t
  tag="p"
  keypath="pages.about.content.p8.content"
  scope="global"
  class="text-justify max-w-2xl"
>
  <template #water>
    <TextImportant>{{ $t(`pages.about.content.p8.water`) }}</TextImportant>
  </template>
</i18n-t>

<h3>{{ $t(`pages.about.content.p9.title`) }}</h3>
<i18n-t
  tag="p"
  keypath="pages.about.content.p9.content"
  scope="global"
  class="text-justify max-w-2xl"
>
  <template #photo>
    <TextImportant>{{ $t(`pages.about.content.p9.photo`) }}</TextImportant>
  </template>
</i18n-t>

<h3>{{ $t(`pages.about.content.p10.title`) }}</h3>
<i18n-t
  tag="p"
  keypath="pages.about.content.p10.content"
  scope="global"
  class="text-justify max-w-2xl"
>
  <template #hour>
    <TextImportant>{{ $t(`pages.about.content.p10.hour`) }}</TextImportant>
  </template>
</i18n-t>

<i18n-t
  tag="p"
  keypath="pages.about.content.p11.content"
  scope="global"
  class="text-justify max-w-2xl"
>
  <template #eventname>
    <TextImportant>{{ $t(`pages.about.content.p11.eventname`) }}</TextImportant>
  </template>
</i18n-t>

      </section>
    </main>
  </template>
  