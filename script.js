const SVG_ICONS = {
    email: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230D6F69"><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z"/></svg>',
    phone: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230D6F69"><path d="M6.62,10.79C8.06,13.62,10.38,15.94,13.21,17.38l2.12-2.12c0.2-0.2,0.48-0.26,0.71-0.18c1.17,0.38,2.45,0.58,3.77,0.58 c0.55,0,1,0.45,1,1v3.44c0,0.55-0.45,1-1,1C10.6,22,3,14.4,3,6c0-0.55,0.45-1,1-1h3.44c0.55,0,1,0.45,1,1 c0,1.32,0.2,2.6,0.58,3.77C9.08,9.04,9.02,9.33,8.82,9.53L6.62,10.79z"/></svg>',
    linkedin: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230D6F69"><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M8.5,18H6v-9h2.5V18z M7.25,7.77 C6.47,7.77,5.85,7.15,5.85,6.37c0-0.78,0.62-1.4,1.4-1.4c0.78,0,1.4,0.62,1.4,1.4C8.65,7.15,8.03,7.77,7.25,7.77z M18,18h-2.5 v-4.5c0-1.08-0.02-2.47-1.5-2.47c-1.5,0-1.73,1.17-1.73,2.39V18H9.5V9h2.4v1.1h0.03c0.34-0.64,1.18-1.32,2.38-1.32 c2.54,0,3,1.67,3,3.85V18z"/></svg>',
    github: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230D6F69"><path d="M12,2C6.48,2,2,6.48,2,12c0,4.42,2.87,8.17,6.84,9.5c0.5,0.09,0.68-0.21,0.68-0.47c0-0.23-0.01-0.84-0.01-1.64 c-2.78,0.6-3.37-1.34-3.37-1.34c-0.45-1.15-1.11-1.46-1.11-1.46c-0.91-0.62,0.07-0.6,0.07-0.6c1,0.07,1.53,1.03,1.53,1.03 c0.89,1.53,2.34,1.09,2.91,0.83c0.09-0.65,0.35-1.09,0.63-1.34c-2.22-0.25-4.55-1.11-4.55-4.95c0-1.09,0.39-1.99,1.03-2.69 c-0.1-0.25-0.45-1.27,0.1-2.65c0,0,0.84-0.27,2.75,1.02C9.57,7.63,10.74,7.5,11.9,7.5c1.16,0,2.33,0.13,3.43,0.38 c1.91-1.29,2.75-1.02,2.75-1.02c0.55,1.38,0.2,2.4,0.1,2.65c0.64,0.7,1.03,1.6,1.03,2.69c0,3.85-2.34,4.69-4.57,4.94 c0.36,0.31,0.68,0.92,0.68,1.85c0,1.34-0.01,2.42-0.01,2.74c0,0.27,0.18,0.57,0.69,0.47C19.13,20.17,22,16.42,22,12C22,6.48,17.52,2,12,2z"/></svg>',
    link: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230D6F69"><path d="M3.9,12c0-1.71,1.39-3.1,3.1-3.1h4V7H7c-2.76,0-5,2.24-5,5s2.24,5,5,5h4v-1.9H7C5.29,15.1,3.9,13.71,3.9,12z M8,13h8v-2H8V13z M17,7h-4v1.9h4c1.71,0,3.1,1.39,3.1,3.1s-1.39,3.1-3.1,3.1h-4V17h4c2.76,0,5-2.24,5-5S19.76,7,17,7z"/></svg>'
};

let nomeEl, tituloEl, qualificacoesEl, experienciasEl, formacaoEl, cursosEl, contatoListaEl, habilidadesContainerEl, idiomasEl;

function criarItemContato(svgData, texto, url = null) {
    const li = document.createElement('li');
    
    const img = document.createElement('img');
    img.src = svgData;
    img.alt = "Ícone de contato";
    
    let conteudo;
    
    if (url) {
        const a = document.createElement('a');
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = texto;
        conteudo = a;
    } else {
        const span = document.createElement('span');
        span.textContent = texto;
        conteudo = span;
    }
    
    li.appendChild(img);
    li.appendChild(conteudo);
    contatoListaEl.appendChild(li);
}

function renderizarCurriculo(dados) {
    
    nomeEl.textContent = dados.contato.nome || "Nome não informado";
    tituloEl.textContent = dados.contato.titulo || "";
    document.title = "Currículo de " + dados.contato.nome;

    contatoListaEl.innerHTML = '';
    let temDadosContato = false;
    
    if (dados.contato.email && dados.contato.email.trim() !== "") {
        criarItemContato(SVG_ICONS.email, dados.contato.email, 'mailto:' + dados.contato.email);
        temDadosContato = true;
    }
    if (dados.contato.telefone && dados.contato.telefone.trim() !== "") {
        criarItemContato(SVG_ICONS.phone, dados.contato.telefone, 'tel:' + dados.contato.telefone.replace(/\D/g,''));
        temDadosContato = true;
    }
    
    if (dados.contato.links && dados.contato.links.length > 0) {
        dados.contato.links.forEach(link => {
            if (link.url && link.url.trim() !== "") {
                let icone = SVG_ICONS.link;
                if (link.nome.toLowerCase().includes('linkedin')) icone = SVG_ICONS.linkedin;
                if (link.nome.toLowerCase().includes('github')) icone = SVG_ICONS.github;
                
                criarItemContato(icone, link.url, link.url);
                temDadosContato = true;
            }
        });
    }

    const secaoContato = contatoListaEl.closest('.secao-lateral');
    if (!temDadosContato) {
        secaoContato.classList.add('secao-oculta');
    } else {
        secaoContato.classList.remove('secao-oculta');
    }

    qualificacoesEl.innerHTML = '';
    const secaoQualificacoes = qualificacoesEl.closest('.secao');
    if (dados.qualificacoes && dados.qualificacoes.length > 0) {
        dados.qualificacoes.forEach(q => {
            const li = document.createElement('li');
            li.textContent = q;
            qualificacoesEl.appendChild(li);
        });
        secaoQualificacoes.classList.remove('secao-oculta');
    } else {
        secaoQualificacoes.classList.add('secao-oculta');
    }
    
    experienciasEl.innerHTML = '';
    const secaoExperiencias = experienciasEl.closest('.secao');
    if (dados.experiencias && dados.experiencias.length > 0) {
        dados.experiencias.forEach(exp => {
            const div = document.createElement('div');
            div.className = 'item-experiencia';
            
            let htmlInterno = `
                <h3>${exp.cargo}</h3>
                <div class="empresa-periodo">${exp.empresa} | ${exp.periodo}</div>
                <p>${exp.descricao}</p>
            `;
            
            if (exp.principais_atividades && exp.principais_atividades.length > 0) {
                htmlInterno += '<ul>';
                exp.principais_atividades.forEach(atv => {
                    htmlInterno += `<li>${atv}</li>`;
                });
                htmlInterno += '</ul>';
            }
            
            div.innerHTML = htmlInterno;
            experienciasEl.appendChild(div);
        });
        secaoExperiencias.classList.remove('secao-oculta');
    } else {
        secaoExperiencias.classList.add('secao-oculta');
    }
    
    formacaoEl.innerHTML = '';
    const secaoFormacao = formacaoEl.closest('.secao');
    if (dados.formacao && dados.formacao.length > 0) {
        dados.formacao.forEach(f => {
            const div = document.createElement('div');
            div.className = 'item-formacao';
            div.innerHTML = `
                <h3>${f.curso}</h3>
                <div class."instituicao-periodo">${f.instituicao} | ${f.periodo}</div>
            `;
            formacaoEl.appendChild(div);
        });
        secaoFormacao.classList.remove('secao-oculta');
    } else {
        secaoFormacao.classList.add('secao-oculta');
    }

    cursosEl.innerHTML = '';
    const secaoCursos = cursosEl.closest('.secao');
    if (dados.cursos && dados.cursos.length > 0) {
        dados.cursos.forEach(c => {
            const div = document.createElement('div');
            div.className = 'item-curso';
            div.innerHTML = `
                <h3>${c.nome}</h3>
                <div class="org-ano">${c.organizacao} | ${c.ano}</div>
            `;
            cursosEl.appendChild(div);
        });
        secaoCursos.classList.remove('secao-oculta');
    } else {
        secaoCursos.classList.add('secao-oculta');
    }

    habilidadesContainerEl.innerHTML = '';
    let temDadosHabilidades = false;
    if (dados.habilidades) {
        for (const [categoria, lista] of Object.entries(dados.habilidades)) {
            if (lista && lista.length > 0) {
                const divCat = document.createElement('div');
                divCat.className = 'habilidade-categoria';
                
                const categoriaFormatada = categoria.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
                
                const strong = document.createElement('strong');
                strong.textContent = categoriaFormatada;
                divCat.appendChild(strong);
                
                const tagsContainer = document.createElement('div');
                tagsContainer.className = 'habilidade-tags-container';
                
                lista.forEach(tagNome => {
                    if (tagNome && tagNome.trim() !== "") {
                        const span = document.createElement('span');
                        span.className = 'habilidade-tag';
                        span.textContent = tagNome;
                        tagsContainer.appendChild(span);
                        temDadosHabilidades = true;
                    }
                });
                
                divCat.appendChild(tagsContainer);
                habilidadesContainerEl.appendChild(divCat);
            }
        }
    }
    
    const secaoHabilidades = habilidadesContainerEl.closest('.secao-lateral');
    if (!temDadosHabilidades) {
        secaoHabilidades.classList.add('secao-oculta');
    } else {
        secaoHabilidades.classList.remove('secao-oculta');
    }

    idiomasEl.innerHTML = '';
    const secaoIdiomas = idiomasEl.closest('.secao-lateral');
    if (dados.idiomas && dados.idiomas.length > 0) {
        let temDadosIdiomas = false;
        dados.idiomas.forEach(i => {
            if (i.idioma && i.idioma.trim() !== "") {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${i.idioma}:</strong> ${i.nivel || ''}`;
                idiomasEl.appendChild(li);
                temDadosIdiomas = true;
            }
        });
        
        if (!temDadosIdiomas) {
            secaoIdiomas.classList.add('secao-oculta');
        } else {
            secaoIdiomas.classList.remove('secao-oculta');
        }
    } else {
        secaoIdiomas.classList.add('secao-oculta');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    nomeEl = document.getElementById('nome');
    tituloEl = document.getElementById('titulo');
    qualificacoesEl = document.getElementById('qualificacoes');
    experienciasEl = document.getElementById('experiencias');
    formacaoEl = document.getElementById('formacao');
    cursosEl = document.getElementById('cursos');
    contatoListaEl = document.getElementById('contato-lista');
    habilidadesContainerEl = document.getElementById('habilidades-container');
    idiomasEl = document.getElementById('idiomas');
    
    fetch('src/curriculum.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(dados => {
            renderizarCurriculo(dados);
        })
        .catch(error => {
            console.error("Erro ao carregar o arquivo curriculum.json:", error);
            const container = document.getElementById('curriculo-container');
            container.innerHTML = `<div style="text-align: center; padding: 40px;">
                <h1>Erro ao carregar currículo</h1>
                <p>Não foi possível encontrar ou ler o arquivo <code>src/curriculum.json</code>.</p>
                <p>Verifique se o arquivo existe no diretório 'src/' e se o JSON é válido.</p>
                <p><em>${error}</em></p>
            </div>`;
        });
});