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

						<Input v-model="value4" icon="ios-search" placeholder="请输入..." style="width: 200px"></Input>

					</Col>
					<Col span="4" :offset="1">

						<Button-group shape="circle">
							<Button icon="play" @click="startDomain" type="primary"></Button>
							<Button icon="android-refresh" @click="restartDomain" type="primary"></Button>
							<Button icon="pause" @click="shutdownDomain" type="primary"></Button>
							<Button icon="ios-trash" @click="destroyDomain" type="primary"></Button>
						</Button-group>



					</Col>
				</Row>


			</div>

		</transition>


		<transition  appear name="zoom">
			<div class="domainsform">
				<Table :context="self" :data="tableData1" :columns="tableColumns1" stripe></Table>
				<div style="padding: 20px;overflow: hidden">
					<div style="float: right;">
						<Page :total="100" :current="1" @on-change="changePage"></Page>
					</div>
				</div>

			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				self: this,
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
				key: 'domianid',
				width: 300,
				align: 'center',
				render (row, column, index) {
					return `<Button-group shape="circle">
					<i-button icon="android-desktop"  @click="getVNC(${row.domianid})" type="ghost"></i-button>
					<i-button icon="play" @click="startDomain(${row.domianid})" type="ghost"></i-button>
					<i-button icon="android-refresh" @click="restartDomain(${row.domianid})" type="ghost"></i-button>
					<i-button icon="pause" @click="shutdownDomain(${row.domianid})" type="ghost"></i-button>
					<i-button icon="ios-trash" @click="destroyDomain(${row.domianid})" type="ghost"></i-button>
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
				domianid: Math.floor(Math.random () * 100 + 1),
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

		//ACTION
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
		margin-top: 20px;
	}

</style>
