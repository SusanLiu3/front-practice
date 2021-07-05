<template>
	<div id="app">
		<div id="rete" style="width:500px;height:500px"></div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	mounted() {
		/* eslint-disable */
		const { Rete, ConnectionPlugin, VueRenderPlugin } = this
		var numSocket = new Rete.Socket("Number value")

		var VueNumControl = {
			props: ["readonly", "emitter", "ikey", "getData", "putData"],
			template:
				'<input type="number" :readonly="readonly" :value="value" @input="change($event)" @dblclick.stop="" @pointerdown.stop="" @pointermove.stop=""/>',
			data() {
				return {
					value: 0,
				}
			},
			methods: {
				change(e) {
					this.value = +e.target.value
					this.update()
				},
				update() {
					if (this.ikey) this.putData(this.ikey, this.value)
					this.emitter.trigger("process")
				},
			},
			mounted() {
				this.value = this.getData(this.ikey)
			},
		}

		class NumControl extends Rete.Control {
			constructor(emitter, key, readonly) {
				super(key)
				this.component = VueNumControl
				this.props = { emitter, ikey: key, readonly }
			}

			setValue(val) {
				this.vueContext.value = val
			}
		}
    // 节点组件
		class NumComponent extends Rete.Component {
			constructor() {
				super("My Test")
			}
			builder(node) {
        // 修改节点
				var out1 = new Rete.Output("num", "Number", numSocket)

				return node.addControl(new NumControl(this.editor, "num22")).addOutput(out1)
			}
			worker(node, inputs, outputs) {
        // 处理数据
				outputs["num"] = node.data.num
			}
		}

		;(async () => {
			var container = document.querySelector("#rete")
			const numInstance = new NumComponent()
			var editor = new Rete.NodeEditor("demo@0.1.0", container)
			editor.use(ConnectionPlugin)
			editor.use(VueRenderPlugin)

			var engine = new Rete.Engine("demo@0.1.0")

			editor.register(numInstance)
			engine.register(numInstance)

			var n1 = await numInstance.createNode({ num22: 2 })

			n1.position = [80, 200]

			editor.addNode(n1)

			// editor.connect(n1.outputs.get("num"), add.inputs.get("num"))

			editor.on("process nodecreated noderemoved connectioncreated connectionremoved", async () => {
				console.log("process")
				await engine.abort()
				await engine.process(editor.toJSON())
			})

			editor.view.resize()
			// AreaPlugin.zoomAt(editor)
			editor.trigger("process")
		})()
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
