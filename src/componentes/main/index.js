import './main.css';

const Main = (props) => {
    return (
        <>
            <div className='listadejobs'>
                <div>
                    <img src='/imagens/photosnap.svg' />
                    <p>Photosnap</p>
                    <h1>Desenvolvedor Senior Frontend</h1>
                    <p>1 Dia atrás - Tempo Integral - Remoto</p>
                </div>
            </div>
            <div className='listadejobs'>
                <div>
                    <img src='/imagens/manage.svg' />
                    <p>Manage</p>
                    <h1>Desenvolvedor Fullstack</h1>
                    <p>1 Dia atrás - Meio Turno - Remoto</p>
                </div>
            </div>
            <div className='listadejobs'>
                <div>
                    <img src='/imagens/account.svg' />
                    <p>Account</p>
                    <h1>Desenvolvedor Frontend Junior</h1>
                    <p>2 Dias atrás - Tempo Integral - Presencial</p>
                </div>
            </div>
            <div className='listadejobs'>
                <div>
                    <img src='/imagens/myhome.svg' />
                    <p>MyHome</p>
                    <h1>Desenvolvedor Frontend Junior</h1>
                    <p>5 Dias atrás - Tempo Integral - Internacional/EUA</p>
                </div>
            </div>
        </>
    );
}

export default Main;
