<script setup>
const {t, locale, locales} = useI18n();
const {data, error, pending, refresh} = useFetch('/api/test', {
  server: false,
  headers: {
    'accept-language': locale.value,
  },
  watch: [locale],
});
</script>

<template>
  <div>
    <pre>Current locale: {{ locale }}</pre>
    <pre>Available locales: {{ locales }}</pre>
    Switch locale (will trigger a network request watch):
    <select v-model="locale">
      <option v-for="locale in locales" :key="locale" :value="locale">{{ locale }}</option>
    </select>

    <hr/>

    <h2>Accept-language received by backend:</h2>
    <pre>{{ data }}</pre>
  </div>
</template>

<style>

</style>
