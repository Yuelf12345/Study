# vue2官方文档：https://v2.cn.vuejs.org/v2/guide/

# vue基础属性(el data template methods render computed watch)

## el: 挂载(string | element)提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。在实例挂载之后，元素可以用 vm.$el 访问。
    语法1: const vm = new Vue({
        el:'#app'   //id //el:'.app' class //el:'div'  element
    })
        2: const vm = new Vue({});
           vm.$mount('#app');

## data: 数据(object | function) 写成函数类型在某一组件修改data数据不好影响到其他组件数据(函数返回对象内存地址不同)
    语法1：const vm = new Vue({
            data:{msg:'对象数据'}
        })
        2：const vm = new Vue({
            data(){return{msg:'函数数据'} }
        })

##  template: 模板(string) 替换挂载元素内的全部内容，除分发slot
    语法1：const vm = new Vue({
            el:'#app'
            template:`<h1>模板1</h1>`
        })
        2:  <script type="x-template" id="tp3"><h1>模板3</h1></script>
            const vm = new Vue({
            template:'#tp3'
        })
        3:  <h-w></h-w>
            components:{
                    'hW':{
                    template:`<h1>模板1</h1>`
                }
            }

## methods: 方法({[key:string]:function}) 放置页面中的业务逻辑，js方法一般都放置在methods中，用来写方法.页面刷新就会执行
    语法：const vm = new Vue({
            el:'#app',
            data:{num:0},
            methods:{add(){num++} }
        })

## render:  渲染函数(function(creteElement){return VNode})。用js语言来构建DOM。vue提供一个createElement函数,可以简写为 h。
    语法： render(h){
            return h('div',{style:{'color': red} },'hello')
        }

## computed: 计算属性({[key:string]:function}) 计算属性基于它们的响应式依赖进行缓存的。在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要msg还没有发生改变，多次访问reverse计算属性会立即返回之前的计算结果，而不必再次执行函数。
    语法： {{reverse}}
        computed:{
                reverse(){
                    return this.msg = this.msg.split('').reverse().join('')
                }
            }

## watch: 监听器{string:{handler(new,old){} } }  是用来响应数据的变化，
    语法：watch:{
                msg:{
                    handler(new,old){
                        fun...
                    }
                }
            }


### methods computed watch
- 加载顺序
    1. computed
    是在 HTML DOM 加载后马上执行的，如赋值； 计算后的属性将直接赋值到vue实例中
    2. methods
    页面渲染完成后，必须要有一定的触发条件才能执行，如点击事件，
    3. watch
    它用于观察 Vue 实例上的数据变动。
    4. 默认加载的时候
    先 computed 再 watch，不执行 methods；
    5. 触发某一事件后
    先 computed 再 methods 再到 watch，computed 计算属性是基于它们的依赖进行缓存的
- 区别
    1. methods中没有缓存机制，页面中调用了多少次就要执行多少次
    2. compute中有缓存机制，当依赖没有发生变化时，页面中使用多次只用执行一次，当依赖发生变化时，才会重新执行
    3. watch中也没有缓存机制，观察某一个属性的变化，重新计算属性的值
    4. compute更适合用于多个属性同时影响一个属性的多对一情况，watch更适合用于一个属性影响多个属性的一对多的情况

- 总结
    watch是观察某一个属性的变化，重新计算属性值，computed是通过所伊拉德属性变化重新计算属性值。
    大部分情况下watch和computed几乎没有差别。但是如果要在数据变化的同时进行异步操作或者是比较大的开销，那么watch为最佳选择
    methods则作为函数调用以及事件处理函数