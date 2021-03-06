<template>
  <div id="app">
    <Header />
    <div id="content">
      <transition :name="transitionName" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div class="dimmed" v-show="dimmedStatus">
      <alert />
    </div>
  </div>
</template>
<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import { Component, Prop, Vue } from 'vue-property-decorator'
import Header from './components/Header.vue'
import Alert from './components/Alert.vue'
import '@/assets/style/transition.scss'
import '@/assets/style/editor-style.scss'

const DEFAULT_TRANSITION = 'perspective'
export default Vue.extend({
  components: {
    Header,
    Alert,
  },
  computed: {
    ...mapGetters(['dimmedStatus']),
  },
  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName

      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION

      next()
    })
  },
})
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: 'Noto Sans KR', 'Malgun Gothic';
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
a {
  text-decoration: none;
  color: inherit;
}
a:visited {
  color: inherit;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  cursor: pointer;
}
#content {
  padding: 65px 150px 20px 150px;
  margin: auto;
  perspective: 800px;
}
* {
  box-sizing: border-box;
}
.ov-h {
  overflow: hidden;
}
.dimmed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
</style>

