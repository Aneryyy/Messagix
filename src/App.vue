<template>
  <navbar :chatid="chatid" :chats="chats" :originalCount="0"/>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      chats: [
        {id: 1, name: 'TestUser#0000', status: 'online', userImage: require('@/assets/imgs/screen-6.jpg')},
        {id: 2, name: 'TestUser#0000', status: 'offline', userImage: require('@/assets/imgs/back.png')},
        {id: 3, name: 'TestUser#0000', status: 'notDisturb', userImage: require('@/assets/imgs/back.png')},
      ],
      chatid: 0,
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+Pro:wght@900&display=swap');

*{
	padding: 0;
	margin: 0;
	border: 0;
	font-family: Roboto;
	cursor: default;
	scrollbar-color: #303030 #3f3f3f;
	scrollbar-width: thin;
}
*,*:before,*:after{
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}

nav,footer,header,aside{display: block;}

html,body{
	height: 100%;
	width: 100%;
	font-size: 100%;
	line-height: 1;
	font-size: 14px;
	overflow: hidden;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	scrollbar-color: #3B00CB #949494;
	scrollbar-width: thin;
	background-color: #222222;
}
input,button,textarea{font-family:inherit;}

input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner {padding:0;border:0;}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li, li{list-style: none;}
img{vertical-align: top;}

h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}

body::-webkit-scrollbar {
	width: 7px;               
}
body::-webkit-scrollbar-track {
	background: white;        
}
body::-webkit-scrollbar-thumb {
	background-color: #3B00CB;    
}
</style>
