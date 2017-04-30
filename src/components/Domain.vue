<template>
	<div class="domains">
		<div class="layout-breadcrumb">
			<Breadcrumb>
				<Breadcrumb-item>主页</Breadcrumb-item>
				<Breadcrumb-item>系统管理</Breadcrumb-item>
				<Breadcrumb-item>虚拟机</Breadcrumb-item>
			</Breadcrumb>
		</div>



		<transition  appear name="fadeDown">

			<div class="header">

				<Row type="flex" justify="end" class="code-row-bg">

					<Col span="4">
						<Button @click="createDomainForm = true" size="large" type="primary" shape="circle" icon="plus">创建</Button>
					</Col>
					<Col span="4" :offset="10">
						<Input  style="box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, .10), 0px 0px 8px 0px rgba(0, 0, 0, .04);width:200px" v-model="search" icon="ios-search" placeholder="请输入..." ></Input>
					</Col>
					<Col span="4" :offset="1">
						<Button-group shape="circle">
							<Button icon="play" @click="multDomain('start')" type="primary"></Button>
							<!-- </Poptip> -->
							<Button icon="android-refresh" @click="multDomain('restart')" type="primary"></Button>
							<Button icon="pause" @click="multDomain('shutdown')" type="primary"></Button>
							<Button icon="ios-trash" @click="multDomain('destroy')" type="primary"></Button>
						</Button-group>
						
					</Col>
				</Row>

			</div>

		</transition>


		<transition  appear name="zoom">
			<div class="domainsform">
				<Table :context="self" :data="tableData1"  @on-selection-change="getSelection" :columns="tableColumns1" stripe></Table>
				<div style="padding: 20px;overflow: hidden">
					<div style="float: right;">
						<Page :total="100" :current="1" @on-change="changePage"></Page>
					</div>
				</div>

			</div>
		</transition>



		<div >
			<Modal
			width="600"
			v-model="createDomainForm"
			@on-ok="createDomain"
			@on-cancel="cancel">
			<p slot="header" style="color:#E45340;text-align:start; padding-top:10px;font-size: 30px;height:40px;">
				创建虚拟机
			</p>
			<Tabs value="name1">
				<Tab-pane label="自ISO文件" name="name1">
					<div>

					<Form :model="formISO" :label-width="100"  style="height:200px;margin:20px; padding-right:100px;">
						<Form-item label="虚拟机名称">
							<Input v-model="formISO.newName" placeholder="请输入"></Input>
						</Form-item>
						<div label="ISO文件">
							<Select   clearable v-model="formISO.newISO" placeholder="请选择">
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
						</div>
						<Form-item label="规格">
								<Select filterable clearable v-model="formISO.newISO" placeholder="请选择">
									<Option v-for="item in flavors" :value="item.value" :key="item">{{ item.label }}</Option>
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
					</div>
				</Tab-pane>
				<Tab-pane label="自主机模板" name="name2">




				</Tab-pane>
				<Tab-pane label="克隆其他主机" name="name3">克隆其他主机</Tab-pane>
			</Tabs>

		</Modal>
	</div>





</div>
</template>

<script>
	export default {
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

				},
				tableData1: this.mockTableData1(),
				tableColumns1: [
				{
					type: 'selection',
					width: 60,
					align: 'center'
				},
				{
					title: '名称',
					key: 'name'
				},
				{
					title: '服务器',
					key: 'server',
					render (row, column, index) {
						return `${row.server}`;
					}
				},
				{
					title: '配置',
					key: 'domaininfo',
					render (row, column, index) {
						return `<Poptip trigger="hover" title="${row.domaininfo.flavor}" placement="bottom">
						<tag>${row.domaininfo.flavor}</tag>
						<div slot="content">
							<ul>
								<li style="text-align: center;padding: 4px">处理器：{{ row.domaininfo.cpu }}</li>
								<li style="text-align: center;padding: 4px">内存：{{ row.domaininfo.memory }}</li>
								<li style="text-align: center;padding: 4px">磁盘：{{ row.domaininfo.disk }}</li>
							</ul>			
						</div>
					</Poptip>`;
				}
			},
			{
				title: '状态',
				key: 'status',
				render (row) {
					const color = row.status == 1 ? 'yellow' : row.status == 2 ? 'green' : row.status == 3 ? 'red' : 'blue';
					const text = row.status == 1 ? '构建失败' : row.status == 2 ? '运行中' : row.status == 3 ? '已关机' : '正在构建';
					return `<tag loading type="dot" color="${color}">${text}</tag>`;
				}
			},
			
			{
				title: '操作',
				key: 'domainid',
				width: 300,
				align: 'center',
				render (row, column, index) {
					return `<Button-group shape="circle">
					<i-button icon="android-desktop"  @click="getVNC(${row.domainid})" type="ghost"></i-button>
					<i-button icon="play" @click="startDomain(${row.domainid})" type="ghost"></i-button>
					<i-button icon="android-refresh" @click="restartDomain(${row.domainid})" type="ghost"></i-button>
					<i-button icon="pause" @click="shutdownDomain(${row.domainid})" type="ghost"></i-button>
					<i-button icon="ios-trash" @click="destroyDomain(${row.domainid})" type="ghost"></i-button>
				</Button-group>
				`;
			}
		}
		]
	}
},
methods: {
	mockTableData1 () {
		let data = [];
		for (let i = 0; i < 8; i++) {
			data.push({
				name: '虚拟机' + Math.floor(Math.random () * 100 + 1),
				status: Math.floor(Math.random () * 3 + 1),
				server: 'Server_' + Math.floor(Math.random () * 100 + 1),
				domainid: Math.floor(Math.random () * 100 + 1),
				domaininfo: 
				{
					flavor: 'flavor' + Math.floor(Math.random () * 100 + 1),
					cpu:  Math.floor(Math.random () * 5 + 1) + " 核",
					memory: Math.floor(Math.random () * 1000 + 1000) +" MB",
					disk: Math.floor(Math.random () * 100 + 100) +" GB"
				},
				time: Math.floor(Math.random () * 7 + 1),
				update: new Date()
			})
		};
		return data;
	},
	formatDate (date) {
		const y = date.getFullYear();
		let m = date.getMonth() + 1;
		m = m < 10 ? '0' + m : m;
		let d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		return y + '-' + m + '-' + d;
	},
	changePage () {         
		this.tableData1 = this.mockTableData1();
	},

	// Muti domains
	getSelection(s) {
		if (arguments[0].length > 0) {
			this.selectionids = new Array();
			for (var i=0;i<arguments[0].length;i++)
			{

				console.log(arguments[0][i].domainid);

				this.selectionids.push(arguments[0][i].domainid);
			}
			console.log(this.selectionids);

		}
		else {
			this.selectionids = new Array();

		}
	},
	multDomain(s) {
		this.$Notice.success({
			title: '批量操作虚拟机' + s + '  ' + this.selectionids
		});
	},

	//Domain actions
	getVNC(s) {
		this.$Notice.success({
			title: '成功获取VNC地址' + s
		});
	},
	startDomain(s) {
		this.$Notice.success({
			title: '成功开启虚拟机'  + s
		});
	},
	restartDomain(s) {
		this.$Notice.success({
			title: '成功重启虚拟机' + s
		});
	},
	shutdownDomain(s) {
		this.$Notice.success({
			title: '虚拟机关机成功' + s
		});
	},
	destroyDomain(s) {
		this.$Notice.success({
			title: '销毁虚拟机成功' + s
		});
	},
	// create a domain
	createDomain() {
		this.$Notice.success({
			title: '创建虚拟机成功'
		});
	},
	cancel() {
		this.$Notice.success({
			title: '取消创建虚拟机'
		});
	}
	
	
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.layout-breadcrumb{
		padding: 10px 15px 0;
	}


	.domainsform {
		margin:20px;
		box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, .10), 0px 0px 8px 0px rgba(0, 0, 0, .04);

	}
	.header {
		margin-top: 40px;
	}

</style>
