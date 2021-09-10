<template>
	<myButton></myButton>
	<button @click="getFun">点击获取</button>
</template>
<script>
import { defineAsyncComponent } from "vue"

const myButton = defineAsyncComponent(() => import("main/myButton"))

export default {
	name: "consumer",
	components: {
		myButton: myButton,
	},
	async setup(props) {
		const list = []
		const twoLargeNumberAdd = import("main/twoLargeNumberAdd")
		console.log(twoLargeNumberAdd)
		twoLargeNumberAdd.then((m) => {
			debugger
		})
	},
}
</script>
