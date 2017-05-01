<template>
	<Form :model="formISO" :label-width="100"  style="height:200px;margin:20px; padding-right:100px;">
		<Form-item label="虚拟机名称">
			<Input v-model="formISO.newName" placeholder="请输入"></Input>
		</Form-item>
		<Form-item  label="ISO文件">
			<Select  clearable v-model="formISO.newISO" placeholder="请选择">

				<Option-group label="热门">
					<Option v-for="item in isosHot" :value="item.value" :key="item">{{ item.label }}</Option>
				</Option-group>
				<Option-group label="Ubuntu">
					<Option v-for="item in isosUbuntu" :value="item.value" :key="item">{{ item.label }}</Option>
				</Option-group>
				<Option-group label="Centos">
					<Option v-for="item in isosCentos" :value="item.value" :key="item">{{ item.label }}</Option>
				</Option-group>
				<Option-group label="Windows">
					<Option v-for="item in isosWindows" :value="item.value" :key="item">{{ item.label }}</Option>
				</Option-group>
			</Select>
		</Form-item>
		<Form-item label="规格">
			<Select filterable clearable v-model="formISO.newISO" placeholder="请选择">
				<Option style="position: absolute !important;"  v-for="item in flavors" :value="item.value" :key="item">{{ item.label }}</Option>
			</Select>
		</Form-item>
		<Form-item label="磁盘">
			<Input v-model="formISO.newDisk" placeholder="请输入"></Input>
		</Form-item>
		<Form-item label="网络模式">
			<Radio-group v-model="formISO.newNetwork">
				<Radio label="NAT"></Radio>
				<Radio label="Bridge"></Radio>
			</Radio-group>
		</Form-item>
		<Form-item label="创建数量">
			<Input v-model="formISO.newNumber" style="margin-bottom:40px;" placeholder="请输入"></Input>
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
				flavors:[
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
				isosHot:[
				{
					value: 'ubuntu1404s',
					label: "Ubuntu 14.04 LTS Server"
				},
				{
					value: 'ubuntu1404d',
					label: "Ubuntu 14.04 LTS Desktop"
				},
				{
					value: 'centos6',
					label: "Centos 6 x64"
				},
				{
					value: 'windows10',
					label: "Windows 10"
				}
				],
				isosUbuntu:[
				{
					value: 'ubuntu1404s',
					label: "Ubuntu 14.04 LTS Server"
				},
				{
					value: 'ubuntu1404d',
					label: "Ubuntu 14.04 LTS Desktop"
				},
				{
					value: 'ubuntu1604s',
					label: "Ubuntu 16.04 LTS Server"
				},
				{
					value: 'ubuntu1604d',
					label: "Ubuntu 16.04 LTS Desktop"
				},
				],
				isosWindows:[
				{
					value: 'windows10',
					label: "Windows 10"
				},
				{
					value: 'windows7',
					label: "Windows 7"
				},
				],
				isosCentos:[
				{
					value: 'centos6',
					label: "Centos 6"
				},
				{
					value: 'centos7',
					label: "Centos 7"
				},
				],
				formISO: {
					newName: '',
					newISO: '',
					newFlavor:'',
					newDisk:0,
					newNetwork:'',
					newNumber:1

				}
			}
		}
	};


	$("Form").on("click", ".ivu-select-dropdown", function() {
		var that = this;
		setTimeout(function() {
			var dropdown = $(that).find(".ivu-select-dropdown");
			dropdown.css({"position": "bsolute !important"});
		}, 1);
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.ivu-select-dropdown {
		position: absolute !important;
	}
</style>
