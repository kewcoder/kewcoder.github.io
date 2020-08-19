<template>
<div :class="settings">
    <topheader />
    <settings />
    <main>
        <transition
          name="slide-fade"
        >
            <Nuxt />
        </transition>
    </main>
</div>        
</template>

<script>
export default {
  computed:{
    settings(){
      return this.$store.state.theme+" "+ this.$store.state.primaryColor;
    }
  },
}
</script>
