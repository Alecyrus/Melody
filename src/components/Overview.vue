<template>
	<div class="overview">
		<div class="layout-breadcrumb">
			<Breadcrumb>
				<Breadcrumb-item>主页</Breadcrumb-item>
				<Breadcrumb-item>系统管理</Breadcrumb-item>
				<Breadcrumb-item>概览</Breadcrumb-item>
			</Breadcrumb>
		</div>



		<div class="firstrow">
			<Row  type="flex" justify="space-around" class="code-row-bg">
				<Col span="4">
					<Card>
						<p slot="title">标准卡片</p>
						<p>卡片内容</p>
						<p>卡片内容</p>
						<p>卡片内容</p>
						</Card>
				</Col>
				<Col span="4">
					<Card>
						<p slot="title">标准卡片</p>
						<p>卡片内容</p>
						<p>卡片内容</p>
						<p>卡片内容</p>
						</Card>
				</Col>
				<Col span="4">
					<Card>
						<p slot="title">标准卡片</p>
						<p>卡片内容</p>
						<p>卡片内容</p>
						<p>卡片内容</p>
						</Card>
				</Col>
				<Col span="4">
					<Card>
						<p slot="title">标准卡片</p>
						<p>卡片内容</p>
						<p>卡片内容</p>
						<p>卡片内容</p>
						</Card>
				</Col>
			</Row>

		</div>
		




	</div>
</template>

<script>
	export default {
		name: 'hello',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.layout-breadcrumb{
		padding: 10px 15px 0;
	}

	.firstrow {
		background: #F5F7F9;
		margin:15px auto;
		/*box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, .10), 0px 0px 8px 0px rgba(0, 0, 0, .04);*/
	}
</style>
