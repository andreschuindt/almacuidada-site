let i = 0;
let answers = {};
function show(id) {
  ['intro', 'identity', 'test', 'result'].forEach(function (x) { document.getElementById(x).classList.toggle('hidden', x !== id); });
  window.scrollTo(0, 0);
}
function goIdentity() { show('identity'); }
function startTest() {
  if (!document.getElementById('name').value.trim()) return alert('Informe seu nome.');
  if (!document.getElementById('consent').checked) return alert('Marque a confirmação para continuar.');
  show('test'); renderQ();
}
function renderQ() {
  const q = questions[i];
  const p = Math.round(((i + 1) / questions.length) * 100);
  document.getElementById('qcount').textContent = 'Questão ' + (i + 1) + ' de ' + questions.length;
  document.getElementById('pct').textContent = p + '%';
  document.getElementById('bar').style.width = p + '%';
  document.getElementById('domain').textContent = domainLabels[q.domain];
  document.getElementById('stimulus').textContent = q.stimulus;
  document.getElementById('prompt').textContent = q.prompt;
  const box = document.getElementById('options'); box.innerHTML = '';
  q.options.forEach(function (o, idx) {
    const b = document.createElement('button');
    b.innerHTML = '<span>' + String.fromCharCode(65 + idx) + '</span>' + o;
    b.onclick = function () { choose(idx); }; box.appendChild(b);
  });
}
function choose(idx) {
  answers[questions[i].id] = idx;
  if (i === questions.length - 1) return finish();
  i++; renderQ(); window.scrollTo(0, 0);
}
function calc() {
  const keys = Object.keys(domainLabels), by = {};
  keys.forEach(function (d) {
    const its = questions.filter(function (q) { return q.domain === d; });
    const correct = its.filter(function (q) { return answers[q.id] === q.correct; }).length;
    by[d] = its.length ? Math.round((correct / its.length) * 100) : 0;
  });
  const total = questions.filter(function (q) { return answers[q.id] === q.correct; }).length;
  const overall = Math.round((total / questions.length) * 100);
  let profile;
  if (overall < 35 || by.localizar < 40) profile = profiles[0];
  else if (overall < 50) profile = profiles[1];
  else if (overall < 68) profile = profiles[2];
  else if (overall < 84 || by.avaliar < 75) profile = profiles[3];
  else profile = profiles[4];
  const ranked = keys.map(function (d) { return { d: d, score: by[d] }; }).sort(function (a, b) { return b.score - a.score; });
  return { by: by, overall: overall, profile: profile, strongest: ranked[0], weakest: ranked[ranked.length - 1] };
}
function finish() {
  const r = calc(), name = document.getElementById('name').value.trim();
  document.getElementById('rtitle').innerHTML = name + ', seu perfil indicativo é <em>' + r.profile.title + '</em>.';
  document.getElementById('rdesc').textContent = r.profile.description;
  document.getElementById('overall').textContent = r.overall + '%';
  document.getElementById('level').textContent = r.profile.level;
  document.getElementById('short').textContent = r.profile.short;
  document.getElementById('next').textContent = r.profile.next;
  const grid = document.getElementById('domainGrid'); grid.innerHTML = '';
  Object.keys(domainLabels).forEach(function (d) {
    grid.innerHTML += '<div class="domainScore"><div><span><b>' + domainLabels[d] + '</b><small>' + domainSubtitles[d] + '</small></span><strong>' + r.by[d] + '%</strong></div><div class="meter"><i style="width:' + r.by[d] + '%"></i></div></div>';
  });
  document.getElementById('strengthTitle').textContent = domainLabels[r.strongest.d] + ' — ' + r.strongest.score + '%';
  document.getElementById('strengthText').textContent = domainSubtitles[r.strongest.d] + '. Esta é a habilidade em que você demonstrou maior segurança nesta versão do teste.';
  document.getElementById('growthTitle').textContent = domainLabels[r.weakest.d] + ' — ' + r.weakest.score + '%';
  document.getElementById('growthText').textContent = domainSubtitles[r.weakest.d] + '. Este é o melhor ponto de partida para o seu próximo ciclo de prática.';
  const plans = {
    localizar:['Leia avisos, agendas e instruções curtas e marque exatamente onde encontrou a resposta.','Treine localizar data, horário, condição, exceção e prazo em um mesmo texto.','Explique em uma frase qual informação resolveu a tarefa.'],
    compreender:['Após cada texto curto, escreva a ideia principal sem copiar frases.','Treine causa e consequência e identifique o objetivo do texto.','Resuma um parágrafo em até 20 palavras.'],
    conectar:['Leia dois pequenos textos sobre o mesmo assunto e escreva um ponto de acordo e um de diferença.','Relacione uma informação do início do texto com outra do final.','Explique como duas evidências juntas sustentam uma conclusão.'],
    inferir:['Pergunte: o que o texto não diz diretamente, mas permite concluir?','Sublinhe pistas que sustentam cada inferência.','Diferencie inferência baseada no texto de opinião pessoal.'],
    avaliar:['Pergunte quem afirma, com quais evidências e quais limitações aparecem.','Compare título e conteúdo para identificar exageros.','Treine reconhecer amostras pequenas, generalizações e relações de causa não demonstradas.'],
    aplicar:['Use textos reais: promoções, contratos simples, horários e formulários.','Transforme cada leitura em uma decisão prática: o que fazer agora?','Confira condições, exceções e consequências antes de escolher uma opção.']
  };
  const list = document.getElementById('plan'); list.innerHTML = '';
  plans[r.weakest.d].forEach(function (x) { const li = document.createElement('li'); li.textContent = x; list.appendChild(li); });
  show('result');
}
function composeEmail() {
  const r = calc(), name = document.getElementById('name').value.trim(), email = document.getElementById('email').value.trim();
  const lines = Object.keys(domainLabels).map(function (d) { return domainLabels[d] + ': ' + r.by[d] + '%'; }).join('\n');
  const message = 'Olá, ' + name + '!\n\n' + 'Seu perfil indicativo no Mapa do Leitor foi: ' + r.profile.title + '.\n' + 'Pontuação geral: ' + r.overall + '%.\n\n' + lines + '\n\n' + 'Próximo passo: ' + r.profile.next + '\n\n' + 'Resultado educativo e indicativo; não é diagnóstico nem classificação oficial do Inaf.';
  location.href = 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent('Meu Mapa de Compreensão Leitora') + '&body=' + encodeURIComponent(message);
}