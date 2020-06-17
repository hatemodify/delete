import { CategoryModel } from '@/model/CategoryModel'

export const CATEGORY_THUMB = {
  CT01: require('@/assets/images/thumb_js.jpg'),
  CT02: require('@/assets/images/thumb_ts.jpg'),
  CT03: require('@/assets/images/thumb_react.jpg'),
  CT04: require('@/assets/images/thumb_vue.jpg'),
  CT05: require('@/assets/images/thumb_vue.jpg'),
  CT06: require('@/assets/images/thumb_svelte.jpg'),
  CT07: require('@/assets/images/thumb_node.jpg'),
}

export const CATEGORY_NAME = {
  CT01: 'Javascript',
  CT02: 'Typescript',
  CT03: 'React',
  CT04: 'Vue',
  CT05: 'Angular',
  CT06: 'Svelte',
  CT07: 'Node.js',
}

export const CATEGORY:Array<CategoryModel> = [
  {
    name:'Javascript',
    code:'CT01' ,
  },
  {
    name:'Typescript',
    code:'CT02' ,
  },
  {
    name:'React',
    code:'CT03' ,
  },
  {
    name:'Vue',
    code:'CT04' ,
  },
  {
    name:'Angular',
    code:'CT05' ,
  },
  {
    name:'Svelte',
    code:'CT06' ,
  },
  {
    name:'Node.js',
    code:'CT07' ,
  },
]
