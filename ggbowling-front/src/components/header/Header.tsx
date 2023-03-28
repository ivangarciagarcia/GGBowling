import './header.scss';


export const Header = () => {
  return (
    <header className="header">
      
      <div className='logo'><img src={`${process.env.PUBLIC_URL + '/img/logo.png'}`} alt="" height={'100px'} width={'100px'}/></div>
    </header>
  );
};
