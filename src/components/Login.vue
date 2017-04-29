<template>
  <div class="login">

    <!--     Background Section -->
    <section>
     <video autoplay loop muted  style="width:100%" >

      <source src="./static/cable.mp4" type="video/mp4">
      </video>
    </section>

    <!--     Logo Section -->
    <section>
    <transition appear name="zoom">
        <h1>{{ logo_title }}</h1>
      </transition>

    </section>


    <!--     Login Section -->
    <section class="login_form" >
    <transition appear name="fade">
      <Row type="flex" justify="center" >

        <Col span="4">
          <Form ref="loginForm" :model="loginForm" :rules="loginRule">
            <Form-item prop="user">
              <Input type="text" v-model="loginForm.username" placeholder="Username">
                <Icon type="person" slot="prepend"></Icon>
              </Input>
            </Form-item>
            <Form-item prop="password">
              <Input type="password" v-model="loginForm.password" placeholder="Password">
                <Icon type="locked" slot="prepend"></Icon>
              </Input>
            </Form-item>
            <Form-item>
              <Button  type="ghost" shape="circle"  @click="userLogin('loginForm')">登录</Button>
            </Form-item>
          </Form></Col>

        </Row>
      </transition>


        <!--     Copyright Section -->
        <transition appear name="fade">
        <Row type="flex" justify="center">
          <p>
            Copyright &copy; 2017 HITNSLAB.
          </p>
        </Row>
      </Row>
      </transition>
    </section>


  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        logo_title: 'Melody',
        loginForm: {
          username: '',
          password: ''
        },
        loginRule: {
          user: [
          // FIXME required: TRUE
          { required: false, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 4, message: '密码长度不能小于4位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      userLogin(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$store.dispatch({
              type: 'SET_USER_INFO',
              username: this.loginForm.username,
              password: this.loginForm.password
            });
            this.$Message.success("Username: "+this.loginForm.username+" Password: "+this.loginForm.password);
            this.$router.push('/user/'+this.$store.getters.getUsername+"/overview");

          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    margin-top: 200px;
    font-family: "Vladimir Script";
    font-weight: normal;
    font-size: 120px;
    color: #eeeeee;
  }

  p {
    margin-top: 50px;
    color: #bbbbbb;
  }

  video {
    position: fixed;
    right:0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    overflow:hidden;
    width: auto;
    z-index: -99999;
    -webkit-filter:brightness(.5);
  }

  .login_form {
    margin-top: 100px;
    
  }
</style>
