Blazor.start().then(function () {
    let editor_data;
    BalloonEditor
        .create(document.querySelector('#editor'))
        .then(newEditor=>{
            editor_data = newEditor;
        })
        .catch(error => {
            console.error(error);
        });
    
    document.getElementById("submit").addEventListener("click",function(){
        const data = editor_data.getData();
        console.log(data);
        const all_data = {EditorData:data};
        postJSON(all_data);
    });
    
    // POST method implementation
    async function postJSON(all_data){
        try{
            const response = await fetch("/https://localhost:7057/api/articles/create",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(all_data)
            });
            const result = await response.json();
            console.log("Success: ", result);
        }catch (error){
            console.error("Error: ",error);
        }
    }
})
