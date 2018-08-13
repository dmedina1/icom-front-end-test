var icom = angular.module('icomApp', []);

icom.controller('controller', function controller($scope) {
    console.log("teste");

    var vm = this;

    var idiomaStorage = window.localStorage.getItem("idioma");
    console.log(idiomaStorage);
    if(idiomaStorage == null){
        vm.language = 'ptbr';
    }else{
        vm.language = idiomaStorage;
    }

    vm.label={
        ptbr:{
            'teste': 'Teste',
            'servicos': 'Serviços',
            'portifolio': 'Portifólio',
            'premios': 'Prêmios',
            'cliente': 'Cliente',
            'contato': 'Contato',
            'contatos': 'Contatos',
            'sobre': 'Sobre',
        },
        en:{
            'teste': 'Test',
            'servicos': 'Services',
            'portifolio': 'Portfolio',
            'premios': 'Awards',
            'cliente': 'Client',
            'contato': 'Contact',
            'contatos': 'Contacts',
            'sobre': 'About',
        }
    }

    vm.alterarIdioma = function(idioma){
        console.log(idioma);
        vm.language = idioma;
        window.localStorage.setItem("idioma", idioma);
    }

});