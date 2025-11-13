const SVG_ICONS = {
    email: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230D6F69"><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z"/></svg>',
    phone: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230D6F69"><path d="M6.62,10.79C8.06,13.62,10.38,15.94,13.21,17.38l2.12-2.12c0.2-0.2,0.48-0.26,0.71-0.18c1.17,0.38,2.45,0.58,3.77,0.58 c0.55,0,1,0.45,1,1v3.44c0,0.55-0.45,1-1,1C10.6,22,3,14.4,3,6c0-0.55,0.45-1,1-1h3.44c0.55,0,1,0.45,1,1 c0,1.32,0.2,2.6,0.58,3.77C9.08,9.04,9.02,9.33,8.82,9.53L6.62,10.79z"/></svg>',
    linkedin: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230D6F69"><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M8.5,18H6v-9h2.5V18z M7.25,7.77 C6.47,7.77,5.85,7.15,5.85,6.37c0-0.78,0.62-1.4,1.4-1.4c0.78,0,1.4,0.62,1.4,1.4C8.65,7.15,8.03,7.77,7.25,7.77z M18,18h-2.5 v-4.5c0-1.08-0.02-2.47-1.5-2.47c-1.5,0-1.73,1.17-1.73,2.39V18H9.5V9h2.4v1.1h0.03c0.34-0.64,1.18-1.32,2.38-1.32 c2.54,0,3,1.67,3,3.85V18z"/></svg>',
    github: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230D6F69"><path d="M12,2C6.48,2,2,6.48,2,12c0,4.42,2.87,8.17,6.84,9.5c0.5,0.09,0.68-0.21,0.68-0.47c0-0.23-0.01-0.84-0.01-1.64 c-2.78,0.6-3.37-1.34-3.37-1.34c-0.45-1.15-1.11-1.46-1.11-1.46c-0.91-0.62,0.07-0.6,0.07-0.6c1,0.07,1.53,1.03,1.53,1.03 c0.89,1.53,2.34,1.09,2.91,0.83c0.09-0.65,0.35-1.09,0.63-1.34c-2.22-0.25-4.55-1.11-4.55-4.95c0-1.09,0.39-1.99,1.03-2.69 c-0.1-0.25-0.45-1.27,0.1-2.65c0,0,0.84-0.27,2.75,1.02C9.57,7.63,10.74,7.5,11.9,7.5c1.16,0,2.33,0.13,3.43,0.38 c1.91-1.29,2.75-1.02,2.75-1.02c0.55,1.38,0.2,2.4,0.1,2.65c0.64,0.7,1.03,1.6,1.03,2.69c0,3.85-2.34,4.69-4.57,4.94 c0.36,0.31,0.68,0.92,0.68,1.85c0,1.34-0.01,2.42-0.01,2.74c0,0.27,0.18,0.57,0.69,0.47C19.13,20.17,22,16.42,22,12C22,6.48,17.52,2,12,2z"/></svg>',
    link: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230D6F69"><path d="M3.9,12c0-1.71,1.39-3.1,3.1-3.1h4V7H7c-2.76,0-5,2.24-5,5s2.24,5,5,5h4v-1.9H7C5.29,15.1,3.9,13.71,3.9,12z M8,13h8v-2-H8V13z M17,7h-4v1.9h4c1.71,0,3.1,1.39,3.1,3.1s-1.39,3.1-3.1,3.1h-4V17h4c2.76,0,5-2.24,5-5S19.76,7,17,7z"/></svg>'
};

let nomeEl, tituloEl, qualificacoesEl, experienciasEl, formacaoEl, cursosEl, contatoListaEl, habilidadesContainerEl, idiomasEl;

function criarItemContato(svgData, texto, url = null) {
    const li = document.createElement('li');
    
    const img = document.createElement('img');
    img.src = svgData;
    img.alt = "Contact icon";
    
    let content;
    
    if (url) {
        const a = document.createElement('a');
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = texto;
        content = a;
    } else {
        const span = document.createElement('span');
        span.textContent = texto;
        content = span;
    }
    
    li.appendChild(img);
    li.appendChild(content);
    contatoListaEl.appendChild(li);
}

function renderizarCurriculo(data) {
    
    // --- Header (Name/Title) ---
    nomeEl.textContent = data.contact.name || "Name not provided";
    tituloEl.textContent = data.contact.title || "";
    document.title = "Resume of " + data.contact.name;

    // --- Contact (LOGIC WITH ICONS) ---
    contatoListaEl.innerHTML = '';
    let hasContactData = false;
    
    if (data.contact.email && data.contact.email.trim() !== "") {
        criarItemContato(SVG_ICONS.email, data.contact.email, 'mailto:' + data.contact.email);
        hasContactData = true;
    }
    if (data.contact.phone && data.contact.phone.trim() !== "") {
        criarItemContato(SVG_ICONS.phone, data.contact.phone, 'tel:' + data.contact.phone.replace(/\D/g,''));
        hasContactData = true;
    }
    
    if (data.contact.links && data.contact.links.length > 0) {
        data.contact.links.forEach(link => {
            if (link.url && link.url.trim() !== "") {
                let icon = SVG_ICONS.link;
                if (link.name.toLowerCase().includes('linkedin')) icon = SVG_ICONS.linkedin;
                if (link.name.toLowerCase().includes('github')) icon = SVG_ICONS.github;
                
                criarItemContato(icon, link.url, link.url);
                hasContactData = true;
            }
        });
    }

    const secaoContato = contatoListaEl.closest('.secao-lateral');
    if (!hasContactData) {
        secaoContato.classList.add('secao-oculta');
    } else {
        secaoContato.classList.remove('secao-oculta');
    }

    // --- Qualifications ---
    qualificacoesEl.innerHTML = '';
    const secaoQualificacoes = qualificacoesEl.closest('.secao');
    if (data.qualifications && data.qualifications.length > 0) {
        data.qualifications.forEach(q => {
            const li = document.createElement('li');
            li.textContent = q;
            qualificacoesEl.appendChild(li);
        });
        secaoQualificacoes.classList.remove('secao-oculta');
    } else {
        secaoQualificacoes.classList.add('secao-oculta');
    }
    
    // --- Experience ---
    experienciasEl.innerHTML = '';
    const secaoExperiencias = experienciasEl.closest('.secao');
    if (data.experience && data.experience.length > 0) {
        data.experience.forEach(exp => {
            const div = document.createElement('div');
            div.className = 'item-experiencia';
            
            let innerHTML = `
                <h3>${exp.role}</h3>
                <div class="empresa-periodo">${exp.company} | ${exp.period}</div>
                <p>${exp.description}</p>
            `;
            
            if (exp.main_activities && exp.main_activities.length > 0) {
                innerHTML += '<ul>';
                exp.main_activities.forEach(atv => {
                    innerHTML += `<li>${atv}</li>`;
                });
                innerHTML += '</ul>';
            }
            
            div.innerHTML = innerHTML;
            experienciasEl.appendChild(div);
        });
        secaoExperiencias.classList.remove('secao-oculta');
    } else {
        secaoExperiencias.classList.add('secao-oculta');
    }
    
    // --- Education ---
    formacaoEl.innerHTML = '';
    const secaoFormacao = formacaoEl.closest('.secao');
    if (data.education && data.education.length > 0) {
        data.education.forEach(f => {
            const div = document.createElement('div');
            div.className = 'item-formacao';
            div.innerHTML = `
                <h3>${f.course}</h3>
                <div class."instituicao-periodo">${f.institution} | ${f.period}</div>
            `;
            formacaoEl.appendChild(div);
        });
        secaoFormacao.classList.remove('secao-oculta');
    } else {
        secaoFormacao.classList.add('secao-oculta');
    }

    // --- Courses ---
    cursosEl.innerHTML = '';
    const secaoCursos = cursosEl.closest('.secao');
    if (data.courses && data.courses.length > 0) {
        data.courses.forEach(c => {
            const div = document.createElement('div');
            div.className = 'item-curso';
            div.innerHTML = `
                <h3>${c.name}</h3>
                <div class="org-ano">${c.organization} | ${c.year}</div>
            `;
            cursosEl.appendChild(div);
        });
        secaoCursos.classList.remove('secao-oculta');
    } else {
        secaoCursos.classList.add('secao-oculta');
    }

    // --- Skills (TAG LOGIC) ---
    habilidadesContainerEl.innerHTML = '';
    let hasSkillsData = false;
    if (data.skills) {
        for (const [categoryKey, tagList] of Object.entries(data.skills)) {
            if (tagList && tagList.length > 0) {
                const divCat = document.createElement('div');
                divCat.className = 'habilidade-categoria';
                
                const formattedCategory = categoryKey.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
                
                const strong = document.createElement('strong');
                strong.textContent = formattedCategory;
                divCat.appendChild(strong);
                
                const tagsContainer = document.createElement('div');
                tagsContainer.className = 'habilidade-tags-container';
                
                tagList.forEach(tagName => {
                    if (tagName && tagName.trim() !== "") {
                        const span = document.createElement('span');
                        span.className = 'habilidade-tag';
                        span.textContent = tagName;
                        tagsContainer.appendChild(span);
                        hasSkillsData = true;
                    }
                });
                
                divCat.appendChild(tagsContainer);
                habilidadesContainerEl.appendChild(divCat);
            }
        }
    }
    
    const secaoHabilidades = habilidadesContainerEl.closest('.secao-lateral');
    if (!hasSkillsData) {
        secaoHabilidades.classList.add('secao-oculta');
    } else {
        secaoHabilidades.classList.remove('secao-oculta');
    }

    // --- Languages ---
    idiomasEl.innerHTML = '';
    const secaoIdiomas = idiomasEl.closest('.secao-lateral');
    if (data.languages && data.languages.length > 0) {
        let hasLanguageData = false;
        data.languages.forEach(i => {
            if (i.language && i.language.trim() !== "") {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${i.language}:</strong> ${i.level || ''}`;
                idiomasEl.appendChild(li);
                hasLanguageData = true;
            }
        });
        
        if (!hasLanguageData) {
            secaoIdiomas.classList.add('secao-oculta');
        } else {
            secaoIdiomas.classList.remove('secao-oculta');
        }
    } else {
        secaoIdiomas.classList.add('secao-oculta');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Element Selectors (Resume) ---
    nomeEl = document.getElementById('nome');
    tituloEl = document.getElementById('titulo');
    qualificacoesEl = document.getElementById('qualificacoes');
    experienciasEl = document.getElementById('experiencias');
    formacaoEl = document.getElementById('formacao');
    cursosEl = document.getElementById('cursos');
    contatoListaEl = document.getElementById('contato-lista');
    habilidadesContainerEl = document.getElementById('habilidades-container');
    idiomasEl = document.getElementById('idiomas');
    

    fetch('../src/curriculum_en.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            renderizarCurriculo(data);
        })
        .catch(error => {
            console.error("Error loading the curriculum_en.json file:", error);
            const container = document.getElementById('curriculo-container');
            container.innerHTML = `<div style="text-align: center; padding: 40px;">
                <h1>Error Loading Resume</h1>
                <p>Could not find or read the <code>../src/curriculum_en.json</code> file.</p>
                <p>Check if the file exists at the correct path and if the JSON is valid (using English keys).</p>
                <p><em>${error}</em></p>
            </div>`;
        });
});