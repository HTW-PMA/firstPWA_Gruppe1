const app = Vue.createApp({
    data(){
        return {
            number1:null,
            operator:'',
            number2:null,
            result:null
        };
    },
        methods: {
            calculate(){
            switch(this.operator){
                case '+': this.result = this.number1+this.number2;
                break;
                case '-':  this.result = this.number1-this.number2;
                break;
                case '*':  this.result = this.number1*this.number2;
                break;
                case '/':  this.result = this.number1/this.number2;
                break;
                default: this.result = 'invalid operation';
                break;
            }
            }
        }
        
});
app.mount("#calc")