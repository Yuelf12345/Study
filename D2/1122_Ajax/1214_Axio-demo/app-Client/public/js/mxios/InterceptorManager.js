class InterceptorManager{
    constructor(){
        //this.handles = [{fulfilled,rejected},fulfilled,rejected];
        this.handles = [];

    }

    //addEventList
    use(fulfilled,rejected){
        this.handles.push({
            fulfilled,
            rejected
        });
    }
}

export default InterceptorManager;