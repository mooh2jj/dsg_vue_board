import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'; //메인 컴포넌트 호출
// import List from '@/components/board/List'; //게시판 리스트 컴포넌트 호출
import Read from '@/components/Read'; //Read 컴포넌트 호출
import Create from '@/components/Create'; //Read 컴포넌트 호출
import Detail from '@/components/Detail'; //Read 컴포넌트 호출

Vue.use(Router); //vue 라우터 사용

export default new Router({ //라우터 연결
	routes:[
		// {
		// 	path:'/'
		// 	,name:HelloWorld
		// 	,component:HelloWorld
		// }
		// ,{
		// 	path:'/board/list'
		// 	,name:List
		// 	,component:List
		// }
		{
            path: '/',
            name: 'Read',
            component: Read
		},
		
		{
            path: '/create/:contentId?',
            name: 'Create',
            component: Create
        },
		{
            path: '/detail/:contentId',
            name: 'Detail',
            component: Detail
        }
	]
})