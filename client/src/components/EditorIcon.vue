<template>
  <div class="icon" :class="[`icon--${name}`, `icon--${size}`, { 'has-align-fix': fixAlign }]">
    <img :src="require(`@/assets/icons/${name}.svg`)" :alt="`${name}`" class="icon__svg"/>
  </div>
</template>



<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class EditorIcon extends Vue {
  @Prop() name!: string
  @Prop({ default: 'normal' }) size!: string
  @Prop({ default: null }) modifier!: string
  @Prop({ default: true }) fixAlign!: boolean
}
</script>

<style lang="scss" scoped>
.icon {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 12px;
  height: 12px;
  margin: 0 auto;
  fill: currentColor;
  // &.has-align-fix {
  // 	top: -.1rem;
  // }
  &__svg {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
    margin-top: -1px
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
}

// svg sprite
body > svg,
.icon use > svg,
symbol {
  path,
  rect,
  circle,
  g {
    fill: currentColor;
    stroke: none;
  }
  *[d='M0 0h24v24H0z'] {
    display: none;
  }
}
</style>