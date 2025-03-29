import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ProductenlijstHome from '../../components/Producten/ProductenlijstHome';
import { producten } from '../../api/producten';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      margin: '1rem'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        margin: '1rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          margin: '7rem 1.75rem',
          textAlign: 'center'
        }}>
          {t('welcome')}
        </h1>

        <img
          srcSet="/logotje-mobile.webp 200w, /logotje.webp 400w"
          sizes="(max-width: 600px) 200px, 380px"
          alt="Logo van feel the taste"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '380px',
            aspectRatio: '1/1',
            objectFit: 'cover'
          }}
          loading="eager"
        />

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          margin: '0.5rem 5rem',
          textAlign: 'center'
        }}>
          {t('accessible_menus')}
        </h2>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          margin: '0.5rem 5rem',
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          {t('main_text')}
        </p>

        <ProductenlijstHome producten={producten} heeftKnop={true} m={4} />

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          margin: '0.5rem 5rem',
          textAlign: 'center'
        }}>
          {t('questions_title')}
        </h2>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          margin: '0.5rem 5rem',
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          {t('questions_text')}
        </p>

        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#1a202c',
            color: 'white',
            width: '275px',
            height: '65px',
            fontSize: '1.25rem',
            margin: '1rem',
            cursor: 'pointer',
            border: 'none',
            borderRadius: '0.375rem',
            transition: 'background-color 0.2s'
          }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4a5568'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1a202c'}>
            {t('contact_button')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;