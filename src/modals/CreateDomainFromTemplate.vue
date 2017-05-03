<template>
	<Form :model="form" :label-width="100"  style="height:200px;margin:20px; padding-right:100px;">
		<Form-item label="虚拟机名称">
			<Input @on-change="getNewDomainInfo" v-model="form.newName" placeholder="请输入"></Input>
		</Form-item>
		<Form-item label="主机模板">
			<Select @on-change="getNewDomainInfo" filterable clearable v-model="form.newTemplate" placeholder="请选择">
				<Option  v-for="item in templates" :value="item.value" :key="item">{{ item.label }}</Option>
			</Select>
		</Form-item>
		<Form-item label="网络模式">
			<Radio-group @on-change="getNewDomainInfo" v-model="form.newNetwork">
				<Radio label="NAT"></Radio>
				<Radio label="Bridge"></Radio>
			</Radio-group>
		</Form-item>
		<Form-item label="创建数量">
			<Input @on-change="getNewDomainInfo" v-model="form.newNumber" style="margin-bottom:40px;" placeholder="请输入"></Input>
		</Form-item>
	</Form>
</template>

<script>


	export default {
		name: 'hello',
		data () {
			return {
				self: this,
				selectionids:'',
				search:'',
				createDomainForm: false,
				templates:[
				{
					value: '1',
					label: "Core(3),Memory(2048MB) "
				},
				{
					value: '2',
					label: "Core(4),Memory(6666MB)"
				},
				{
					value: '3',
					label: "Core(2),Memory(7777MB)"
				}

				],
				form: {
					newName: '',
					newTemplate:'',
					newNetwork:'',
					newNumber:1

				}
			}
		},
		methods: {
			getNewDomainInfo() {
				this.$emit('transferNewDomainInfo', this.form);
			}
		}
	};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.ivu-select-dropdown {
		position: absolute !important;
	}
</style>
