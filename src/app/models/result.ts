export class Result{

    static resultJson( obj: Object ){
        return new Result(
            obj['id'],      
            obj['name'],    
            obj['status'],  
            obj['species'], 
            obj['type'],    
            obj['gender'],  
            obj['origin'],  
            obj['location'],
            obj['image'],   
            obj['episode'], 
            obj['url'],     
            obj['created'], 
        );
    }



    constructor(
        public id:       number,
        public name:     string,
        public status:   string,
        public species:  string,
        public type:     string,
        public gender:   string,
        public origin:   string,
        public location: string,
        public image:    string,
        public episode:  string,
        public url:      string,
        public created:  string,
        
    ){}

    
}