const eng = ['cat', 'dog', 'house'];
const uzb = ['mushuk', 'it', 'uy'];
const correct = document.querySelector('.correct'),
    error = document.querySelector('error');

for (let i = 0; i < eng.length; i++) {
    const btnForEng = document.createElement('button')
    btnForEng.textContent = eng[i]
    btnForEng.dataset.id = i;
    btnForEng.addEventListener('click', () => {

        if (btnForEng.dataset.id == btnForUzb.dataset.id) {
            btnForUzb.addEventListener('click', () => {
                correct.play()
                btnForEng.style.background = 'green';
                btnForUzb.style.background = 'green';

                setTimeout(() => {
                    btnForEng.style.display = 'none';
                    btnForUzb.style.display = 'none';
                }, 2000);
            })
        }

    })

    const btnForUzb = document.createElement('button')
    btnForUzb.textContent = uzb[i]
    btnForUzb.dataset.id = i;
    btnForUzb.addEventListener('click', () => {
        if (btnForEng.dataset.id == btnForUzb.dataset.id) {
            btnForEng.addEventListener('click', () => {
                correct.play()
                btnForEng.style.background = 'green';
                btnForUzb.style.background = 'green';

                setTimeout(() => {
                    btnForEng.style.display = 'none';
                    btnForUzb.style.display = 'none';
                }, 2000);
            })
        }
        btnForEng.value = "";
        btnForUzb.value = "";





    })

    document.body.append(btnForEng, btnForUzb)
}