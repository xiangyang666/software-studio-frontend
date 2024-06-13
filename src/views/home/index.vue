<template>
  <div class="home">
    <div class="main">
      <!-- <dayAndNight /> -->
      <div class="header">
        <div class="site-topbar">
          <div class="container">
            <div class="topbar-nav">
              <a href="#">小米商城</a>
              <span class="sep">|</span>
              <a href="#">MIUI</a>
              <span class="sep">|</span>
              <a href="#">loT</a>
              <span class="sep">|</span>
              <a href="#">云服务</a>
              <span class="sep">|</span>
              <a href="#">天星数科</a>
              <span class="sep">|</span>
              <a href="#">有品</a>
              <span class="sep">|</span>
              <a href="#">小爱开放平台</a>
              <span class="sep">|</span>
              <a href="#">企业团购</a>
              <span class="sep">|</span>
              <a href="">资质证照</a>
              <span class="sep">|</span>
              <a href="#">协议规则</a>
              <span class="sep">|</span>
              <a href="#">下载app</a>
              <span class="sep">|</span>
              <a href="#">智能生活</a>
              <span class="sep">|</span>
              <a href="">Select Location</a>
            </div>
            <div class="topbar-cart">
              <a href="">
                <i class="fa fa-shopping-cart orange" aria-hidden="true"></i>
                <em class="iconfont-cart"></em>购物车
                <span>(0)</span>
              </a>
            </div>
            <div class="topbar-info">
              <a href="">登录</a>
              <span>|</span>
              <a href="">注册</a>
              <span>|</span>
              <span class="message"><a href="">消息通知</a></span>
            </div>
          </div>
        </div>

        <div class="site-header">
          <div class="container">
            <div class="header-logo">
              <a href=""
                ><img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi.com-assets/shop/img/logo-mi2.png"
              /></a>
            </div>
            <div class="header-nav">
              <!-- <ul class="clearfix">
                <li class="nav-item">
                  <a href=""><span>Xiaomi手机</span></a>
                </li>
                <li class="nav-item">
                  <a href=""><span>Redmi红米</span></a>
                </li>
                <li class="nav-item">
                  <a href=""><span>电视</span></a>
                </li>
                <li class="nav-item">
                  <a href=""><span>平板</span></a>
                </li>
                <li class="nav-item">
                  <a href=""><span>家电</span></a>
                </li>
                <li class="nav-item">
                  <a href=""><span>路由器</span></a>
                </li>
                <li class="nav-item">
                  <a href=""><span>服务</span></a>
                </li>
                <li class="nav-item">
                  <a href=""><span>社区</span></a>
                </li>
              </ul> -->
              <topNavigation />
            </div>

            <div class="header-search">
              <form action="" class="clearfix">
                <a href="#"
                  ><input
                    type="search"
                    class="search-header"
                    placeholder="手机"
                /></a>
                <a href="#"
                  ><input type="submit" class="search-btn" value="" /><i
                    class="fa fa-search"
                    aria-hidden="true"
                  >
                    <img
                      style="width: 20px"
                      src="http://hbimg.huaban.com/610b0f9c34a0ede2016d809b8c22faeab8d4584d16e5-elB3Ry"
                    /> </i
                ></a>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Banner />
      <!-- <div class="home-hero-container container">
        <div class="home-hero">
          <div class="swiper">
            <ul id="unit">
              <li>
                <a href=""
                  ><img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/397f2569b126d8fba446b6bbf57ef771.jpg?w=2452&h=920"
                    alt=""
                /></a>
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/397f2569b126d8fba446b6bbf57ef771.jpg?w=2452&h=920"
                    alt=""
                /></a>
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/397f2569b126d8fba446b6bbf57ef771.jpg?w=2452&h=920"
                    alt=""
                /></a>
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/397f2569b126d8fba446b6bbf57ef771.jpg?w=2452&h=920"
                    alt=""
                /></a>
              </li>
            </ul>

            <div class="Btn">
              <a href="javascript:void(0)" id="leftBtn" class="leftBtn">&lt;</a>
              <a href="javascript:void(0)" id="rightBtn" class="rightBtn"
                >&gt;</a
              >
            </div>

            <div class="circles" id="circles">
              <ol>
                <li class="cur"></li>
                <li></li>
                <li></li>
                <li></li>
              </ol>
            </div>
          </div>
          <div class="home-hero-sub">
            <div class="span4">
              <ul class="clearfix">
                <li>
                  <a href="#"
                    ><img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48"
                      alt=""
                    />保障服务</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48"
                      alt=""
                    />企业团购</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48"
                      alt=""
                    />F码通道</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48"
                      alt=""
                    />米粉卡</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48"
                      alt=""
                    />以旧换新</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48"
                      alt=""
                    />话费充值</a
                  >
                </li>
              </ul>
            </div>
            <div class="span16">
              <ul class="clearfix">
                <li class="first">
                  <a href=""
                    ><img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b67117bc92924fb2ff0e7ad2be86084.png?w=632&h=340"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href=""
                    ><img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8dede2520f8dfff9c9b690af498cafe8.jpg?w=632&h=340"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href=""
                    ><img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ac77590368ff636d0b4f6a988133f55.png?w=632&h=340"
                      alt=""
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tools" id="tools">
          <a href=""
            ><i class="fa fa-mobile" aria-hidden="true"></i>
            <h3>手机APP</h3>
            <div class="pop-content">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/78c30d4f259ed43ab20e810a522a6249.png"
                alt=""
              />
              <span> 扫码领取新人百元礼包 </span>
            </div>
          </a>
          <a href=""
            ><i class="fa fa-user" aria-hidden="true"></i>
            <h3>个人中心</h3>
          </a>
          <a href=""
            ><i class="fa fa-wrench" aria-hidden="true"></i>
            <h3>售后服务</h3>
          </a>
          <a href=""
            ><i class="fa fa-headphones" aria-hidden="true"></i>
            <h3>人工客服</h3>
          </a>
          <a href=""
            ><i class="fa fa-shopping-cart orange" aria-hidden="true"></i>
            <h3>购物车</h3>
          </a>
          <a href="#top" id="to" style="display: none"
            ><i class="fa fa-arrow-up" aria-hidden="true"></i>
            <h3>回顶部</h3>
          </a>
        </div>
      </div> -->

      <div class="page-main">
        <div class="container">
          <div class="home-banner-box">
            <a href=""
              ><img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2011078db9b3708d3caae52df7be3cc.png?thumb=1&w=1839&h=180&f=webp&q=90"
                alt=""
            /></a>
          </div>

          <!-- 昼夜交替 -->

          <div class="dayAndNight">
            <dayAndNight />
          </div>

          <accordion />

          <div class="home-brick-box">
            <div class="box-hd">
              <h2 class="title">手机</h2>
              <div class="more">
                <a href=""
                  >查看更多<i
                    class="fa fa-chevron-circle-right"
                    aria-hidden="true"
                  ></i
                ></a>
              </div>
            </div>

            <div class="box-bd clearfix">
              <div class="row">
                <div class="span4">
                  <ul class="clearfix">
                    <li class="brick-item">
                      <a href="">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dcf9ed8c01a7c3d0bf3ecbca3f22537c.png?thumb=1&w=351&h=921&f=webp&q=90"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="span16">
                  <ul class="clearfix">
                    <li class="brick-item">
                      <a href="">
                        <div class="figure">
                          <img
                            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/adde6bae41441887017824f46cf31602.png?thumb=1&w=300&h=300&f=webp&q=90"
                            alt=""
                          />
                        </div>
                        <h3 class="title">Redmi Note 11 Pro系列</h3>
                        <p class="desc">Redmi Note 11 Pro系列</p>
                        <p class="price">
                          1799<span class="num">元</span><span>起</span>
                        </p>
                      </a>
                    </li>
                    <li class="brick-item">
                      <a href="">
                        <div class="figure">
                          <img
                            src="https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202403201526_60b548a0614d956b2d3667a63d513539.png?thumb=1&w=300&h=300&f=webp&q=90"
                            alt=""
                          />
                        </div>
                        <h3 class="title">Redmi Note 11 5G</h3>
                        <p class="desc">5000mAh大电量</p>
                        <p class="price">
                          1199<span class="num">元</span><span>起</span>
                        </p>
                      </a>
                    </li>
                    <li class="brick-item">
                      <a href="">
                        <div class="figure">
                          <img
                            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f2a277341a09a63bbb7bba12d154c4e6.png?thumb=1&w=300&h=300&f=webp&q=90"
                            alt=""
                          />
                        </div>
                        <h3 class="title">黑鲨4S</h3>
                        <p class="desc">磁动力升降肩键</p>
                        <p class="price">
                          2699<span class="num">元</span><span>起</span>
                        </p>
                      </a>
                    </li>
                    <li class="brick-item">
                      <a href="">
                        <div class="figure">
                          <img
                            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e920ac7e3d197923acbd6388b80cc49.png?thumb=1&w=300&h=300&f=webp&q=90"
                            alt=""
                          />
                        </div>
                        <h3 class="title">黑鲨4S Pro</h3>
                        <p class="desc">磁动力升降肩键</p>
                        <p class="price">
                          4799<span class="num">元</span><span>起</span>
                        </p>
                      </a>
                    </li>
                    <li class="brick-item">
                      <a href="">
                        <div class="figure">
                          <img
                            src="https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311281411_fc68b941c011a8bbf67db570d0985d7a.png?thumb=1&w=300&h=300&f=webp&q=90"
                            alt=""
                          />
                        </div>
                        <h3 class="title">Xiaomi Civi</h3>
                        <p class="desc">3200万高清质感自拍</p>
                        <p class="price">
                          2599<span class="num">元</span><span>起</span>
                        </p>
                      </a>
                    </li>
                    <li class="brick-item">
                      <a href="">
                        <div class="figure">
                          <img
                            src="https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311281019_bf131f8cb94d59e370cb84cae6ad5e49.png?thumb=1&w=300&h=300&f=webp&q=90"
                            alt=""
                          />
                        </div>
                        <h3 class="title">Xiaomi MIX 4</h3>
                        <p class="desc">CUP全面屏</p>
                        <p class="price">
                          <span class="num">4999</span>元<span>起</span>
                        </p>
                      </a>
                    </li>
                    <li class="brick-item">
                      <a href="">
                        <div class="figure">
                          <img
                            src="https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310251928_35fb2880108e9aa56fdcf7f894249f26.png?thumb=1&w=300&h=300&f=webp&q=90"
                            alt=""
                          />
                        </div>
                        <h3 class="title">Redmi Note 10 Pro</h3>
                        <p class="desc">天玑1100年度旗舰芯</p>
                        <p class="price">
                          1499<span class="num">元</span><span>起</span
                          ><del
                            style="
                              margin-left: 10px;
                              color: #b0b0b0;
                              font-size: 10px;
                            "
                            >4999元</del
                          >
                        </p>
                      </a>
                    </li>
                    <li class="brick-item">
                      <a href="">
                        <div class="figure">
                          <img
                            src="https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202402221350_8181b68062669419dcb35b42972021e3.png?thumb=1&w=300&h=300&f=webp&q=90"
                            alt=""
                          />
                        </div>
                        <h3 class="title">Redmi Note 10 5G</h3>
                        <p class="desc">5G小金刚|旗舰长续航</p>
                        <p class="price">
                          1099<span class="num">元</span><span>起</span
                          ><del
                            style="
                              margin-left: 10px;
                              color: #b0b0b0;
                              font-size: 10px;
                            "
                            >1699元</del
                          >
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="site-footer">
          <div class="container">
            <div class="footer-service">
              <ul class="list-service clearfix">
                <li>
                  <a href=""
                    ><i class="fa fa-wrench" aria-hidden="true"></i
                    >预约维修服务</a
                  >
                </li>
                <li>
                  <a href=""
                    ><i class="fa fa-slideshare" aria-hidden="true"></i
                    >7天无理由退货</a
                  >
                </li>
                <li>
                  <a href=""
                    ><i class="fa fa-header" aria-hidden="true"></i
                    >15天免费换货</a
                  >
                </li>
                <li>
                  <a href=""
                    ><i class="fa fa-gift" aria-hidden="true"></i>满69包邮</a
                  >
                </li>
                <li>
                  <a href=""
                    ><i class="fa fa-map-marker" aria-hidden="true"></i
                    >520余家售后网点</a
                  >
                </li>
              </ul>
            </div>
            <div class="footer-links clearfix">
              <dl>
                <dt>帮助中心</dt>
                <dd>
                  <a href=""> 账户管理 </a>
                </dd>

                <dd>
                  <a href=""> 购物指南 </a>
                </dd>
                <dd>
                  <a href=""> 订单操作 </a>
                </dd>
              </dl>
              <dl>
                <dt>服务支持</dt>
                <dd>
                  <a href=""> 售后政策 </a>
                </dd>
                <dd>
                  <a href=""> 自助服务 </a>
                </dd>
                <dd>
                  <a href=""> 相关下载 </a>
                </dd>
              </dl>
              <dl>
                <dt>线下门店</dt>
                <dd>
                  <a href=""> 小米之家 </a>
                </dd>
                <dd>
                  <a href=""> 服务网点 </a>
                </dd>
                <dd>
                  <a href=""> 授权体验店/专区 </a>
                </dd>
              </dl>
              <dl>
                <dt>关于小米</dt>
                <dd>
                  <a href=""> 了解小米 </a>
                </dd>
                <dd>
                  <a href=""> 加入小米 </a>
                </dd>
                <dd>
                  <a href=""> 投资者关系 </a>
                </dd>
                <dd>
                  <a href=""> 企业社会责任 </a>
                </dd>
                <dd>
                  <a href=""> 廉洁举报 </a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <a href=""> 关注我们 </a>
                </dt>
                <dd>
                  <a href=""> 新浪微博 </a>
                </dd>
                <dd>
                  <a href=""> 官方微信 </a>
                </dd>
                <dd>
                  <a href=""> 廉洁举报 </a>
                </dd>
                <dd>
                  <a href=""> 联系我们 </a>
                </dd>
              </dl>
              <dl>
                <dt>特色服务</dt>
                <dd>
                  <a href=""> F码通道 </a>
                </dd>
                <dd>
                  <a href=""> 礼物码 </a>
                </dd>
                <dd>
                  <a href=""> 防伪查询 </a>
                </dd>
              </dl>
              <div class="col-contact">
                <p class="phone">400-100-5678</p>
                <p>8:00-18:00 (仅收市话费)</p>
                <a href="" class="spa"
                  ><i class="fa fa-commenting-o" aria-hidden="true"></i
                  >人工客服</a
                >
                <div class="follow">
                  <!-- 关注小米: -->
                  <a href=""><i class="fa fa-weibo" aria-hidden="true"></i></a>
                  <a href=""
                    ><i class="fa fa-weixin" aria-hidden="true"></i
                    ><img
                      src="https://img2.baidu.com/it/u=966007628,1846575161&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayAndNight from "./dayAndNight.vue";
import Banner from "./banner.vue";
import topNavigation from "./topNavigation.vue";
import accordion from "./accordion.vue";
</script>
<script>
export default {
  name: "",
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  // height: 500px;
  // background-color: red;、
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

a {
  text-decoration: none;
}

div {
  display: block;
}

ul {
  list-style: none;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.container {
  width: 1226px;
  margin: 0 auto;
  // position: relative;
}

.header {
  display: block;
}

.header .site-topbar {
  position: relative;
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
}

.header .site-topbar .topbar-nav {
  float: left;
  height: 40px;
  line-height: 40px;
}

.header .site-topbar .topbar-nav a {
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block;
}

.header .site-topbar .topbar-nav .sep {
  margin: 0 0.3em;
  color: #424242;
}

.header .site-topbar .topbar-cart {
  position: relative;
  float: right;
  width: 120px;
  height: 40px;
  margin-left: 15px;
  transition: all 0.2s;
  font-size: 12px;
}

.header .site-topbar .topbar-cart a {
  position: relative;
  z-index: 32;
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #b0b0b0;
  background: #424242;
}

.header .site-topbar .topbar-cart a .iconfont-cart {
  margin-right: 4px;
  font-size: 20px;
  line-height: 20px;
  vertical-align: -4px;
}

.header .site-topbar .topbar-cart a span {
  line-height: 40px;
  text-align: center;
  color: #b0b0b0;
}

.header .site-topbar .topbar-info {
  position: relative;
  float: right;
  height: 40px;
  line-height: 40px;
}

.header .site-topbar .topbar-info a {
  padding: 0 5px;
  text-align: center;
  float: left;
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block;
}

.header .site-topbar .topbar-info span {
  margin: 0;
  float: left;
  color: #424242;
}

.header .site-topbar .topbar-info .message {
  float: left;
  padding: 0 10px;
}

.header .site-topbar .topbar-info .message a {
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block;
  text-align: none;
}

.header .site-header {
  position: relative;
  z-index: 20;
  height: 100px;
}

.header .site-header .header-logo {
  float: left;
  width: 80px;
  margin-top: 12px;
}

.header .site-header .header-logo a {
  position: relative;
  display: block;
  width: 80px;
  height: 80px;
  overflow: hidden;
  text-align: left;
  color: #757575;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header .site-header .header-logo a img {
  padding-bottom: 2px;
  // position: absolute;
  // top: 0;
  // left: -8px;
  z-index: 1;
  width: 60px;
  height: 60px;
}

.header .site-header .header-nav {
  float: left;
  width: 850px;
}

.header .site-header .header-nav ul {
  position: relative;
  z-index: 10;
  float: left;
  width: 1100px;
  height: 88px;
  margin: 0;
  padding: 12px 0 0 30px;
  font-style: 16px;
}

.header .site-header .header-nav ul .nav-category {
  position: relative;
  float: left;
  width: 127px;
  height: 548px;
  padding-right: 15px;
}

.header .site-header .header-nav ul .nav-category a {
  display: block;
  padding: 3px 0 38px;
  color: #333;
}

.header .site-header .header-nav ul .nav-category a span {
  color: #333;
  visibility: hidden;
}

.header .site-header .header-nav ul .nav-category .site-category {
  position: absolute;
  top: 88px;
  left: -92px;
  z-index: 21;
  width: 234px;
  height: 460px;
  font-size: 14px;
}

.header
  .site-header
  .header-nav
  ul
  .nav-category
  .site-category
  .site-category-list {
  margin: 0;
  padding: 20px 0;
  height: 420px;
  border: 0;
  color: #fff;
  width: 234px;
  background-color: rgba(105, 101, 101, 0.6);
}

.header
  .site-header
  .header-nav
  ul
  .nav-category
  .site-category
  .site-category-list
  li {
  height: 42px;
  color: #fff;
}

.header
  .site-header
  .header-nav
  ul
  .nav-category
  .site-category
  .site-category-list
  li
  a {
  color: #fff;
  position: relative;
  display: block;
  padding-left: 30px;
  height: 42px;
  line-height: 42px;
}

.header
  .site-header
  .header-nav
  ul
  .nav-category
  .site-category
  .site-category-list
  li
  a
  .fa-arrow-right {
  position: absolute;
  top: 12px;
  right: 20px;
  line-height: 16px;
  color: #e0e0e0;
}

.header .site-header .header-nav ul .nav-item {
  float: left;
}

.header .site-header .header-nav ul .nav-item a {
  display: block;
  padding: 26px 14px 38px;
  color: #333;
  transition: color 0.2s;
}

.header .site-header .header-nav ul .nav-item a span {
  color: #333;
}

.header .site-header .header-search {
  float: right;
  width: 296px;
  margin-top: 25px;
}

.header .site-header .header-search form {
  position: relative;
  width: 296px;
  height: 50px;
  z-index: 20;
  display: block;
}

.header .site-header .header-search form a:nth-child(1) {
  color: #333;
}

.header .site-header .header-search form a:nth-child(1) .search-header {
  position: absolute;
  top: 0;
  right: 51px;
  z-index: 1;
  width: 223px;
  height: 50px;
  padding: 0 10px;
  font-size: 14px;
  line-height: 48px;
  border: 1px solid #e0e0e0;
  outline: 0;
  transition: all 0.2s;
}

.header .site-header .header-search form a:nth-child(2) {
  color: #333;
}

.header .site-header .header-search form a:nth-child(2) .search-btn {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 52px;
  height: 50px;
  padding: 0 10px;
  font-size: 24px;
  line-height: 24px;
  color: #616161;
  border: 1px solid #e0e0e0;
  outline: 0;
  transition: all 0.2s;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
}

.header .site-header .header-search form a:nth-child(2) i {
  position: absolute;
  top: 22px;
  right: 18px;
  z-index: 3;
  transform: scale(1.5);

  img {
    margin-top: -5px;
    opacity: 0.4;
  }
}

.home-hero-container {
  position: relative;
  z-index: 10;
}

.home-hero-container .home-hero {
  position: relative;
  margin-bottom: 206px;
}

.home-hero-container .home-hero .swiper {
  position: relative;
  overflow: hidden;
  width: 1226px;
  height: 460px;
}

.home-hero-container .home-hero .swiper ul {
  position: relative;
  width: 8000px;
}

.home-hero-container .home-hero .swiper ul li {
  float: left;
}

.home-hero-container .home-hero .swiper ul li a img {
  display: block;
  width: 1226px;
  height: 460px;
}

.home-hero-container .home-hero .Btn a {
  position: absolute;
  top: 40%;
  left: 244px;
  margin-left: -10px;
  font-size: 50px;
  color: #b0b0b0;
  text-align: center;
  opacity: 0.8;
  outline: none;
  padding-bottom: 5px;
}

.home-hero-container .home-hero .Btn a:hover {
  background-color: gray;
}

.home-hero-container .home-hero .Btn .rightBtn {
  left: 97.7%;
}

.home-hero-container .home-hero .circles {
  position: absolute;
  left: 95%;
  bottom: 15px;
  height: 10px;
  margin-left: -30px;
  background-color: rgba(222, 222, 222, 0.4);
  padding: 5px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.home-hero-container .home-hero .circles ol {
  list-style: none;
}

.home-hero-container .home-hero .circles ol li {
  float: left;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  margin-right: 5px;
}

.home-hero-container .home-hero .circles ol .cur {
  background-color: red;
}

.home-hero-container .home-hero .home-hero-sub {
  margin-top: 14px;
  margin-left: -14px;
}

.home-hero-container .home-hero .home-hero-sub .span4 {
  width: 234px;
  float: left;
  margin-left: 14px;
  min-height: 1px;
}

.home-hero-container .home-hero .home-hero-sub .span4 ul {
  margin: 0;
  padding: 3px;
  font-size: 12px;
  text-align: center;
  background: #5f5750;
}

.home-hero-container .home-hero .home-hero-sub .span4 ul li {
  position: relative;
  float: left;
  width: 70px;
  height: 82px;
  padding: 0 3px;
}

.home-hero-container .home-hero .home-hero-sub .span4 ul li a {
  display: block;
  padding-top: 18px;
  text-overflow: ellipsis;
  color: #fff;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.home-hero-container .home-hero .home-hero-sub .span4 ul li a img {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto 4px;
  border: 0;
}

.home-hero-container .home-hero .home-hero-sub .span4 ul li::before {
  position: absolute;
  content: "";
  background: #665e57;
  top: -1px;
  left: 6px;
  width: 64px;
  height: 1px;
}

.home-hero-container .home-hero .home-hero-sub .span4 ul li::after {
  position: absolute;
  content: "";
  background: #665e57;
  top: 6px;
  left: 0;
  width: 1px;
  height: 70px;
}

.home-hero-container .home-hero .home-hero-sub .span16 {
  width: 978px;
  float: left;
  margin-left: 14px;
  min-height: 1px;
}

.home-hero-container .home-hero .home-hero-sub .span16 ul {
  margin: 0;
  padding: 0;
}

.home-hero-container .home-hero .home-hero-sub .span16 ul .first {
  margin-left: 0;
}

.home-hero-container .home-hero .home-hero-sub .span16 ul li {
  margin-left: 15px;
  float: left;
  width: 316px;
  height: 170px;
}

.home-hero-container .home-hero .home-hero-sub .span16 ul li a {
  display: block;
  height: 170px;
  color: #757575;
}

.home-hero-container .home-hero .home-hero-sub .span16 ul li a img {
  display: block;
  width: 316px;
  height: 170px;
}

.home-hero-container .tools {
  position: fixed;
  right: 0;
  top: 200px;
  left: auto;
  color: #757575;
  width: 100px;
  height: 200px;
  background-color: gray;
}

.home-hero-container .tools a {
  cursor: default;
  color: #757575;
  padding-top: 20px;
  text-decoration: none;
  position: relative;
  display: block;
  margin-top: -1px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  text-align: center;
}

.home-hero-container .tools a i {
  transform: scale(2);
  opacity: 0.6;
}

.home-hero-container .tools a h3 {
  opacity: 0.6;
  padding-top: 15px;
  padding-bottom: 15px;
}

.home-hero-container .tools a:hover {
  color: orangered;
}

.home-hero-container .tools a:hover .pop-content {
  opacity: 1;
  visibility: visible;
}

.home-hero-container .tools a .pop-content {
  position: absolute;
  left: -150px;
  top: 0;
  padding: 14px;
  background: #fff;
  border: 1px solid #f5f5f5;
  transition: opacity 0.3s;
  transform: translateZ(0);
  opacity: 0;
  visibility: hidden;
}

.home-hero-container .tools a .pop-content img {
  display: block;
  width: 100px;
  height: 100px;
  margin: 6px auto;
}

.home-hero-container .tools a .pop-content span {
  display: block;
  width: 82px;
  margin: 14px auto 0;
  color: #757575;
  text-align: center;
}

.page-main {
  padding-top: 4px;
  padding-bottom: 12px;
  background: #f5f5f5;

  .container {
    // 昼夜交替
    .dayAndNight {
      // width: 1080px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.page-main .home-banner-box {
  height: 120px;
  margin: 22px 0;
  overflow: hidden;
}

.page-main .home-banner-box a {
  color: #757575;
}

.page-main .home-banner-box a img {
  width: 1226px;
  height: 120px;
  -webkit-aspect-ratio: auto 10.21666667;
}

.page-main .home-brick-box {
  margin-bottom: 8px;
}

.page-main .home-brick-box .box-hd {
  position: relative;
  height: 58px;
}

.page-main .home-brick-box .box-hd .title {
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}

.page-main .home-brick-box .box-hd .more {
  position: absolute;
  top: 0;
  right: 0;
}

.page-main .home-brick-box .box-hd .more a {
  font-size: 16px;
  line-height: 58px;
  color: #424242;
  transition: all 0.4s;
}

.page-main .home-brick-box .box-hd .more a i {
  opacity: 0.3;
}

.page-main .home-brick-box .box-bd .row {
  margin-left: -14px;
}

.page-main .home-brick-box .box-bd .row .span4 {
  width: 234px;
  float: left;
  margin-left: 14px;
  min-height: 1px;
}

.page-main .home-brick-box .box-bd .row .span4 ul {
  margin: 0 0 -14px -14px;
  height: 614px;
  padding: 0;
}

.page-main .home-brick-box .box-bd .row .span4 ul .brick-item {
  height: 614px;
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  transition: all 0.2s linear;
}

.page-main .home-brick-box .box-bd .row .span4 ul .brick-item a {
  display: block;
  width: 100%;
  height: 100%;
}

.page-main .home-brick-box .box-bd .row .span4 ul .brick-item a img {
  width: 234px;
  height: 614px;
  border: 0;
}

.page-main .home-brick-box .box-bd .row .span16 {
  width: 978px;
  float: left;
  margin-left: 14px;
  min-height: 1px;
}

.page-main .home-brick-box .box-bd .row .span16 ul {
  margin: 0 0 -14px -14px;
  width: 992px;
  height: 614px;
  padding: 0;
}

.page-main .home-brick-box .box-bd .row .span16 ul .brick-item {
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  transition: all 0.2s linear;
  height: 300px;
  padding: 0;
  box-sizing: border-box;
}

.page-main .home-brick-box .box-bd .row .span16 ul .brick-item a {
  display: block;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 0;
  transition: all 0.2s linear;

  &:hover {
    margin-top: -2px;
    box-shadow: rgb(192, 192, 192) 0px 4px 12px 1px;
  }
}

.page-main .home-brick-box .box-bd .row .span16 ul .brick-item a .figure {
  width: 160px;
  height: 160px;
  margin: 0 auto 18px;
}

.page-main .home-brick-box .box-bd .row .span16 ul .brick-item a .figure img {
  width: 160px;
  height: 160px;
}

.page-main .home-brick-box .box-bd .row .span16 ul .brick-item a .title {
  margin: 0 10px 2px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  color: #333;
}

.page-main .home-brick-box .box-bd .row .span16 ul .brick-item a .desc {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  color: #b0b0b0;
}

.page-main .home-brick-box .box-bd .row .span16 ul .brick-item a .price {
  margin: 0 10px 14px;
  text-align: center;
  color: #ff6700;
}

.page-main .home-brick-box .home-brick-row {
  margin-bottom: 8px;
}

.page-main .home-brick-box .home-brick-row .box-hd {
  position: relative;
  height: 58px;
}

.page-main .home-brick-box .home-brick-row .box-hd .title {
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}

.page-main .home-brick-box .home-brick-row .box-hd .more {
  position: absolute;
  right: 0;
  top: 0;
}

.page-main .home-brick-box .home-brick-row .box-hd .more .tab-list {
  margin: 0;
  padding: 16px 0;
  font-size: 16px;
}

.page-main .home-brick-box .home-brick-row .box-hd .more .tab-list .tab-active {
  color: #ff6700;
  border-bottom: 2px solid #ff6700;
}

.page-main .home-brick-box .home-brick-row .box-hd .more .tab-list li {
  cursor: pointer;
  margin: 0 0 0 30px;
  display: inline-block;
  padding: 0;
  color: #424242;
  transition: border 0.3s;
}

.page-main .home-brick-box .home-brick-row .box-bd .row {
  margin-left: -14px;
}

.page-main .home-brick-box .home-brick-row .box-bd .row .span4 {
  width: 234px;
  float: left;
  margin-left: 14px;
  min-height: 1px;
}

.page-main .home-brick-box .home-brick-row .box-bd .row .span4 ul {
  margin: 0 0 -14px -14px;
  height: 614px;
  padding: 0;
}

.page-main .home-brick-box .home-brick-row .box-bd .row .span4 ul .brick-item {
  height: 614px;
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  transition: all 0.2s linear;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span4
  ul
  .brick-item
  a {
  display: block;
  width: 100%;
  height: 100%;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span4
  ul
  .brick-item
  a
  img {
  width: 234px;
  height: 614px;
  border: 0;
}

.page-main .home-brick-box .home-brick-row .box-bd .row .span16 {
  width: 978px;
  float: left;
  margin-left: 14px;
  min-height: 1px;
}

.page-main .home-brick-box .home-brick-row .box-bd .row .span16 ul {
  margin: 0 0 -14px -14px;
  width: 992px;
  height: 614px;
  padding: 0;
}

.page-main .home-brick-box .home-brick-row .box-bd .row .span16 ul .brick-item {
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  transition: all 0.2s linear;
  height: 300px;
  padding: 0;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span16
  ul
  .brick-item
  a {
  display: block;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 0;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span16
  ul
  .brick-item
  a
  .figure {
  width: 160px;
  height: 160px;
  margin: 0 auto 18px;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span16
  ul
  .brick-item
  a
  .figure
  img {
  width: 160px;
  height: 160px;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span16
  ul
  .brick-item
  a
  .title {
  margin: 0 10px 2px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  color: #333;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span16
  ul
  .brick-item
  a
  .desc {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  color: #b0b0b0;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span16
  ul
  .brick-item
  a
  .price {
  margin: 0 10px 14px;
  text-align: center;
  color: #ff6700;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span16
  ul
  .brick-item-s {
  height: 93px;
  padding-top: 50px;
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  transition: all 0.2s linear;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span16
  ul
  .brick-item-s
  a
  .figure {
  position: absolute;
  right: 35px;
  top: 48px;
  width: 48px;
  height: 48px;
  color: #ff6700;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span16
  ul
  .brick-item-s
  a
  .figure
  .fa {
  transform: scale(1.5);
  text-align: center;
  background: rgba(200, 191, 194, 0.6);
  border-radius: 50%;
  color: orangered;
  padding: 10px;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span16
  ul
  .brick-item-s
  a
  .more {
  display: block;
  margin: 0 110px 0 30px;
  font-size: 18px;
  color: #333;
}

.page-main
  .home-brick-box
  .home-brick-row
  .box-bd
  .row
  .span16
  ul
  .brick-item-s
  a
  .more
  small {
  display: block;
  font-size: 12px;
  color: #757575;
}

.page-main .home-brick-box .home-brick-row-box {
  margin-bottom: 8px;
}

.page-main .home-brick-box .home-brick-row-box .box-hd {
  position: relative;
  height: 58px;
}

.page-main .home-brick-box .home-brick-row-box .box-hd .title {
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}

.page-main .home-brick-box .home-brick-row-box .box-hd .more {
  position: absolute;
  right: 0;
  top: 0;
}

.page-main .home-brick-box .home-brick-row-box .box-hd .more .tab-list {
  margin: 0;
  padding: 16px 0;
  font-size: 16px;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-hd
  .more
  .tab-list
  .tab-active {
  color: #ff6700;
  border-bottom: 2px solid #ff6700;
}

.page-main .home-brick-box .home-brick-row-box .box-hd .more .tab-list li {
  cursor: pointer;
  margin: 0 0 0 30px;
  display: inline-block;
  padding: 0;
  color: #424242;
  transition: border 0.3s;
}

.page-main .home-brick-box .home-brick-row-box .box-bd .row {
  margin-left: -14px;
}

.page-main .home-brick-box .home-brick-row-box .box-bd .row .span4 {
  width: 234px;
  float: left;
  margin-left: 14px;
  min-height: 1px;
}

.page-main .home-brick-box .home-brick-row-box .box-bd .row .span4 ul {
  margin: 0 0 -14px -14px;
  height: 614px;
  padding: 0;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span4
  ul
  .brick-item {
  height: 300px;
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  transition: all 0.2s linear;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span4
  ul
  .brick-item
  a {
  display: block;
  width: 100%;
  height: 100%;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span4
  ul
  .brick-item
  a
  img {
  width: 234px;
  height: 300px;
  border: 0;
}

.page-main .home-brick-box .home-brick-row-box .box-bd .row .span16 {
  width: 978px;
  float: left;
  margin-left: 14px;
  min-height: 1px;
}

.page-main .home-brick-box .home-brick-row-box .box-bd .row .span16 ul {
  margin: 0 0 -14px -14px;
  width: 992px;
  height: 614px;
  padding: 0;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item {
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  transition: all 0.2s linear;
  height: 300px;
  padding: 0;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item
  a {
  display: block;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 0;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item
  a
  .figure {
  width: 160px;
  height: 160px;
  margin: 0 auto 18px;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item
  a
  .figure
  img {
  width: 160px;
  height: 160px;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item
  a
  .title {
  margin: 0 10px 2px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  color: #333;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item
  a
  .desc {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  color: #b0b0b0;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item
  a
  .price {
  margin: 0 10px 14px;
  text-align: center;
  color: #ff6700;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item-a {
  height: 93px;
  padding-top: 50px;
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  transition: all 0.2s linear;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item-a
  a
  .figure {
  position: absolute;
  right: 20px;
  top: 32px;
  width: 80px;
  height: 80px;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item-a
  a
  .title {
  color: #333;
  margin: -10px 110px 5px 30px;
  font-size: 14px;
  font-weight: 400;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item-a
  a
  .price {
  margin: 0 110px 0 30px;
  font-size: 12px;
  color: #ff6700;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item-s {
  height: 93px;
  padding-top: 50px;
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  transition: all 0.2s linear;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item-s
  a
  .figure {
  position: absolute;
  right: 35px;
  top: 48px;
  width: 48px;
  height: 48px;
  color: #ff6700;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item-s
  a
  .figure
  .fa {
  transform: scale(1.5);
  text-align: center;
  background: rgba(200, 191, 194, 0.6);
  border-radius: 50%;
  color: orangered;
  padding: 10px;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item-s
  a
  .more {
  display: block;
  margin: 0 110px 0 30px;
  font-size: 18px;
  color: #333;
}

.page-main
  .home-brick-box
  .home-brick-row-box
  .box-bd
  .row
  .span16
  ul
  .brick-item-s
  a
  .more
  small {
  display: block;
  font-size: 12px;
  color: #757575;
}

.site-footer .footer-service {
  padding: 27px 0;
  border-bottom: 1px solid #e0e0e0;
}

.site-footer .footer-service .list-service {
  margin: 0;
  padding: 0;
}

.site-footer .footer-service .list-service li:first-child {
  border-left: 0;
}

.site-footer .footer-service .list-service li {
  float: left;
  width: 19.8%;
  height: 25px;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  border-left: 1px solid #e0e0e0;
}

.site-footer .footer-service .list-service li a {
  color: #616161;
  transition: color 0.2s;
}

.site-footer .footer-links {
  padding: 40px 0;
}

.site-footer .footer-links dl {
  float: left;
  width: 160px;
  margin: 0;
}

.site-footer .footer-links dl dt {
  margin: -1px 0 26px;
  font-size: 14px;
  line-height: 1.25;
  color: #424242;
}

.site-footer .footer-links dl dd {
  margin: 10px 0 0;
  font-size: 12px;
}

.site-footer .footer-links dl dd a {
  color: #616161;
}

.site-footer .footer-links dl dd a:hover {
  color: orangered;
}

.site-footer .footer-links .col-contact {
  float: right;
  width: 251px;
  border-left: 1px solid #e0e0e0;
  text-align: center;
  color: #616161;
}

.site-footer .footer-links .col-contact .phone {
  font-size: 22px;
  line-height: 1;
  color: #ff6700;
}

.site-footer .footer-links .col-contact p {
  margin: 0 0 15px 0;
  font-size: 12px;
}

.site-footer .footer-links .col-contact .spa {
  padding: 10px 20px;
  color: #ff6700;
  background-color: #fff;
  width: 118px;
  height: 28px;
  font-size: 12px;
  line-height: 28px;
  display: inline-block;
  margin: 0;
  padding: 0;
  border: 1px solid #ff6700;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s;
}

.site-footer .footer-links .col-contact .spa:hover {
  background-color: orangered;
  color: white;
}

.site-footer .footer-links .col-contact .spa:hover i {
  color: white;
}

.site-footer .footer-links .col-contact .spa i {
  color: #ff6700;
}

.site-footer .footer-links .col-contact .follow {
  font-size: 12px;
  margin-top: 20px;
  position: relative;
}

.site-footer .footer-links .col-contact .follow a {
  text-decoration: none;
}

.site-footer .footer-links .col-contact .follow a:hover {
  color: orangered;
}

.site-footer .footer-links .col-contact .follow a img {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 20px;
  left: 100px;
}

.site-footer .footer-links .col-contact .follow a i {
  color: #757575;
  transform: scale(1.5);
  margin-left: 8px;
  margin-top: -3px;
}

.site-footer .footer-links .col-contact .follow a:nth-child(2) img {
  display: none;
}

.site-footer .footer-links .col-contact .follow a:nth-child(2):hover img {
  display: block;
}

.site-info {
  padding: 30px 0;
  position: relative;
  background: white;
}

.site-info .logo {
  position: absolute;
  top: 0;
  left: -15px;
  display: block;
}

.site-info .logo img {
  width: 80px;
  height: 65px;
}

.site-info .info-text {
  color: #b0b0b0;
  padding-left: 67px;
}

.site-info .info-text .sites {
  margin: 0;
  line-height: 18px;
}

.site-info .info-text .sites a {
  color: #757575;
}

.site-info .info-text .sites a span {
  margin: 0;
  font-family: sans-serif;
}

.site-info .info-text .sites a:hover {
  color: orangered;
}

.site-info .info-text p {
  margin: 0;
  line-height: 18px;
}

.site-info .info-text p a {
  color: #b0b0b0;
}

.site-info .info-text p a:hover {
  color: orangered;
}

.site-info .info-text p span {
  color: #b0b0b0;
}

.site-info .info-text .info-links {
  height: 28px;
  margin: 4px 0 15px;
}

.site-info .info-text .info-links a {
  display: inline-block;
}

.site-info .info-text .info-links a img {
  width: auto;
  height: 28px;
  margin-left: 0;
}

.site-info .info-text .slogan {
  clear: both;
  margin: 30px auto 0;
  width: 40%;
  height: 19px;
  display: block;
  text-align: left;
  color: #b0b0b0;
  font-size: 17px;
  opacity: 0.6;
}
</style>
