Quero que você crie o Site institucional "Lumina Prestige" em 3 arquivos (index.html, style.css e script.js), usando APENAS HTML5 semântico, CSS3 (Flexbox, Grid, variáveis CSS) e JavaScript Vanilla ES6, sem qualquer framework ou biblioteca externa.
REGRA: Use imagens genéricas premium (Unsplash) relacionadas ao nicho caso não haja imagens reais. Inclua URLs diretas das imagens.
IDENTIDADE VISUAL BASE:
Paleta: #C9A96E (ouro principal), #F5F0E8 (off-white creme), #1A1A1A (preto refinado), #8E8E8E (cinza neutro), #FFFFFF (branco), #2C2C2C (grafite)
Tipografia: Playfair Display (títulos, peso 400/700) + DM Sans (corpo, peso 300/400/500)
Estilo: Luxury Wellness — elegância clínica com calor humano; madeira + ouro + branco
Sensação: Confiança premium acessível — "você merece se cuidar aqui"
LAYOUT ESCOLHIDO:
Hero: C) Editorial — tipografia "Transformamos Sorrisos" em 9vw dominando 65% da tela esquerda, imagem da recepção iluminada à direita com clip-path diagonal dourado, estrela decorativa ✦ em ouro animada, badge "⭐ 5.0 Google" flutuando
Serviços: F) Numeração grande (01–06) — cada especialidade com numeração 01 a 06 em #C9A96E 80px, linha separadora, título e descrição curta; layout em 2 colunas
Depoimentos: E) Carrossel fade + nota Google visível — card branco com nota 5.0 Google fixo à esquerda, carrossel de depoimentos à direita com fade entre cards
Sobre/Credenciais: D) Split 50/50 com imagem fixada — foto da recepção Lumina fixada à esquerda com sticky scroll, texto + counters animados à direita
ANIMAÇÕES DO PROJETO:

Logo navbar → de opacity:0 translateY(-10px) para opacity:1 translateY(0) em 400ms, ease-out, trigger: load
Título hero "Transformamos" → de opacity:0 translateX(-60px) para opacity:1 translateX(0) em 700ms, ease-out, trigger: load, delay 200ms
Subtítulo hero → de opacity:0 para opacity:1 em 500ms, ease, trigger: load, delay 600ms
Badge Google → de opacity:0 scale(0.8) para opacity:1 scale(1) em 400ms, ease-out, trigger: load, delay 900ms
Imagem hero → de clipPath: inset(0 100% 0 0) para clipPath: inset(0 0% 0 0) em 900ms, ease-in-out, trigger: load, delay 300ms
Números serviços (01–06) → de opacity:0 translateX(-30px) para opacity:1 translateX(0) em 500ms, ease-out, trigger: IntersectionObserver (threshold 0.2), stagger: 120ms
Counters sobre → de 0 para valor final em 1800ms, easing quadrático, trigger: IntersectionObserver
Cards depoimentos → fade entre slides em 600ms, ease-in-out, auto-play 5s
Barra marquee → translateX(0) para translateX(-50%) em 20s linear infinito, trigger: load
Seção galeria fotos → de opacity:0 scale(0.95) para opacity:1 scale(1) em 400ms, ease-out, trigger: IntersectionObserver, stagger: 80ms
Hover botão CTA → background de #C9A96E para #1A1A1A, color para #C9A96E em 300ms ease

SEÇÕES OBRIGATÓRIAS:

Navbar — logo Lumina à esquerda, links âncora centralizados, botão "Agendar Consulta" dourado à direita; fundo transparente → branco sólido com sombra sutil ao rolar (IntersectionObserver); links com underline dourado no hover
Hero [Editorial] — "Transformamos Sorrisos / Revelamos Sua Melhor Versão ✦" tipografia editorial 9vw, badge 5.0 Google, CTA primário WhatsApp + CTA secundário âncora serviços; imagem da recepção com clip-path diagonal dourado
Barra marquee animada — rolagem horizontal infinita: LUMINA · ODONTOLOGIA ESTÉTICA · HARMONIZAÇÃO OROFACIAL · REALENGO RJ · ATENDIMENTO HUMANIZADO · 5 ESPECIALISTAS · ✦
Seção dor e solução — headline emocional "Você merece um atendimento que cuida de você de verdade"; 3 blocos de dor → solução: medo do dentista → ambiente acolhedor; clínica comum → infraestrutura premium; só dente → odonto + estética completa
[Serviços — Numeração grande 01–06] — Clínica Geral · Harmonização Orofacial · Endodontia · Prótese Dentária · Odontopediatria · Ortodontia; cada card abre descrição sucinta com lista de procedimentos incluídos
Seção de encantamento — galeria mosaico assimétrica usando fotos reais enviadas: recepção, sala de espera, cadeira odontológica, resultados antes/depois (clareamento, preenchimento labial, harmonização facial); headline "Um espaço moldado para o seu conforto"
[Sobre/Credenciais — Split 50/50 fixado] — foto da recepção Lumina sticky à esquerda; direita: "Inaugurada em novembro de 2025, fundada pelo Dr. Lucas Mendes Gabri e seus pais. Equipe de 5 dentistas especializados. Infraestrutura diferenciada, atendimento humanizado e personalizado." + counters: 5 Especialistas · 5 Especialidades · 5★ Google · Nov/2025
[Depoimentos — Carrossel fade + Google] — nota 5.0 com logo Google oficial à esquerda; 10 depoimentos reais em rotação automática; nome + estrelas + texto
Convênios aceitos — seção compacta com logos/nomes: Amil · Unimed · Bradesco · MetLife · Odontoprev
FAQ — 8 perguntas frequentes em acordeão: atendimento crianças, convênios, horário, harmonização orofacial, dor no tratamento, como agendar, estética corporal, localização/estacionamento
Localização — endereço completo + mapa iframe Google + botão "Como Chegar" (link rota) + telefone + WhatsApp + Instagram
CTA com formulário — headline "Agende sua consulta hoje" + formulário (nome, telefone, serviço de interesse, mensagem) + botão WhatsApp direto lateral
Rodapé + Créditos

RODAPÉ — coluna de contato (com ícones, todos clicáveis):

Lumina Odontologia Estética → link Google Business: https://share.google/27CWbQ4zzTNDSJMwu
Endereço → link rota Google Maps: https://www.google.com/maps/dir//Lumina+Odontologia...
Telefone: (21) 3449-8104
WhatsApp: (21) 97350-3293
Instagram: @clinica_lumina → https://www.instagram.com/clinica_lumina/

CRÉDITOS:
Esquerda: © Lumina Odontologia Estética 2026
Direita: Desenvolvido por AG5 Agência (AG5 em #C9A96E, link para www.ag5agencia.com.br)
DIRETRIZES ANTI-GENÉRICO:

Sem hero centralizado com fundo escuro e texto branco genérico
Sem fade-up igual em todas as seções
Sem paleta azul + branco + cinza
Sem 3 colunas de ícone + título + texto

QUALIDADE DE CÓDIGO:

HTML semântico + IDs de ancoragem em todas as seções
Variáveis CSS no :root para cores, fontes e espaçamentos
Mobile-first com media queries
IntersectionObserver para animações de scroll (nunca scroll event direto)
will-change: transform, @media (prefers-reduced-motion), lazy loading
Formulário com validação real

INCLUIR:

Barra animada horizontal com nome / serviços / área de atendimento
Seção de avaliações Google com logo oficial e cards animados


1 — MÍDIAS PRINCIPAIS
ItemStatusDescrição✅ Foto da fachada/entradaDisponívelImagem 4 — fachada do prédio amarelo na Av. Santa Cruz (uso contextual apenas, pois não identifica claramente a Lumina)✅ Logo painel recepçãoDisponívelImagem 1 — placa iluminada com backlight dourado na parede de ripas de madeira✅ Foto recepçãoDisponívelImagem 8 — balcão branco arredondado, pendentes dourados, logo iluminada ao fundo✅ Sala de esperaDisponívelImagem 9 — poltronas boucle bege, tapete marrom, quadros mármore, ripas de madeira✅ Consultório/sala clínicaDisponívelImagem 7 — cadeira odontológica com logo Lumina dourada na janela de vidro ao fundo✅ Sala de atendimento/escritórioDisponívelImagem 6 — mesa madeira, cadeiras cinza, painel 3D branco, TV, acabamento black frame✅ Antes/depois clareamentoDisponívelImagem 2 — comparativo clareamento dental lado a lado✅ Antes/depois harmonização facialDisponívelImagem 5 — comparativo harmonização com texto "Aqueles sinais que te incomodam somem"✅ Antes/depois preenchimento labialDisponívelImagem 3 — comparativo preenchimento labial superior/inferior✅ Logo desktopDisponívelImagem 10 — logo vetorial fundo branco: ícone dente+rosto dourado + "LUMINA / ODONTOLOGIA ESTÉTICA" em cinza❌ Fotos da equipeAusenteNenhuma foto de dentistas/equipe❌ Foto do Dr. Lucas Mendes GabriAusenteFundador não fotografado❌ Fotos de vídeo (thumbnails)Ausente8 vídeos mencionados, sem arquivos enviados
Total recebido: 10 imagens estáticas + 1 logo = 11 arquivos
Total declarado: 30 fotos + 8 vídeos = 38 mídias
Pendência: 19 fotos + 8 vídeos não enviados

2 — INFORMAÇÕES DA EMPRESA
Nome: Lumina Odontologia Estética
CNPJ: 65.699.400/0001-82
Nicho: Odontologia Estética + Harmonização Orofacial + Estética Corporal
Abertura: Novembro de 2025
Descrição institucional: Clínica odontológica e estética localizada em Realengo, Rio de Janeiro, fundada pelo Dr. Lucas Mendes Gabri e seus pais. Atende crianças e adultos com foco em atendimento humanizado, personalizado e na experiência do paciente. Conta com infraestrutura diferenciada com sala voltada para procedimentos estéticos corporais.
Proposta de valor: Ambiente que faz o paciente se sentir em casa, com qualidade premium e atendimento integral (do sorriso à harmonização facial e corporal).
Público-alvo: Adultos e crianças da região de Realengo e adjacências (Bangu, Sulacap, Taquara, Barra da Tijuca, Padre Miguel) que buscam atendimento odontológico completo e estética facial/corporal num só lugar.
Equipe: 5 dentistas especializados (nomes não informados, exceto Dr. Lucas Mendes Gabri CRO-RJ 51506 e Dr. Lindsey — citado em avaliações)
Principais especialidades: Clínica Geral, Harmonização Orofacial, Endodontia, Prótese Dentária, Odontopediatria, Ortodontia
Lista completa de serviços:
Limpeza Dentária, Restauração, Facetas em Resina, Facetas em Porcelana, Tratamento de Canal, Clareamento Dentário, Extrações Dentárias, Cirurgia de Siso, Frenectomia, Próteses, Implantes, Aparelho Ortodôntico, Atendimento Pediátrico, Preenchimento Labial, Botox, Preenchimento Facial, Bioestimuladores de Colágeno, Microagulhamento, Limpeza de Pele, Gerenciamento de Pele, Drenagem Linfática, Ultrassom Microfocado, Laser Lavieen, Harmonização Corporal, Massagem Modeladora, Peeling, Revitalização Facial, Fios de PDO
Convênios: Amil, Unimed, Bradesco, MetLife, Odontoprev
Diferenciais: Atendimento humanizado e personalizado; aferição de pressão antes de procedimentos; recepção com café e bolo; infraestrutura de alto padrão; equipe carismática e empática; único espaço na região com odonto + estética facial + estética corporal; em breve novo espaço de estética corporal e coworking
Endereço: Av. de Santa Cruz, 696 — Terceiro Andar — Realengo, Rio de Janeiro — RJ, CEP 21710-232
Telefone: (21) 3449-8104
WhatsApp: (21) 97350-3293
Instagram: https://www.instagram.com/clinica_lumina/
Bio.site: https://bio.site/luminaodontologia
Google Business: https://share.google/27CWbQ4zzTNDSJMwu
Horário: Segunda a Sexta, 9h às 18h

3 — AVALIAÇÕES
Plataforma: Google
Total de avaliações: 15
Nota média: ⭐ 5,0

Ana Carolina Andrade — 3 meses atrás — ⭐⭐⭐⭐⭐
Experiência muito diferenciada. Dr. Lucas me atendeu final do ano passado, fechou meu dente depois que fiz canal e ficou perfeito! Fora que cheguei na recepção e fiquei esperando o atendimento comendo bolo 😂 Mas além disso, antes do problema com esse dente eu já tinha feito botox com ele. Simplesmente perfeito. Não senti nada e durou muito, na verdade ainda estou com o efeito do botox e já se passou um tempo considerável. Um mágico kkkk
Thayna Rezende — uma semana atrás — ⭐⭐⭐⭐⭐
Clínica diferente de todas que vi entre Realengo, Padre Miguel e Bangu. Lugar maravilhoso, aconchegante. Todos os Doutores com o mesmo padrão de atendimento, carismáticos, empáticos e maravilhosos. Atendimento desde a recepção aos Doutores excepcional. Somos servidos com água, café 😅.. Não tenho palavras pra descrever o quão maravilhoso é essa clínica. Fiz Botox e manutenção da faceta com o Dr. Lucas e amei o resultado, indico de olhos fechados. Lugar e Doutores diferenciados. Parabéns a clínica e aos profissionais 🥰❤️
Eduarda Avila — uma semana atrás — ⭐⭐⭐⭐⭐
Experiência incrível e diferente de tudo! Desde a recepção ao atendimento atencioso, gentil e paciente do Dr Lucas. Alívio em sentir aquela sensação de segurança por estar em boas mãos com um profissional tão experiente e qualificado no que faz. Faço todos os meus procedimentos lá, do odontológico ao estético 💝💝✨✨
Janaína Krustes — uma semana atrás — ⭐⭐⭐⭐⭐
Eu tive e ainda estou tendo uma ótima experiência com a Clínica e equipe, cheguei com muitos traumas e com jeitinho e carinho eles super me conquistaram. Enfim, ainda temos muitas coisas para viver juntos 😍 Obrigada pela compreensão e paciência 💙 Desejo só coisas boas e muito boa sorte Dr. Lucas 💙
marcos pestana — uma semana atrás — ⭐⭐⭐⭐⭐
Show de bilheteria 👏👏👏 Ótima recepção e um excelente atendimento pelos profissionais Dr Lindsey e Dr Lucas. Local aconchegante e um delicioso cafezinho ☕
PAULO GARCIA — uma semana atrás — ⭐⭐⭐⭐⭐
Ambiente super requintado com atendimento nota 1.000, parabéns a equipe Lumina
Norma Representações descartáveis — uma semana atrás — ⭐⭐⭐⭐⭐
Muiito boa!!! Atendimento vip, profissionais super atenciosos, meu esposo fez uma extração, e pude entrar com ele, e primeira vez em todos os dentistas, meu esposo teve a pressão aferida. Poxa achei super profissional!!! Parabéns equipe da Lumina!!!
Marcos Paulo Lima — 2 dias atrás — ⭐⭐⭐⭐⭐
Experiência maravilhosa com o Dr. Lindsey, atencioso, paciente, bom trabalho!
Nathália Monaco — 3 meses atrás — ⭐⭐⭐⭐⭐
Clínica impecável, atendimento acolhedor e diferenciado. Amei meu atendimento, recomendo!
Derma Clinique by Ana Paula — 6 meses atrás — ⭐⭐⭐⭐⭐
Dr Lucas, profissional incrível! Pessoa maravilhosa. Sucesso com a sua Clínica ✨✨✨✨✨

4 — ANÁLISE DE BRANDING
Nicho: Odontologia Estética + Harmonização Orofacial + Estética Corporal
Posicionamento: Médio-Premium — sofisticação acessível à comunidade local
Território de marca: Clínica boutique de bairro com alma premium
Estilo visual predominante: Luxury Wellness Acolhedor
Fusão de minimalismo elegante (madeira ripada, branco, luz linear) com toques de luxo quente (ouro, boucle, mármore decorativo). Não é a frieza clínica branca padrão — é a clínica que parece um spa exclusivo.
Paleta de cores recomendada:
CorHexUsoOuro Lumina#C9A96ECor principal — títulos, CTAs, destaques, íconesCreme Off-White#F5F0E8Backgrounds secundários, seções alternadasPreto Refinado#1A1A1ATítulos principais, textos fortesGrafite#2C2C2CTextos de corpoNeutro Prata#8E8E8ETextos secundários, legendasBranco Puro#FFFFFFBackgrounds primários, cardsMadeira Quente#8B6914Acento complementar (uso pontual)
Extraída diretamente das imagens enviadas: placa dourada backlit, madeira ripada moka, poltronas boucle, balcão branco, quadros mármore.
Direção estética: Editorial médico-luxo. Tipografia com serifa (Playfair Display) para títulos que evocam sofisticação e tradição. Sans-serif moderna (DM Sans) para legibilidade. Proporções assimétricas, uso de ouro como elemento de distinção — nunca como excesso.
Sensação de marca: "Você está em boas mãos e num lugar especial." Segurança + beleza + acolhimento. O paciente sai do estado de ansiedade pré-dentista para o estado de antecipação positiva.
Tom de voz: Caloroso, confiante, sem arrogância. Humanizado. Próximo da comunidade.
Referências de marcas premium do mesmo nicho:

Clínica Sorriso Perfeito (SP) — estética editorial, ouro e branco
OralDesign Estética Dentária (RJ) — luxury branding, fotografia de resultado
La Bouche Clinic (Lisboa) — harmonização orofacial com branding de moda
OdontoPremium Brasil — atendimento boutique, uso de madeira e mármore


5 — CHECKLIST DE PENDÊNCIAS
MÍDIAS:

 19 fotos do acervo total declarado (30) não foram enviadas
 8 vídeos declarados não foram enviados — essenciais para seção de galeria e hero
 Fotos de equipe (5 dentistas) — crítico para seção "Nossa Equipe"
 Foto profissional do Dr. Lucas Mendes Gabri — fundador e principal referência da clínica
 Foto do Dr. Lindsey (citado em múltiplas avaliações) — sem sobrenome informado
 Fotos da sala de estética corporal (mencionada no texto)
 Foto da área/lounge de café/recepção com bolo (citado em avaliações — diferencial forte)

INFORMAÇÕES:

 Nomes completos e CRO de todos os 5 dentistas (apenas Dr. Lucas Mendes Gabri CRO-RJ 51506 informado)
 Sobrenome e CRO do Dr. Lindsey
 Email da clínica (não informado)
 Se há estacionamento no local
 Horário de sábado (apenas seg-sex informado)
 Previsão de inauguração do espaço de estética corporal e coworking
 Site próprio (não possui ainda)

LINKS:

 Facebook (não informado)
 LinkedIn (não informado)
 TikTok (não informado — verificar se existe)

DOCUMENTAÇÃO:

 CRO da clínica (PJ)
 CNES (Cadastro Nacional de Estabelecimento de Saúde)
 Alvará sanitário


6 — ANÁLISE DE REFERÊNCIAS WEBFLOW
TEMPLATE 1 — Klaas Dentist Template
URL: https://klaas-dentist-template.webflow.io/
HERO: Proporção 50/50 com hero dividido em coluna texto esquerda e galeria de 3 fotos sobrepostas à direita. Título "Excellent dental services" em serif grande ~5vw, com subtítulo menor e CTA único "Explore". Elemento diferenciador: grade de 3 imagens clínicas sobrepostas com small gap. Animação de entrada: título desliza de cima para baixo, imagens escalam de 0.9 para 1.
NAV: Fundo branco sólido sempre visível. Links com dropdown animado (altura de 0 para auto). Hover com cor de destaque da marca. CTA "Book online" em destaque no canto direito.
TIPOGRAFIA: Títulos em Serif (similar a Playfair), corpo em sans-serif clean. Títulos ~5–7vw no desktop. Numeração de categorias como elemento visual forte.
CORES (estrutura adaptável): Fundo branco, texto escuro, accent color variável — estrutura que aceita bem a paleta ouro/creme da Lumina.
SERVIÇOS/CARDS: 3 categorias principais em layout de 3 colunas, cada uma com imagem, título, lista de tratamentos e link. Sem ícone genérico — usa fotos reais dos procedimentos. Hover revela overlay sutil.
ANIMAÇÕES: Itens de tratamento → de opacity:0 translateY(20px) para opacity:1 translateY(0) em 400ms, ease-out, trigger: scroll, stagger: 100ms. Categorias → fade-in sequencial ao entrar na viewport.
MICRO-INTERAÇÕES: Hover nos links de tratamento adiciona linha dourada deslizante por baixo. CTA button com fill reverse no hover.
ELEMENTOS DECORATIVOS: Numeração lateral "1", "2", "3" como separador de seções. Linha fina horizontal separando seções. Sem blobs ou formas excessivas — minimalismo clínico.
RESUMO CONSTRUTIVO: O Klaas entrega o padrão mais limpo e sofisticado do nicho dental no Webflow. Para recriar o estilo na Lumina: manter a estrutura de 3 grandes categorias de especialidade com imagem dominante, substituir a paleta neutra pelo ouro #C9A96E, usar Playfair Display nos títulos, e adicionar a numeração grande como separador de serviços. O diferencial da Lumina é incluir a dimensão "estética" visualmente — os antes/depois devem aparecer como prova social visual antes dos depoimentos textuais.

TEMPLATE 2 — Dental 128
URL: https://dental-128.webflow.io/
HERO: Proporção 55/45 — texto e formulário de agendamento à esquerda, imagem da paciente sorrindo à direita com leve sobreposição. Badge "Award-Winning Dentist" como social proof no canto superior. Título em serif ~5vw, subtítulo menor, dois CTAs: "Book Consultation" + nota do Google inline. Elemento diferenciador: formulário de agendamento diretamente no hero, eliminando fricção.
NAV: Transparente sobre hero, muda para branco sólido ao scroll com transição suave de 300ms. Links com hover sublinhado. Contato e CTA sempre visíveis no canto direito.
TIPOGRAFIA: Títulos em serif weight 700, corpo em sans-serif leve weight 300/400. Numeração ordinal (01, 02, 03) como elemento visual nos serviços.
CORES (estrutura adaptável): Paleta original verde médico — completamente substituível pela paleta ouro da Lumina sem perda estrutural.
SERVIÇOS/CARDS: Lista numerada com 01/02/03 em cor destaque grande (~80px), título do serviço, descrição em 1–2 linhas, link "Learn More", foto lateral do serviço. Layout em linha única com separadores — exatamente o modelo F escolhido.
ANIMAÇÕES: Números serviços → de opacity:0 translateX(-40px) para opacity:1 translateX(0) em 500ms, ease-out, trigger: IntersectionObserver, stagger: 150ms entre itens. Foto de serviço → escala de 0.95 para 1 ao entrar na viewport em 400ms.
MICRO-INTERAÇÕES: Cards de equipe com overlay de informações ao hover. Botões com border animado no hover.
ELEMENTOS DECORATIVOS: Linha fina separando seções de serviço. Badge de avaliação Google inline. Foto do paciente com leve sombra drop-shadow.
RESUMO CONSTRUTIVO: O Dental 128 oferece a estrutura de numeração grande (01–06) que será usada na Lumina para serviços. Para recriar: manter a coluna esquerda com número grande em #C9A96E (80–100px, Playfair Display), título do serviço à direita, separador horizontal fino em #C9A96E entre itens, e foto do procedimento floating à extrema direita. Adicionar o diferencial Lumina: cada número ao hover abre suavemente uma lista de procedimentos incluídos naquela especialidade. A seção de equipe do Dental 128 (grid com hover revelando nome/cargo) é a estrutura ideal para quando as fotos da equipe forem enviadas.

7 — SISTEMA DE VARIAÇÃO DE LAYOUT
Escolhas registradas:
CategoriaEscolhaJustificativaHERO✅ C) Editorial + H) Foto recepção com luz douradaTipografia dominante cria identidade premium diferenciada do padrão clínico; foto real da Lumina reforça credibilidade imediataSERVIÇOS✅ F) Numeração grande (01–06)Organiza as 6 especialidades com hierarquia visual clara; ouro nos números cria identidade; evita grade genérica de íconesDEPOIMENTOS✅ E) Carrossel fade + nota Google visível10 avaliações reais com nota 5.0 são ativo fortíssimo — manter Google sempre visível maximiza prova socialSOBRE/CREDENCIAIS✅ D) Split 50/50 com imagem fixadaFoto da recepção Lumina é impactante — mantê-la fixada enquanto o texto rola cria experiência premium; counters reforçam credenciais objetivas