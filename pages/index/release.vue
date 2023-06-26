<template>
		<f-navbar title="发布栏" fontColor="#ffffff" bgColor="#ffa200" :scrollTop="scrollTop" navbarType='0'></f-navbar>
	<view class="minWidth">
	<view class="title">
		请选择你要发布的栏目
	</view>
	<!-- 同城信息发布 -->
	<view class="classificationBox">
		<view class="InformationBox">
			 同城信息发布
		</view>
		<view class="nav-list">
			<view class="item" v-for="(item,index) in itemList" @click="onJump(item.url)">
				<image :src="item.image" mode=""></image>
				<view class="">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>

	<!-- 校园信息发布 -->
	<view class="classificationBox">
		<view class="InformationBox">
			 校园信息发布
		</view>
		<view class="nav-list">
			<view class="item" v-for="(item,index) in itemList" @click="onJump(item.url)">
				<image :src="item.image" mode=""></image>
				<view class="">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
	<!-- 商家入职 -->
	<view class="classificationBox">
		<view class="InformationBox">
			 商家入职
		</view>
	    <view class="merchant">
	    	我有店铺，入驻同城好店
	    	超低成本，本地宣传，简单有效，方便快捷!
	    </view>
	</view>
	<!-- 骑手入住 -->
	<view class="classificationBox">
		<view class="InformationBox">
			 骑手入住
		</view>
		<view class="merchant">
			我有店铺，入驻同城好店
			超低成本，本地宣传，简单有效，方便快捷!
		</view>
	</view>
		</view>
</template>

<script>
	export default{
		data(){
			return{
				scrollTop: 0,
				itemList: [{
						image: '../../static/projectIcon/1.jpg',
						name: '发布交友',
						url: ''
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: '发布跑腿',
						url: ''
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: '发布兼职 ',
						url: ''
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: '发布全职/简历',
						url: ''
					},
				
					{
						image: '../../static/projectIcon/1.jpg',
						name: '发布本地服务',
						url: ''
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: '发布问答求助',
						url: ''
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: ' 发布资讯',
						url: ''
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: '发布广告',
						url: ''
					},
					{
						image: '../../static/projectIcon/1.jpg',
						name: '发布其他',
						url: ''
					}
				],
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.minWidth {
		width: 680rpx;
		margin: 0 auto;
	}
	
	.title{
		text-align: center;
		font-size: 30rpx;
		color: #767676;
		margin-top: 50rpx;
	}
	.nav-list {
		padding: 10rpx 0;
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
	
	.InformationBox{
		font-size: 30rpx;
		font-weight: bold;
		color: #ff7a05;
		text-align: center;
	}
	
	.classificationBox{
		margin-top: 30rpx;
	}
	
	.merchant{
		font-size: 26rpx;
	}
</style>