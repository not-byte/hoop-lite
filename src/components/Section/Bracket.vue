<template>
  <div class="grid sm:grid-flow-col gap-2 justify-center h-full ">
    <!-- Lewa strona: ćwierćfinały -->
    <div class="flex flex-col items-center space-y-6">
      <h3 class="text-2xl text-crimson mb-6">Ćwierćfinały</h3>
      <div class="grid grid-rows-2 items-center gap-2 h-full">
      <!-- Ćwierćfinał 1 -->
      <div class="text-center rounded-lg bg-white border-crimson p-2 grid grid-cols-[2fr,1fr,2fr] justify-center gap-2">
        <span>Team A1</span>
        <TextImportant class="">vs</TextImportant>
        <span>Team C2</span>
      </div>

      <!-- Ćwierćfinał 2 -->
      <div class="text-center rounded-lg bg-white border-crimson p-2 grid grid-cols-[2fr,1fr,2fr] justify-center gap-2">
        <span>Team B1</span>
        <TextImportant class="">vs</TextImportant>
        <span>Team D2</span>
      </div>
    </div>
  </div>
    <!-- Drabinka Playoff -->
    <div class="grid grid-rows-[1fr,3fr] space-y-8">
      <!--Finał-->
      <div class="flex flex-col items-center self-start">
        <h2 class="text-2xl text-crimson font-bold mb-8">Finał</h2>
        <div class="text-center rounded-lg bg-white border-crimson p-2 grid grid-cols-[2fr,1fr,2fr] justify-center gap-2">
          <span>Team W5</span>
          <TextImportant class="">vs</TextImportant>
          <span>Team W6</span>
        </div>
      </div>
      <!-- Półfinały -->
      <div class="flex flex-col items-center place-self-center h-[90%]">
        <h2 class="text-2xl text-crimson font-bold mb-8 text-center">Półfinały</h2>
        <!-- Półfinał 1 -->
         <div class="grid grid-flow-col gap-1">
        <div class="text-center rounded-lg bg-white border-crimson p-2 grid grid-cols-[2fr,1fr,2fr] justify-center gap-2">
          <span>Team W1</span>
          <TextImportant class="">vs</TextImportant>
          <span>Team W2</span>
        </div>

        <!-- Półfinał 2 -->
        <div class="text-center rounded-lg bg-white border-crimson p-2 grid grid-cols-[2fr,1fr,2fr] justify-center gap-2">
          <span>Team W3</span>
          <TextImportant class="">vs</TextImportant>
          <span>Team W4</span>
        </div>
      </div>
    </div>
      <!-- Finał -->
      
    </div>

    <!-- Prawa strona: ćwierćfinały -->
    <div class="flex flex-col items-center space-y-6">
      <h3 class="text-2xl text-crimson mb-6">Ćwierćfinały</h3>

      <!-- Ćwierćfinał 3 -->
      <div class="grid grid-rows-2 items-center gap-2 h-full">
      <div class="text-center rounded-lg bg-white border-crimson p-2 grid grid-cols-[2fr,1fr,2fr] justify-center gap-2">
        <span>Team A2</span>
        <TextImportant class="">vs</TextImportant>
        <span>Team C1</span>
      </div>

      <!-- Ćwierćfinał 4 -->
      <div class="text-center rounded-lg bg-white border-crimson p-2 grid grid-cols-[2fr,1fr,2fr] justify-center gap-2">
        <span>Team B2</span>
        <TextImportant class="">vs</TextImportant>
        <span>Team D1</span>
      </div>
    </div>
    </div>
  </div>
</template>
