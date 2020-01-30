<template>
    <div id="JD">
        <!--头部公共区域-->
        <header class="header">
            <div class="headerImag w">
                <a href="#">
                    <img src="../../assets/img/header.jpg" alt="">
                </a>
            </div>
        </header>
        <!--快速导航栏-->
        <div class="shortcut">
            <div class="w">
                <ul class="fl city">
                    <li>
                        <i class="f10"></i>
                        北京
                    </li>
                </ul>
                <ul class="fr">
                    <li>
                        <a href="#">你好，请登录</a>
                        <a href="#" class="f10"> 免费注册</a>
                    </li>
                    <li class="space"></li>
                    <li>
                        <a href="#">我的订单</a>
                    </li>
                    <li class="space"></li>
                    <li>
                        <a href="#">我的京东</a>
                        <i></i>
                    </li>
                    <li class="space"></li>
                    <li>
                        <a href="#">京东会员</a>
                    </li>

                    <li class="space"></li>
                    <li>
                        <a href="#">企业采购</a>
                    </li>
                    <li class="space"></li>
                    <li>
                        <a href="#">客户服务</a>
                        <i></i>
                    </li>
                    <li class="space"></li>
                    <li>
                        <a href="#">网站导航</a>
                        <i></i>
                    </li>
                    <li class="space"></li>
                    <li>
                        <a href="#" class="mobile">手机京东
                            <img src="../../assets/img/mobile.png" height="60" width="60" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main"></div>
        <div class="footer"></div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
    @import "./index";
</style>
