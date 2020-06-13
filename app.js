const myapp = new Vue({
    el:'#myapp',
    data:{
        progress: 50
    },
    methods:{
        aumentar:function(){
            if(this.progress < 100){
                this.progress += 5; 
            }
        },
        disminuir:function(){
            if(this.progress > 0){
                this.progress -= 5;
            }
        }
    },
    computed:{
        color(){
            return {
                'bg-danger': this.progress <= 40,
                'bg-warning': this.progress > 40 && this.progress < 80,
                'bg-success': this.progress >= 80
            }
        },
        color_text(){
            let color
            this.progress > 40 && this.progress < 80 ? color = 'black' : color = 'white'
            return color
        }

    }
});