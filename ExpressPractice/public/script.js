let para = null;

async function getBackendText(){
    try{
        // If paragraph already exists → remove it
        if (para) {
            para.remove();
            para = null;
            return;
        }

        // Otherwise fetch from backend
        const backendRes = await fetch('/api');
        const backend = await backendRes.json();

        para = document.createElement('p');
        para.textContent = backend.message;

        document.body.appendChild(para);
    }
    catch(err){
        console.log(err);
    }
}