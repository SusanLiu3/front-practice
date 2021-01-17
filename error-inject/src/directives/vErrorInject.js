import Vue from 'vue'
Vue.directive('error-inject',{
    bind(el){
        let newDom=document.createElement('span')
        newDom.style.visibility = 'hidden'
        newDom.style.color='#f45'
        newDom.style.fontSize='14px'
        newDom.style.marginLeft='5px'
        el.append(newDom)
    },
    update(el,binding){
        // 判断值是否改变
        if (binding.value.text===binding.oldValue.text){
            return
        }
        let dom=el.lastChild
        dom.innerHTML=binding.value.text
        dom.style.visibility=binding.value.visible
    }
})