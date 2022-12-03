function wrtName(usrName) {

    console.log('Meu nome é ' + usrName);

}

function isMinor(age) {

    if (age>=18) {

        console.log('Sou maior de idade.');
        
    } else {

        console.log('Sou menor de idade.');

    }

}

(function () {
    wrtName('André Fiaschi');
    isMinor(34);
})();