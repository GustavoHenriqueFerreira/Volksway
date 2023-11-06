import "./style.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Privacidade() {
    return (
        <>
            <Header />
            <main id="privacidade">
                <div className="politica_menu">
                    <p>data da última atualização:</p>
                    <p>09/05/2023</p>
                    <ul>
                        <a href="#p1">
                            <li>sobre esta politica</li>
                        </a>
                        <a href="#p2">
                            <li>a quem se aplica</li>
                        </a>
                        <a href="#p3">
                            <li>quais dados nós coletamos</li>
                        </a>
                        <a href="#p4">
                            <li>para que nós utilizamos seus dados</li>
                        </a>
                        <a href="#p5">
                            <li>com quem seus dados podem ser compartilhados</li>
                        </a>
                        <a href="#p6">
                            <li>prazo de armazenamento</li>
                        </a>
                        <a href="#p7">
                            <li>segurança dos dados</li>
                        </a>
                        <a href="#p8">
                            <li>seus direitos como usuario</li>
                        </a>
                        <a href="#p9">
                            <li>entre em contato conosco</li>
                        </a>
                        <a href="#p10">
                            <li>mudanças nesta politica</li>
                        </a>
                    </ul>
                </div>
                <div className="politicas">
                    <h1>política de privacidade</h1>
                    <ul>
                        <li id="p1">sobre esta politica:</li>
                        <p>
                            A sua privacidade é importante para nós. Esta política de privacidade
                            descreve como a VolksWay coleta, utiliza e protege as informações
                            pessoais que você nos fornece por meio do nosso site. Esta política de
                            privacidade se aplica a todos os usuários do site da VolksWay.
                        </p>
                        <li id="p2">a quem se aplica:</li>
                        <p>
                            Esta Política se aplica a qualquer pessoa que venha a acessar, navegar
                            ou interagir com o site e plataformas de comunicação da VolksWay
                            (“Usuário”), assim como aos dados que a identificam, bem como aos demais
                            dados fornecidos pela pessoa, coletados durante a utilização dos
                            Serviços da VolksWay ou coletados legalmente de terceiros (“Dados
                            Pessoais”).
                        </p>
                        <li id="p3">quais dados nós coletamos:</li>
                        <p>
                            A VolksWay coleta informações pessoais que você nos fornece quando se
                            cadastra em nossa plataforma, como nome, endereço de e-mail, número de
                            telefone e informações sobre seu veículo. Também podemos coletar
                            informações sobre suas interações com nosso site, incluindo dados de
                            navegação e histórico de uso.
                        </p>
                        <li id="p4">para que nós utilizamos seus dados:</li>
                        <p>
                            A VolksWay utiliza as informações coletadas para oferecer serviços
                            personalizados, como promoções e eventos para motoristas,
                            administradores de frota e proprietários de caminhões. Também usamos
                            essas informações para melhorar nossos serviços e garantir que nosso
                            site esteja funcionando corretamente.
                        </p>
                        <li id="p5">com quem seus dados podem ser compartilhados</li>
                        <p>
                            A VolksWay pode compartilhar seus dados com empresas parceiras que nos
                            ajudam a oferecer serviços personalizados para nossos usuários. Também
                            podemos compartilhar informações com autoridades governamentais ou
                            órgãos regulatórios, se necessário.
                        </p>
                        <li id="p6">prazo de armazenamento:</li>
                        <p>
                            A VolksWay armazena suas informações pessoais enquanto for necessário
                            para cumprir as finalidades para as quais foram coletadas, a menos que a
                            lei exija ou permita um prazo de armazenamento mais longo.
                        </p>
                        <li id="p7">segurança dos dados:</li>
                        <p>
                            A VolksWay emprega medidas de segurança técnicas e organizacionais para
                            proteger suas informações pessoais contra acesso não autorizado,
                            alteração ou destruição. No entanto, nenhum método de transmissão pela
                            internet ou armazenamento eletrônico é 100% seguro.
                        </p>
                        <li id="p8">seus direitos como usuario:</li>
                        <p>
                            Você tem o direito de solicitar acesso, correção, exclusão ou restrição
                            do processamento de suas informações pessoais. Você também pode se opor
                            ao processamento de suas informações pessoais ou solicitar a
                            portabilidade de seus dados. Você pode exercer esses direitos entrando
                            em contato conosco através do e-mail meajuda@VolksWay.com.br.
                        </p>
                        <li id="p9">entre em contato conosco:</li>
                        <p>
                            Se você tiver alguma dúvida ou preocupação sobre esta política de
                            privacidade, entre em contato conosco através do e-mail
                            meajuda@VolksWay.com.br.
                        </p>
                        <li id="p10">mudanças nesta politica:</li>
                        <p>
                            A VolksWay pode alterar esta política de privacidade a qualquer momento,
                            a seu exclusivo critério. Todas as alterações entrarão em vigor
                            imediatamente após a publicação no site da VolksWay. É sua
                            responsabilidade revisar esta política de privacidade regularmente para
                            se manter informado sobre as alterações.
                        </p>
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Privacidade;