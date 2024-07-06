document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.querySelector('.copy');
    const pasteBtn = document.querySelector('.paste');
    const inputCopy = document.querySelector('.input-control input[type="text"]');
    const inputPaste = document.querySelectorAll('.input-control input[type="text"]')[1];

    // Fonction pour copier le texte
    copyBtn.addEventListener('click', async function() {
        try {
            // Copie le texte de l'input de copie dans le presse-papiers
            await navigator.clipboard.writeText(inputCopy.value);
            console.log('Texte copié avec succès dans le presse-papiers !');
        } catch (err) {
            console.error('Erreur lors de la copie du texte : ', err);
        }
    });

    // Fonction pour coller le texte
    pasteBtn.addEventListener('click', async function() {
        try {
            // Colle le texte du presse-papiers dans l'input de collage
            const text = await navigator.clipboard.readText();
            inputPaste.value = text;
            console.log('Texte collé avec succès depuis le presse-papiers !');
        } catch (err) {
            console.error('Erreur lors du collage du texte : ', err);
        }
    });
});
