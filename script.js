document.addEventListener('DOMContentLoaded', function() {

    // selection des elements buttons 
    const copyBtn = document.querySelector('.copy');
    const pasteBtn = document.querySelector('.paste');
    const copyChecked = document.querySelector('.copy-checked');
    const pasteChecked = document.querySelector('.paste-checked');
    const restartBtn = document.querySelector('.restart');
    const copyField = document.querySelector('.copy-field');
    const pasteField = document.querySelector('.paste-field');

    // Fonction pour copier le texte
    copyBtn.addEventListener('click', async function() {

        // essayer de copier le contenu du input dans le presse-papiers
        try {
            await navigator.clipboard.writeText(copyField.value);
            // console.log('Texte copié avec succès dans le presse-papiers !');
        } catch (err) {
            console.error('Erreur lors de la copie du texte : ', err);
        }

        copyChecked.style.display = 'block';
        copyBtn.style.display = 'none';

        // appel de la fonction de confirmation
        confirmed(copyBtn);
    });

    // Fonction pour coller le texte
    pasteBtn.addEventListener('click', async function() {

        // essayer de coller le contenu dans le champ paste
        try {
            const text = await navigator.clipboard.readText();
            pasteField.value = text;
            // console.log('Texte collé avec succès depuis le presse-papiers !');
        } catch (err) {
            console.error('Erreur lors du collage du texte : ', err);
        }

        pasteChecked.style.display = 'block';
        pasteBtn.style.display = 'none';

        // appel de la fonction de confirmation
        confirmed(pasteBtn);
    });

    // Affichage de l'incone de confirmation
    function confirmed(button) {

        if(button.className.baseVal === 'copy') {

            setTimeout(function () {
                copyBtn.style.display = 'block';
                copyChecked.style.display = 'none';
            }, 500);

        } else if (button.className.baseVal === 'paste') {

            setTimeout(function () {
                pasteBtn.style.display = 'block';
                pasteChecked.style.display = 'none';
            }, 500);

        } else {
            window.location.href = '/';
        }
    }

    // Vide le contenu du premier input
    restartBtn.addEventListener('click', function() {
        copyField.value = ''; 
    });
});