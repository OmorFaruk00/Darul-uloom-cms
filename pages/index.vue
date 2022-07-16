<template>
	<div class="bg">
		<div class="">
			<div class="welcome">
				<h1 aria-label="welcome"></h1>
			</div>
			<div class="d-flex justify-content-end h-100">

				<div class="login">
					<div class="login-logo ">
						<img src="/images/logo.png" alt="">

					</div>
					<div class="login-header">
						<h2 class="">Central Management System | Darul Uloom Moniram</h2>
					</div>
					<div class="login-header">
						<h3>Sign In</h3>
						<div class="d-flex justify-content-end social_icon">

						</div>
					</div>


					<div class="card-body">
						<div class="alert alert-danger" v-if="login_error">
							<strong>{{ login_error }}!</strong>
						</div>

						<div class="input-group form-group pb-2">
							<div class="input-group-prepend">
								<span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
										viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd"
											d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
											clip-rule="evenodd" />
									</svg></span>
							</div>
							<input type="text" class="form-control" placeholder="username" v-model="login.email"
								autocomplete>

						</div>
						<p v-if="errors.email" v-text="errors.email[0]" class="text-danger"></p>

						<div class="input-group form-group pb-3">
							<div class="input-group-prepend">
								<span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
										viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd"
											d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
											clip-rule="evenodd" />
									</svg></span>
							</div>
							<input type="password" class="form-control" placeholder="password" v-model="login.password">
						</div>
						<p v-if="errors.password" v-text="errors.password[0]" class="text-danger"></p>


						<div class="row">
							<div class="col-sm-12 col-md-6 col-xl-6">
								<div class="remember">
									<input type="checkbox" class="text-white">Remember Me
								</div>

							</div>
							<div class="col-sm-12 col-md-6 col-xl-6">
								<div class="forgot">
									<a href="#" class="text-danger">Forgot your password?</a>
								</div>
							</div>
						</div>
						<div class="form-group py-4">
							<!-- <nuxt-link class="btn float-right login_btn" to="/app">Login</nuxt-link> -->
							<button class="btn float-right login_btn" @click="userLogin">Login</button>
						</div>

					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<script>

export default {
	auth: false,
	mounted() {


	},
	data() {
		return {
			login: {
				email: '',
				password: ''
			},
			errors: [],
			login_error: ''
		}
	},
	methods: {
	
		async userLogin() {
			await this.$auth.loginWith('laravelSanctum', { data: this.login }).then(res=>{				
				if(res.status==203){					
					this.login_error = res.data.message
				}
				this.$toaster.success("Login Successful");
			    this.$router.push('/app');
			}).catch(error=>{
				console.log(error)
			});
			
			
		}





	}
}
</script>
<style scoped>
.bg {
	background: linear-gradient(to bottom,
			rgba(0, 0, 0, 0.2) 0%,
			rgba(0, 0, 0, 0.2) 100%),
		url("http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg");

	/* background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg'); */
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
	/* position: relative; */

}

.welcome {
	top: 50%;
	left: 40%;
	transform: translate(-50%, -50%);
	color: red !important;
	position: absolute;
	font-size: 80px;
}

.login-logo {
	display: flex;
	justify-content: center;
}

.login-logo img {
	height: 100px;
	border-radius: 50px;

}

.login {
	padding-top: 5%;
	/* margin-right: 20px; */
	height: 100vh;
	margin-top: auto;
	margin-bottom: auto;
	width: 400px;
	background-color: rgba(0, 0, 0, 0.5) !important;
}

.social_icon span {
	font-size: 60px;
	margin-left: 10px;
	color: #FFC312;
}

.social_icon span:hover {
	color: white;
	cursor: pointer;
}

.login-header h2 {
	color: white;
	text-align: center;
	font-size: 25px;
	padding: 50px 20px;
}

.login-header h3 {
	color: white;
	padding-left: 20px;
}

.social_icon {
	position: absolute;
	right: 20px;
	top: -45px;
}

.input-group-prepend span {
	width: 50px;
	background-color: #FFC312;
	color: black;
	border: 0 !important;
}

.remember {
	color: #fff;
}

input:focus {
	outline: 0 0 0 0 !important;
	box-shadow: 0 0 0 0 !important;

}

.remember {
	color: white;
}

.remember input {
	width: 20px;
	height: 20px;
	margin-left: 15px;
	margin-right: 5px;
}

.login_btn {
	color: black;
	background-color: #FFC312;
	width: 100px;
}

.login_btn:hover {
	color: black;
	background-color: white;
}

.links {
	color: white;
}

.links a {
	margin-left: 4px;
}

body {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #3f81b3 url(https://source.unsplash.com/DSwBHyWKiVw/1280x720) no-repeat center;
	background-size: cover;
	overflow: hidden;
}

h1 {
	position: relative;
	font-family: 'Roboto', Arial, sans-serif;
	font-size: calc(10px + 10vw);
	font-weight: 700;
	color: #f5f5f5;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	perspective: 500px;
}

h1::before,
h1::after {
	content: attr(aria-label);
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(-50%, -50%);
	text-shadow: 0.01em 0.01em 0.01em rgba(0, 0, 0, 0.3);
}

h1::before {
	animation: floatAbove 3.5s ease-in-out infinite;
	-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
	clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
}

h1::after {
	opacity: 0.65;
	filter: blur(0.02em);
	transform: translate(-50%, -50%) rotateX(21deg);
	animation: floatBelow 3.5s ease-in-out infinite;
	-webkit-clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
	clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
}

@keyframes floatAbove {
	50% {
		transform: translate(-50%, -60%);
		-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
		clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 60%);
	}
}

@keyframes floatBelow {
	50% {
		transform: translate(-50%, -60%) rotateX(10deg);
		-webkit-clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
		clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
	}
}
</style>