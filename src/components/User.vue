[<template>
<div class="layout">
    <Row type="flex">
        <transition  name="fadeLeft" appear>
            <i-col :span="spanLeft" class="layout-menu-left">
             
                <Menu accordion active-name="overview"   :open-names="['1']" class="nagv" theme="dark" width="auto" @on-select="changeRouter">
                    <div class="layout-logo-left">
                        <transition  name="fade">
                            <a href="/" :class="{ active: show}" >{{logoTitle}}
                            </a>
                        </transition>
                    </div>
                    <Submenu name="1">
                        <template slot="title">

                            <Icon type="android-settings" size="22"></Icon>
                            <transition  name="fade">
                                <span class="mainMenu" v-if="show" >系统管理</span>
                            </transition>
                        </template>
                        <Menu-item name="overview" v-if="userLevel >=1">

                            <Icon type="android-compass" :size="iconSize"></Icon>
                            <transition  name="fade">
                                <span v-if="show"  class="layout-text">概览</span>
                            </transition>
                        </Menu-item>
                        

                        <Menu-item name="domains" v-if="userLevel >= 1 ">
                            <Icon type="ios-monitor" :size="iconSize"></Icon>
                            <transition  name="fade">
                                <span v-if="show" class="layout-text">虚拟机</span>
                            </transition>
                        </Menu-item>
                        <Menu-item name="hosts" v-if="userLevel >= 2" >
                            <Icon type="ios-monitor-outline" :size="iconSize"></Icon>
                            <transition  name="fade">
                                <span v-if="show"  class="layout-text">物理机</span>
                            </transition>
                        </Menu-item>
                        <Menu-item name="groups" v-if="userLevel >= 1" >
                            <Icon type="android-folder" :size="iconSize"></Icon>
                            <transition  name="fade">
                                <span v-if="show"  class="layout-text">项目机组</span>
                            </transition>

                        </Menu-item>
                        <Menu-item name="logs" v-if="userLevel >= 3">
                            <Icon type="android-document" :size="iconSize"></Icon>
                            <transition  name="fade">
                                <span v-if="show"  class="layout-text">日志管理</span>
                            </transition>
                        </Menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-paper" size="22"></Icon>
                            <transition  name="fade">
                                <span class="mainMenu" v-if="show"  >模板管理</span>
                            </transition>

                        </template>
                        <Menu-item name="networks" v-if="userLevel >= 3">
                            <Icon type="network" :size="iconSize"></Icon>
                            <transition  name="fade">
                                <span v-if="show"  class="layout-text">网络管理</span>
                            </transition>
                        </Menu-item>
                        <Menu-item name="storage" v-if="userLevel >= 3">
                            <Icon type="cube" :size="iconSize"></Icon>
                            <transition  name="fade">
                                <span v-if="show"  class="layout-text">存储管理</span>
                            </transition>
                        </Menu-item>
                        <Menu-item name="flavors" v-if="userLevel >= 1">
                            <Icon type="ios-browsers" :size="iconSize"></Icon>
                            <transition  name="fade">
                                <span v-if="show"  class="layout-text">规格管理</span>
                            </transition>
                        </Menu-item>
                        <Menu-item name="images" v-if="userLevel >= 1">
                            <Icon type="soup-can" :size="iconSize"></Icon>
                            <transition  name="fade">
                                <span v-if="show"  class="layout-text">镜像管理</span>
                            </transition>
                        </Menu-item>
                    </Submenu>

                    <Submenu name="3" v-if="userLevel >= 3">
                        <template slot="title" >
                            <Icon type="ios-keypad" size="22"></Icon>
                            <transition  name="fade">
                                <span class="mainMenu" v-if="show" >身份管理</span>
                            </transition>

                        </template>
                        <Menu-item name="quotas" v-if="userLevel >= 3">
                            <Icon type="social-buffer" :size="iconSize"></Icon>
                            <transition  name="fade">
                                <span v-if="show"  class="layout-text">配额管理</span>
                            </transition>
                        </Menu-item>
                        <Menu-item name="account" v-if="userLevel >= 3">
                            <Icon type="android-people" :size="iconSize"></Icon>
                            <transition  name="fade">
                                <span v-if="show"  class="layout-text">用户管理</span>
                            </transition>
                        </Menu-item>
                        <Menu-item name="premissions" v-if="userLevel >= 3">
                            <Icon type="ios-locked" :size="iconSize"></Icon>
                            <transition  name="fade">
                                <span v-if="show"  class="layout-text">权限管理</span>
                            </transition>
                        </Menu-item>
                    </Submenu>



                </Menu>

           
        </i-col>
    </transition >
    <i-col :span="spanRight">

        <transition  name="fadeDown" appear>
            <div class="layout-header">


                <Row type="flex" justify="end">
                    <Col span="22" class="toggle">
                        <i-button type="text" @click="toggleClick">
                            <Icon type="navicon" size="32"></Icon>
                        </i-button>

                    </Col>
                    <Col span="2" > 
                        <Dropdown @on-click="changeRouter">
                            <avatar :username="userName" :lighten="-11" class="avatar" :size="40"></avatar>

                            <Dropdown-menu slot="list" >
                                <Dropdown-item name="userinfo">个人信息</Dropdown-item>
                                <Dropdown-item name="settings">设置</Dropdown-item>
                                <Dropdown-item divided name="">退出登录</Dropdown-item>
                            </Dropdown-menu>
                        </Dropdown>
                    </Col>


                </Row>


            </div>
        </transition>
        <div class="layout-content">
            <!-- <div class="layout-content-main"> -->

            <transition name="component-fade" mode="out-in" appear>
                <router-view></router-view>
            </transition>
            <!--  </div> -->
        </div>
        <div class="layout-copy">
            Copyright &copy; 2017 HITNSLAB.
        </div>
    </i-col>
</Row>
</div>
</template>

<script>
  import Avatar from 'vue-avatar/dist/Avatar';
  export default {
    data () {
      return {
        spanLeft: 4,
        spanRight: 20,
        userLevel: 3,
        logoTitle: "Melody",
        show: true,
    }
},
computed: {
  iconSize () {
    return this.spanLeft === 4 ? 16 : 20;
},
userName () {
    console.log(this.$store.getters.getUsername);
    return this.$store.getters.getUsername;
}
},
methods: {
  toggleClick () {
    if (this.spanLeft === 4) {
      this.spanLeft = 1;
      this.spanRight = 23;
      this.show = false;
      this.logoTitle = "M";
  } else {
      this.spanLeft = 4;
      this.spanRight = 20;
      this.show = true;
      this.logoTitle = "Melody";
  }
},
changeRouter () {
    console.log(arguments[0]);
    if (arguments[0] == "") {
        this.$router.push('/');
    }
    else{
        this.$router.push('/user/'+this.$store.getters.getUsername+'/'+arguments[0]);
    }
}
},
components: {
  Avatar
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        text-align: start;
        border-radius: 4px;
        overflow: hidden;
        white-space: nowrap;


    }
    
    .layout-content{
        min-height: 500px;
        margin: 15px;
        /*overflow: hidden;*/
        /*background: #fff;*/
        /*border-radius: 4px;*/
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #303030;
        min-height: 740px;
        border-radius: 5px;
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, .60), 0px 0px 8px 0px rgba(0, 0, 0, .04);

    }
    .layout-header{
        height: 60px;
        background: #fff;
        z-index: 1;
        border-radius: 5px;
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, .10), 0px 0px 8px 0px rgba(0, 0, 0, .04);
    }
    .layout-logo-left{
        width: 100%;
        height: 90px;
        padding-top: 20px;
        font-size: 40px;
        text-align: center;
        background: #E45340;
        /* font-family: "Vladimir Script"; */

        
        margin-bottom: 40px;
        white-space: nowrap;
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, .40), 0px 0px 8px 0px rgba(0, 0, 0, .04);
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
        font-family: Arial; 
        
    }

    .active {
        font-family: "Vladimir Script";
    }
    span {
        margin-left: 20px;
        font-size: 14px;
    }
    .mainMenu {
        font-size: 16px;
        margin-bottom: 10px;
    }

    li.ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected {
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, .70), 0px 0px 8px 0px rgba(0, 0, 0, .04);
        z-index:7;
    }

    a {
        color: white;
        font-family: "Broadway";
        margin: 10px auto;
    }
    a:hover {
        color: #dddddd;
        margin-top: -1px;
    }


    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .avatar {
      margin:10px auto;
  }
  .toggle {
    margin:10px auto;
}
.exit {
    margin:15px auto;

}
.nagv {
    background: #303030;
}



</style>