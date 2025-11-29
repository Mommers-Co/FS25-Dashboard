<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    <Card title="Cash" :value="formatCurrency(data.cash)" />
    <Card title="Debt" :value="formatCurrency(data.debt)" />
    <Card title="Owned Land" :value="data.land + ' ha'" />
    <Card title="Weekly Income" :value="formatCurrency(data.income)" />
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '#app'
import { formatCurrency } from '@/utils/formatter'

const { data } = await useFetch('/api/sync/overview')
</script>
