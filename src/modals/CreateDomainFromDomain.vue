<template>
	<Form :model="form" :label-width="100"  style="height:200px;margin:20px; padding-right:100px;">
		<Form-item label="虚拟机名称">
			<Input @on-change="getNewDomainInfo" v-model="form.newName" placeholder="请输入"></Input>
		</Form-item>
		
		<Form-item label="源主机">
			<Select @on-change="getNewDomainInfo" filterable clearable v-model="form.newDomainTemplate" placeholder="请选择">
				<Option  v-for="item in domains" :value="item.value" :key="item">{{ item.label }}</Option>
			</Select>
		</Form-item>
		<Form-item label="创建数量">
			<Input @on-change="getNewDomainInfo" v-model="form.newNumber"  style="margin-bottom:40px;" placeholder="请输入"></Input>
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
				domains:[
				{
					value: '1',
					label: "Domain 3 "
				},
				{
					value: '2',
					label: "Domain 1"
				},
				{
					value: '3',
					label: "Domain 2"
				}

				],
				form: {
					newName: '',
					newDomainTemplate: '',
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
