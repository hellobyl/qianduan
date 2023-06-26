<template>
	<view class="content">

		<view class="text-area">
			<input type="text" class="inputBox" placeholder="  请输入信息">
		</view>

		<view class="text-area">
			<swiper class="swiper" circular :indicator-dots="false" :autoplay="true">
				<swiper-item v-for="(item,index) in bannerList">
					<image class="images" style="width: 100%;" mode="widthFix" :src="item.image"></image>
				</swiper-item>
			</swiper>

		</view>
		<view class="nav-list">
			<view class="item" v-for="(item,index) in itemList" @click="onJump(item.url)">
				<image :src="item.image" mode=""></image>
				<view class="">
					{{item.name}}
				</view>
			</view>
		</view>

		<!-- 广告栏展示 -->
		<view class="minWidth">


			<view class="flex imgBox">
				<view class="imgBoxleft ">

				</view>

				<view class="imgBoxRight">

					<view class="imgleft">

					</view>


					<view class="imgleft" style="margin-top: 10rpx;">


					</view>


				</view>


			</view>

			<view class="flex" style="margin-top: 20rpx;">
				<view class="btnBox">

				</view>

				<view class="btnBox">

				</view>

				<view class="btnBox">

				</view>
			</view>

		</view>
		
		
		<!-- 发布按钮 -->
		<view class="btnRelease" @click="onJump('/release')">
			  发布+
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				bannerList: [{
						image: "../../static/other/1.jpg"
					},
					{
						image: "../../static/other/2.jpg"
					},
					{
						image: "../../static/other/3.jpg"
					}
				],
				itemList: [{
						image: '../../static/projectIcon/1.jpg',
						name: '同城跑腿',
						url: ''
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: '低价快递',
						url: ''
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: '兼职全职',
						url: ''
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: '同城服务',
						url: ''
					},

					{
						image: '../../static/projectIcon/1.jpg',
						name: '二手集市',
						url: ''
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: '公益助农',
						url: ''
					},

					{
						image: '../../static/projectIcon/1.jpg',
						name: '玩乐美食',
						url: ''
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: '同城外卖',
						url: '/pages/my/myAccount'
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: '水果鲜花',
						url: '/pages/my/myAccount'
					},

					{
						image: '../../static/projectIcon/1.jpg',
						name: '问答求助',
						url: '/pages/my/myAccount'
					}
				],


			}
		},
		onLoad() {

		},
		methods: {
			onJump(url) {
				uni.navigateTo({
					url: "release"
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.minWidth {
		width: 680rpx;
		margin: 0 auto;
	}

	.inputBox {
		width: 650rpx;
		height: 50rpx;
		background-color: #ececec;
		border-radius: 50rpx;
		margin: 30rpx auto;
		font-size: 26rpx;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.imgBoxleft {
		width: 50rpx;

	}

	.nav-list {
		padding: 30rpx 0;
		border-radius: 20rpx;
		margin: 4rpx 0 0;
		display: flex;
		align-items: center;
		flex-wrap: wrap;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 30rpx;
			width: 20%;

			image {
				width: 42rpx;
				margin: 0 auto;
				height: 42rpx;
			}

			view {
				font-size: 22rpx;
				color: #555;
				white-space: nowrap;
				margin-top: 16rpx;
			}
		}

		// .item:nth-child(n+5) {
		// 	margin-top: 30rpx;
		// }
	}

	.swiper {
		margin-top: 30rpx;
		height: 240rpx;

	}

	.imgBoxleft {
		width: 60%;
		height: 210rpx;
		background-color: #0c5546;
			border-radius: 10rpx;
	}

	.imgBoxRight {
		width: 48%;
		height: 210rpx;
		// background-color: #21bedd;
		
	}

	.imgleft {
		width: 90%;
		height: 100rpx;
		background-color: #dd06d3;
		margin-left: 10%;
			border-radius: 10rpx;
	}

	.imgRight {
		width: 48%;
		height: 100rpx;
		background-color: #dd06d3;
			border-radius: 10rpx;
	}

	.titleBox {
		text-align: center;
		height: 100rpx;
		background-color: #dd06d3;
		margin-top: 10rpx;
		line-height: 100rpx;
	
	}

	.imgBox {
		/* width: 650rpx;
		margin: 0 auto; */
	}

	.btnBox {
		width: 200rpx;
		height: 100rpx;
		background-color: #0c5546;
		border-radius: 10rpx;
	}
	
	.btnRelease{
		width: 90rpx;
		height: 90rpx;
		background-color: #ff9500;
		border-radius: 50rpx;
		color: #ececec;
		line-height: 90rpx;
		text-align: center;
		position: absolute;
		right: 20rpx;
		bottom: 200rpx;
		font-size: 20rpx;
	}
	
	
</style>