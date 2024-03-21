function calcularInput() {
    let tabela = document.getElementById("resultadoTabela");
    let linhas = tabela.rows;

    // Começa do índice 1 para pular o cabeçalho
    for (let i = 0; i < linhas.length; i++) {
        let linha = linhas[i];
        let cells = linha.cells;

        // Se a linha não for a primeira (cabeçalho) e não estiver vazia
        if (i !== 0 && cells.length > 0) {
            // Extrai os custos da segunda célula da linha
            let custo = parseFloat(cells[1].textContent);
            let frete = parseFloat(cells[2].textContent);

            // Verifica se existem células suficientes na linha
            if (cells.length < 10) {
                // Cria células adicionais, se necessário
                for (let j = cells.length; j < 10; j++) {
                    linha.insertCell(-1); // Insere uma nova célula no final da linha
                }
            }
            function calcularMercadoLivreClassico(custo, frete) {
                let taxa = 0.115;
                let imposto = 0.10;

                let precoVenda = custo * 0.5;

                let porcentagemFinal = 0;
                let precoVendaFinal = 0;

                while (porcentagemFinal <= 1.45) {
                    precoVenda += 1;

                    let calculoTaxa = precoVenda * taxa;
                    let calculoImposto = precoVenda * imposto;
                    let taxasFrete = calculoTaxa + calculoImposto + frete;
                    let bruto = precoVenda - taxasFrete;
                    porcentagemFinal = bruto / custo;
                    precoVendaFinal = precoVenda;
                }

                return precoVendaFinal;
            }

            function calcularMercadoLivrePremium(custo, frete) {
                let taxa = 0.165;
                let imposto = 0.10;

                let precoVenda = custo * 0.5;

                let porcentagemFinal = 0;
                let precoVendaFinal = 0;

                while (porcentagemFinal <= 1.45) {
                    precoVenda += 1;

                    let calculoTaxa = precoVenda * taxa;
                    let calculoImposto = precoVenda * imposto;
                    let taxasFrete = calculoTaxa + calculoImposto + frete;
                    let bruto = precoVenda - taxasFrete;
                    porcentagemFinal = bruto / custo;
                    precoVendaFinal = precoVenda;
                }

                return precoVendaFinal;
            }


            function calcularShopee(custo) {
                let taxa = 0.20;
                let imposto = 0.10;
                let tarifaFixa = 3;

                let precoVenda = custo * 0.8;

                let porcentagemFinal = 0;
                let precoVendaFinal = 0;

                while (porcentagemFinal <= 1.51) {
                    precoVenda += 1;

                    let calculoTaxa = precoVenda * taxa;
                    let calculoImposto = precoVenda * imposto;
                    let bruto = precoVenda - calculoTaxa - calculoImposto - tarifaFixa;
                    porcentagemFinal = bruto / custo;
                    precoVendaFinal = precoVenda;
                }

                return precoVendaFinal;
            }

            function calcularOlist(custo, frete) {
                let taxa = 0.21;
                let imposto = 0.10;

                let precoVenda = custo * 0.8;

                let porcentagemFinal = 0;
                let precoVendaFinal = 0;

                while (porcentagemFinal <= 1.45) {
                    precoVenda += 1;

                    let calculoTaxa = precoVenda * taxa;
                    let calculoImposto = precoVenda * imposto;
                    let bruto = precoVenda - calculoTaxa - calculoImposto;
                    porcentagemFinal = bruto / custo;
                    precoVendaFinal = precoVenda * 1.14;
                }

                return precoVendaFinal;
            }

            function calcularB2W(custo, frete) {
                let taxa = 0.165;
                let imposto = 0.10;

                let precoVenda = custo * 0.5;

                let porcentagemFinal = 0;
                let precoVendaFinal = 0;

                while (porcentagemFinal <= 1.45) {
                    precoVenda += 1;

                    let calculoTaxa = precoVenda * taxa;
                    let calculoImposto = precoVenda * imposto;
                    let taxasFrete = calculoTaxa + calculoImposto + frete;
                    let bruto = precoVenda - taxasFrete;
                    porcentagemFinal = bruto / custo;
                    precoVendaFinal = precoVenda;
                }

                return precoVendaFinal;
            }

            function calcularMagalu(custo) {
                /* 
                let taxa = 0.16;
                let imposto = 0.10;
                let tarifaFixa = 3;
            
                let precoVenda = custo * 0.8;
            
                let porcentagemFinal = 0;
                let precoVendaFinal = 0;
            
                while (porcentagemFinal <= 1.51) {
                    precoVenda += 1;
            
                    let calculoTaxa = precoVenda * taxa;
                    let calculoImposto = precoVenda * imposto;
                    let bruto = precoVenda - calculoTaxa - calculoImposto - tarifaFixa;
                    porcentagemFinal = bruto / custo;
                    precoVendaFinal = precoVenda;
                }
                */
                let precoVendaFinal = custo * 2.08;
                return precoVendaFinal;
                //document.getElementById("margemFinalMagalu").textContent = porcentagemFinal.toFixed(2) + "%"; 
            }

            function calcularIanni(custo) {
                /* 
                let taxa = 0.10;
                let imposto = 0.10;
            
                let precoVenda = custo * 0.8;
            
                let porcentagemFinal = 0;
                let precoVendaFinal = 0;
            
                while (porcentagemFinal <= 1.44) {
                    precoVenda += 1;
            
                    let calculoTaxa = precoVenda * taxa;
                    let calculoImposto = precoVenda * imposto;
                    let bruto = precoVenda - calculoTaxa - calculoImposto;
                    porcentagemFinal = bruto / custo;
                    precoVendaFinal = precoVenda;
                }
                */
                let precoVendaFinal = custo * 1.8;
                return precoVendaFinal;
                //document.getElementById("margemFinalIanni").textContent = porcentagemFinal.toFixed(2) + "%"; 
            }

            // Chama as funções de cálculo para calcular os valores de cada célula
            let mlClassico = calcularMercadoLivreClassico(custo, frete);
            let mlPremium = calcularMercadoLivrePremium(custo, frete);
            let b2w = calcularB2W(custo, frete);
            let magalu = calcularMagalu(custo);
            let olist = calcularOlist(custo, frete);
            let shopee = calcularShopee(custo);
            let ianni = calcularIanni(custo);

            // Atualiza as células na mesma linha com os valores calculados
            cells[3].textContent = mlClassico.toFixed(2).replace(".", ",");
            cells[4].textContent = mlPremium.toFixed(2).replace(".", ",");
            cells[5].textContent = b2w.toFixed(2).replace(".", ",");
            cells[6].textContent = magalu.toFixed(2).replace(".", ",");
            cells[7].textContent = olist.toFixed(2).replace(".", ",");
            cells[8].textContent = shopee.toFixed(2).replace(".", ",");
            cells[9].textContent = ianni.toFixed(2).replace(".", ",");
        }
    }
}