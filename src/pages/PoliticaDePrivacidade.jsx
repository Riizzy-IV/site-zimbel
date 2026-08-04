import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const gridPad = 'max(min(160px, 12vw), calc((100vw - 1312px) / 2))'

const SECOES = [
  {
    titulo: '1. Aceite',
    paragrafos: [
      'Ao acessar o site, preencher formulários, solicitar atendimento, cadastrar-se em nossos canais ou utilizar qualquer serviço disponibilizado pela Zimbel Incorporadora, o usuário declara que leu, compreendeu e concorda com esta Política de Privacidade.',
      'O consentimento poderá ser revogado a qualquer momento, mediante solicitação pelos canais oficiais de atendimento da Zimbel Incorporadora. A revogação poderá limitar, suspender ou impedir o acesso a determinadas funcionalidades ou serviços que dependam do tratamento de dados pessoais.',
    ],
  },
  {
    titulo: '2. Definições',
    paragrafos: [
      'Para fins desta Política, consideram-se:',
      'Dados Pessoais: informações relacionadas a uma pessoa natural identificada ou identificável, como nome, CPF, telefone, e-mail, endereço, data de nascimento, entre outros.',
      'Dados Pessoais Sensíveis: dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, dados referentes à saúde, vida sexual, dados genéticos ou biométricos, quando vinculados a uma pessoa natural.',
      'Tratamento de Dados: toda operação realizada com dados pessoais, incluindo coleta, armazenamento, utilização, compartilhamento, transmissão, exclusão, classificação, acesso, reprodução, arquivamento ou modificação.',
      'Controlador: a Zimbel Incorporadora, responsável pelas decisões referentes ao tratamento dos dados pessoais.',
      'Operador: pessoa física ou jurídica que realiza o tratamento de dados pessoais em nome da Zimbel Incorporadora.',
      'Titular dos Dados: pessoa natural a quem se referem os dados pessoais tratados.',
    ],
  },
  {
    titulo: '3. Sobre os dados fornecidos à Zimbel Incorporadora',
    paragrafos: [
      'A Zimbel Incorporadora poderá coletar dados pessoais fornecidos voluntariamente pelo usuário ao preencher formulários, solicitar informações sobre empreendimentos, realizar cadastro, entrar em contato com nossos canais de atendimento ou interagir com nossas páginas.',
      'Também poderemos coletar informações automaticamente durante a navegação, como endereço IP, data e horário de acesso, dispositivo utilizado, navegador, localização aproximada, páginas visitadas, tempo de permanência e dados relacionados à experiência de navegação.',
      'Entre os dados que poderão ser coletados estão:',
    ],
    lista: [
      'Nome completo',
      'CPF ou CNPJ',
      'E-mail',
      'Telefone',
      'Cidade e estado',
      'Dados de interesse imobiliário',
      'Informações fornecidas em formulários',
      'Dados de navegação',
      'Registros de atendimento',
      'Preferências de contato e comunicação',
    ],
  },
  {
    titulo: '4. Como os dados pessoais são utilizados',
    paragrafos: ['Os dados pessoais coletados pela Zimbel Incorporadora poderão ser utilizados para as seguintes finalidades:'],
    lista: [
      'Realizar atendimento ao usuário ou cliente',
      'Enviar informações sobre empreendimentos, lançamentos, ofertas e oportunidades comerciais',
      'Agendar visitas, reuniões ou atendimentos',
      'Responder dúvidas, solicitações e manifestações',
      'Melhorar a experiência de navegação no site',
      'Personalizar comunicações e conteúdos',
      'Realizar campanhas de marketing, remarketing e relacionamento',
      'Cumprir obrigações legais, regulatórias ou contratuais',
      'Prevenir fraudes e garantir a segurança dos nossos canais',
      'Realizar análises estatísticas, estudos de mercado e relatórios internos',
      'Aprimorar produtos, serviços, processos e canais digitais',
    ],
    paragrafosFinais: [
      'A Zimbel Incorporadora poderá entrar em contato com o usuário por telefone, e-mail, WhatsApp, SMS, chat, notificações, redes sociais ou outros canais informados pelo próprio usuário.',
    ],
  },
  {
    titulo: '5. Links de terceiros',
    paragrafos: [
      'O site da Zimbel Incorporadora poderá conter links que direcionam para sites, plataformas ou serviços de terceiros.',
      'A Zimbel Incorporadora não se responsabiliza pelas práticas de privacidade, segurança, conteúdo ou funcionamento de sites externos. Recomendamos que o usuário leia atentamente as políticas de privacidade e termos de uso desses terceiros antes de fornecer qualquer dado pessoal.',
    ],
  },
  {
    titulo: '6. Cookies e ferramentas de rastreamento',
    paragrafos: [
      'A Zimbel Incorporadora poderá utilizar cookies e tecnologias semelhantes para melhorar a experiência do usuário, compreender o comportamento de navegação, medir a eficiência de campanhas, personalizar conteúdos e aprimorar nossos serviços.',
      'Os cookies podem ser classificados como:',
      'Cookies necessários: essenciais para o funcionamento do site e de suas funcionalidades básicas.',
      'Cookies funcionais: permitem lembrar preferências do usuário e melhorar a navegação.',
      'Cookies de desempenho e análise: ajudam a compreender como os usuários interagem com o site.',
      'Cookies de marketing: utilizados para direcionamento de publicidade, mensuração de campanhas e personalização de ofertas.',
      'O usuário poderá gerenciar suas preferências de cookies por meio das configurações do navegador ou de ferramentas disponibilizadas no próprio site, quando aplicável. A desativação de determinados cookies poderá comprometer algumas funcionalidades da navegação.',
    ],
  },
  {
    titulo: '7. Período de retenção',
    paragrafos: [
      'A Zimbel Incorporadora manterá os dados pessoais pelo período necessário para cumprir as finalidades descritas nesta Política, atender obrigações legais ou regulatórias, executar contratos, responder solicitações de autoridades competentes e exercer direitos em processos administrativos, judiciais ou arbitrais.',
      'Quando os dados pessoais não forem mais necessários, a Zimbel Incorporadora poderá eliminá-los, anonimizá-los ou mantê-los apenas nas hipóteses permitidas pela legislação aplicável.',
    ],
  },
  {
    titulo: '8. Compartilhamento de dados pessoais',
    paragrafos: [
      'A Zimbel Incorporadora poderá compartilhar dados pessoais com terceiros quando necessário para a prestação dos serviços, cumprimento de obrigações legais, execução de contratos, atendimento ao cliente, ações comerciais, segurança da informação ou operação de suas atividades.',
      'Os dados poderão ser compartilhados com:',
    ],
    lista: [
      'Empresas parceiras e prestadores de serviço',
      'Operadores de tecnologia, hospedagem, CRM, automação, mídia e atendimento',
      'Instituições financeiras, quando necessário para processos relacionados à aquisição de imóveis',
      'Cartórios, assessorias, correspondentes e consultorias',
      'Empresas do mesmo grupo econômico, quando aplicável',
      'Escritórios de advocacia, auditorias e consultorias',
      'Autoridades públicas, órgãos reguladores ou Poder Judiciário, quando exigido por lei ou ordem competente',
    ],
    paragrafosFinais: [
      'A Zimbel Incorporadora adota medidas razoáveis para garantir que terceiros envolvidos no tratamento dos dados observem padrões adequados de segurança e confidencialidade.',
    ],
  },
  {
    titulo: '9. Segurança das informações',
    paragrafos: [
      'A Zimbel Incorporadora emprega medidas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, perda, destruição, alteração, divulgação indevida ou qualquer forma de tratamento inadequado.',
      'Entre as medidas adotadas, podem estar:',
    ],
    lista: [
      'Controle de acesso a informações',
      'Uso de ambientes seguros de armazenamento',
      'Monitoramento de sistemas',
      'Restrição de acesso a pessoas autorizadas',
      'Adoção de práticas de segurança da informação',
      'Treinamento e orientação de equipes',
      'Utilização de ferramentas tecnológicas compatíveis com os riscos envolvidos',
    ],
    paragrafosFinais: [
      'Apesar dos esforços adotados, nenhum sistema é completamente imune a incidentes de segurança. Caso ocorra algum incidente relevante, a Zimbel Incorporadora adotará as providências cabíveis, conforme a legislação aplicável.',
    ],
  },
  {
    titulo: '10. Direitos dos titulares',
    paragrafos: ['Nos termos da Lei Geral de Proteção de Dados Pessoais, o titular poderá solicitar à Zimbel Incorporadora:'],
    lista: [
      'Confirmação da existência de tratamento de dados',
      'Acesso aos dados pessoais',
      'Correção de dados incompletos, inexatos ou desatualizados',
      'Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade',
      'Portabilidade dos dados, quando aplicável',
      'Informações sobre compartilhamento de dados',
      'Revogação do consentimento',
      'Eliminação dos dados tratados com base no consentimento, quando cabível',
      'Revisão de decisões automatizadas, quando aplicável',
    ],
    paragrafosFinais: [
      'As solicitações poderão ser feitas pelos canais oficiais de atendimento da Zimbel Incorporadora. Para proteger a segurança do titular, poderemos solicitar informações adicionais para confirmação de identidade antes de atender determinadas requisições.',
    ],
  },
  {
    titulo: '11. Responsabilidades e boas práticas dos usuários',
    paragrafos: [
      'O usuário também é responsável por adotar boas práticas de segurança ao utilizar os canais da Zimbel Incorporadora.',
      'Recomendamos que o usuário:',
    ],
    lista: [
      'Forneça informações verdadeiras, completas e atualizadas',
      'Não compartilhe senhas, códigos ou dados de acesso com terceiros',
      'Mantenha dispositivos, navegadores e sistemas atualizados',
      'Utilize redes seguras sempre que possível',
      'Tenha cuidado com mensagens, links ou contatos suspeitos',
      'Comunique a Zimbel Incorporadora caso identifique uso indevido de seus dados ou qualquer situação de risco',
    ],
  },
  {
    titulo: '12. Central de atendimento',
    paragrafos: [
      'Em caso de dúvidas, solicitações, reclamações ou pedidos relacionados a dados pessoais, o usuário poderá entrar em contato com a Zimbel Incorporadora por meio dos canais oficiais de atendimento disponibilizados em seu site, páginas comerciais ou materiais institucionais.',
    ],
  },
  {
    titulo: '13. Atualização desta Política de Privacidade',
    paragrafos: [
      'A Zimbel Incorporadora poderá atualizar esta Política de Privacidade a qualquer momento, para refletir alterações legais, regulatórias, operacionais, tecnológicas ou comerciais.',
      'Recomendamos que o usuário consulte esta página periodicamente para acompanhar eventuais mudanças. A continuidade de uso dos canais da Zimbel Incorporadora após a atualização desta Política será interpretada como ciência das novas condições.',
    ],
  },
  {
    titulo: '14. Legislação aplicável e foro',
    paragrafos: [
      'Esta Política de Privacidade será regida pelas leis da República Federativa do Brasil, especialmente pela Lei Geral de Proteção de Dados Pessoais.',
      'Eventuais controvérsias relacionadas a esta Política serão solucionadas conforme a legislação brasileira aplicável, observadas as regras de competência previstas em lei.',
    ],
  },
]

export default function PoliticaDePrivacidade() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Header />

      <main className="bg-white" style={{ paddingTop: '48px', paddingBottom: '96px' }}>
        <div style={{ paddingLeft: gridPad, paddingRight: gridPad }}>

          {/* Breadcrumb */}
          <div className="flex flex-col gap-3" style={{ marginBottom: '32px' }}>
            <div className="flex items-center gap-7 flex-wrap">
              <div className="flex items-center gap-2.5">
                <img src="/icon/vantagens.svg" alt="" style={{ width: '18px', height: '17px', objectFit: 'contain' }} />
                <span className="text-[#494c4f] text-[13px] font-semibold uppercase tracking-wide">
                  Política de privacidade
                </span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#ca4080] shrink-0" />
              <span className="text-[#a7a7a7] text-[13px] font-semibold uppercase tracking-wide">
                Zimbel Incorporadora
              </span>
            </div>
            <div className="w-full h-px bg-[#e3e3e3]" />
          </div>

          {/* Título */}
          <div className="flex flex-col gap-1.5" style={{ marginBottom: '40px' }}>
            <h1 className="text-[#5b0a28] font-extrabold uppercase leading-tight" style={{ fontSize: 'clamp(26px, 3.4vw, 40px)' }}>
              Política de Privacidade
            </h1>
            <p className="text-[#a7a7a7] text-[16px] font-semibold">
              Última atualização: 24/04/2025
            </p>
          </div>

          {/* Corpo do texto */}
          <div className="flex flex-col gap-4 text-[#494c4f] text-[16px] leading-relaxed" style={{ maxWidth: '900px' }}>
            <p>
              A Zimbel Incorporadora valoriza a privacidade, a segurança e a proteção dos dados pessoais de seus usuários, clientes, visitantes e parceiros. Esta Política de Privacidade tem como objetivo explicar, de forma clara e transparente, como coletamos, utilizamos, armazenamos, compartilhamos e protegemos os dados pessoais tratados em nossos canais digitais, incluindo site, formulários, páginas de cadastro, canais de atendimento e demais ambientes relacionados aos nossos serviços.
            </p>
            <p>
              Ao acessar ou utilizar nossos canais, o usuário declara estar ciente das condições descritas nesta Política.
            </p>

            {SECOES.map((secao) => (
              <div key={secao.titulo} className="flex flex-col gap-3" style={{ marginTop: '12px' }}>
                <h2 className="font-extrabold text-[#3d3d3d]" style={{ fontSize: '22px' }}>
                  {secao.titulo}
                </h2>
                {secao.paragrafos.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {secao.lista && (
                  <ul className="flex flex-col gap-1.5" style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                    {secao.lista.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {secao.paragrafosFinais && secao.paragrafosFinais.map((p, i) => (
                  <p key={`final-${i}`}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
