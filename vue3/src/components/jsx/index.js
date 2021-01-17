import { h } from 'vue'
export function testJsx(props, context) {
    return h('h3',{},props.title)
}

testJsx.props = ['title']