//构造一个类，来实现瀑布流加载图片
export class loadImg {
    constructor(n, str, width,interval) {
        //接受一个参数n，表示放几列，
        this.linelength = n
        //列数组，存放列号,存放图片的数组
        this.line = []
        //每一列的高度和
        this.height = []
        this.interval = interval || 10
        //计算图片的可用宽度
        this.width = width - (n-1) * this.interval
        //代表代表图片的个数
        this.i = 0;
        //获取指定区域
        this.wrap = document.querySelector(str);
        //处理容器，为容器添加属性
        this.dealContainer();
        //创建存放图片的多维数组
        this.createLine()
        this.whenclick()
        
    }
    //外部容器做调整,给一个相对定位
    dealContainer() {
        //这样可以尽量小的影响原容器
        if(this.wrap.style.position === "absolute") return;
        //否则添加这个属性
        this.wrap.style.position = "relative";
    }
    //构建列数组的方法
    createLine() {
        //先把列数组构建好
        if (this.line.length === 0) {
            for (let i = 0, l = this.linelength; i < l; i++) {
                //构建两个多维数组
                this.line.push([]);
            }
        }
        for(let i =0,l=this.linelength;i<l;i++){
            this.height.push(0);
        }
    }

    //加入图片
    addImg(url) {
        //这个路径可能是网络地址或者本地地址，我需要把这张图片先实例成一个img，每次执行都会新建一个图片实例
        let img = new Image();
        //定义图片路径
        img.src = url;
        this.isLoaded(img);
    }
    //判断图片是否加载完成
    isLoaded(img) {
        new Promise((res,rej)=>{
            if(img.height === 0){
                res()
            }else{
                rej();
            }
        })
        .then(()=>{
            //如果没有加载完成
            this.isload = false;
            //0.2s之后再次检测加载完成没有，没有继续定时器，
            setTimeout(()=>{
                this.isLoaded(img);
            },200)
            return;
        },()=>{
            //这里执行rej
            this.isload = true;
            this.handlepic(img);
        })
    }
    //图片属性处理函数
    handlepic(img){
        //打印图片宽高比
        img.ratio = img.width / img.height;
        //给每张图片一个固定宽度，让高度自适应，区域可用宽度/列数，算出每张图片宽度，并挂载在img上。
        img.width = this.width / this.linelength;
        //然后通过比率，将高度属性重新赋值并且挂载到img对象上
        let h = Math.floor(img.width / img.ratio * 100) / 100;
        img.height = h;
        // 在创建时，就给设置好absolute属性
        img.style.position = "absolute";
        this.addToarr(img);
    }
    //将该图加入对应数组的方法
    addToarr(img){
        //首先要加入图片数组中，
        //前四张，直接给定位置
        if(this.i<this.linelength){
            //把这图片存入第一行中
            this.line[this.i][0] = img;
            img.style.top = 0 +"px";
            //高度数组来保存高度,同时加个10，直接把间隔包进去
            this.height[this.i] = this.line[this.i][0].height + this.interval ;
            if(this.i===0){
                img.style.left = 0 +"px"
            }else{
                img.style.left = this.i*img.width + this.i*this.interval + "px" ;
            }
        }else{
            //后面的图片
            //找出最低项
            let n = this.smallest(this.height)
            this.line[n].push(img);
            //为图片添加top属性,把先前的高度值给了，
            img.style.top = this.height[n] + "px";
            //然后更新height
            this.height[n] += img.height + this.interval ;
            if(n===0){
                img.style.left = 0 +"px"
            }else{
                img.style.left = n*img.width + n*this.interval + "px";
            }
        }
        this.i++;
        this.render();
    }
    //判断height数组中的最小值
    smallest(arr) {
        //传入一个数组，返回出最小值存在的那一项
        let smallest = arr[0];//赋初值
        arr.forEach((v) => {
            if (smallest > v) {
                smallest = v;
            }
        })
        return arr.indexOf(smallest);
    }
    //根据数组内容，渲染图片，添加进页面中的方法
    render() {
        //直接拿出line数组中的图片添加就可以了
        this.line.forEach((v1)=>{
            v1.forEach((v2)=>{
                this.wrap.appendChild(v2);
            })
        })
    }

    //点击放大的功能
    whenclick(){
        let bg = document.createElement("div");
        let newImg = new Image();
        this.wrap.addEventListener("click",(e)=>{
            if(e.target.toString().slice(12,17) === "Image"){
                //给遮罩做样式
                bg.style = "width:100vw;height:100vh;z-index:100;position:absolute;top:0px;left:0px;background-color:rgba(0,0,0,.3);"
                document.body.appendChild(bg);
                newImg.src = e.target.src;
                console.log(e.target.width,e.target.height)
                newImg.width = e.target.width *3;
                newImg.height = e.target.height *3;
                newImg.style = "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);";
                bg.appendChild(newImg)
            }
        })
        bg.addEventListener("click",()=>{
            bg.removeChild(newImg);
            document.body.removeChild(bg);
        })
    }
}
