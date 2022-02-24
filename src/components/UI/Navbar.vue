<template>
    <nav>
        <div class="content">
            <div>
                <div class="menu--Button" @click="openMenu" :class="{opened: menuOpened}">
                    <div class="menu--Button-Item"></div>
                    <div class="menu--Button-Item"></div>
                    <div class="menu--Button-Item"></div>
                </div>
                <div class="logo">
                    <h2 class="logo">Messagix</h2>
                </div>
            </div>
            <div>
                <li>
                    <div class="messages"></div>
                    <div v-if="count != 0" class="messages-count">{{ count }}</div>
                </li>
                <li>
                    <div class="user">
                        <img src="" alt="">
                    </div>
                </li>
            </div>
        </div>
        <div class="menu--left" :class="{opened: menuOpened}">
            <h2>Чаты</h2>
            <div class="chats">
                <a :href="'/chat/' + chat.id" v-for="chat in chats" :key="chat.id" class="chat" :class="{selected: chat.id == $route.params.chatid}">
                    <div class="chat--image" :class="{online: chat.status == 'online', offline: chat.status == 'offline', notDisturb: chat.status == 'notDisturb'}">
                        <img :src="chat.userImage" alt="">
                    </div>
                    <div class="chat--information">
                        <h3 class="chat--name">{{ chat.name }}</h3>
                    </div>
                </a>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'navbar',
    props: {
        originalCount: {
            type: Number,
            required: true,
        },
        chats: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            count: 0,
            menuOpened: false,
        }
    },
    methods: {
        openMenu() {
            this.menuOpened = !this.menuOpened
        },
    },
    mounted() {
        this.count = this.originalCount
        if ( this.count > 99 ) {
            this.count = '99+'
        }
    }
}
</script>
<style scoped>

nav {
    height: 70px;
    background: #303030;
    z-index: 500;
}

nav .content {
    max-width: 1400px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}

nav .content > div {
    padding: 0 20px;
    display: flex;
    align-items: center;
}

nav .content > div li {
    margin-left: 15px;
}

nav .menu--Button {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
}

nav .menu--Button-Item {
    width: 35px;
    height: 5px;
    background: white;
    border-radius: 100px;
    cursor: pointer;
    transition: background 1s;
}

nav .menu--Button.opened .menu--Button-Item {
    background: rgb(59,0,203);
    background: linear-gradient(45deg, rgba(59,0,203,1) 0%, rgba(143,0,199,1) 100%);
}

nav .menu--Button-Item:first-child {
    margin-bottom: 5px;
}

nav .menu--Button-Item:last-child {
    margin-top: 5px;
}

nav h2.logo {
    color: #929292;
    font-weight: bold;
    font-size: 18px;
}

nav .user {
    width: 40px;
    height: 40px;
    background: #929292;
    border-radius: 100%;
}

nav .messages {
    width: 30px;
    height: 30px;
    background: url('@/assets/imgs/chat.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
}

nav .messages-count {
    width: 14px;
    height: 14px;
    background: red;
    border-radius: 100%;
    color: white;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: absolute;
    transform: translateX(20px) translateY(-15px);
}

nav .menu--left {
    position: absolute;
    background: #292929;
    width: 30%;
    height: calc(100% - 70px);
    transition: transform 0.3s;
    transform: translateX(-100%);
}

nav .menu--left.opened {
    transform: translateX(0px);
}

nav .menu--left h2 {
    font-size: 24px;
    color: #929292;
    font-weight: bold;
    margin: 10px 0;
    text-align: center;
}

nav .menu--left .chats {
    max-height: 100%;
    overflow-y: auto;
}

nav .menu--left .chat {
    margin: 15px;
    display: flex;
    height: 60px;
    background: #3f3f3f;
    border-radius: 100px;
    align-items: center;
    cursor: pointer;
    transition: background 0.3s;
}

nav .menu--left .chat:hover {
    background: #4f4f4f;
}

nav .menu--left .chat:first-child {
    margin-top: 0;
}

nav .menu--left .chat--image {
    overflow: hidden;
    width: 40px;
    height: 40px;
    margin: 10px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border 0.3s;
    cursor: pointer;
}

nav .menu--left .chat--image.online {
    border: 2px solid #0f0;
    padding: 2px;
}

nav .menu--left .chat--image.offline {
    border: none;
    padding: 0;
}

nav .menu--left .chat--image.offline img {
    width: 40px;
    height: 40px;
}

nav .menu--left .chat--image.notDisturb {
    border: 2px solid #ffff00;
    padding: 0;
}

nav .menu--left .chat--image img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 100%;
    cursor: pointer;
}

nav .menu--left .chat--name {
    color: #929292;
    font-weight: bold;
    cursor: pointer;
}

nav .menu--left .chat.selected {
    background: #303030;
    cursor: default;
}

nav .menu--left .chat.selected .chat--image {
    cursor: default;
}

nav .menu--left .chat.selected .chat--image img {
    cursor: default;
}

nav .menu--left .chat.selected .chat--name {
    cursor: default;
}

</style>