function loadImage(url){
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event){
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

window.addEventListener('load', async () => {
    
});
async function generatePDF() {
    const image = await loadImage("formulario.jpg");

    const pdf = new jsPDF('p', 'p', 'letter');

    pdf.addImage(image,'PNG', 0, 0, 565, 792);
}