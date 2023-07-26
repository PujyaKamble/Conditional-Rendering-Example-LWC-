import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVissible = false;
    string

    handleClick(event){
        this.isVissible = true
    }

    changeHandler(event){
        this.string = event.target.value
    }

   get helloMethod(){
    return this.string === "Hello"
   }
}
