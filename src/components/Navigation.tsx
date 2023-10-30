
// Importations de bibliothèques
import styled from 'styled-components';

// Importations d'icônes SVG
import SvgFile from '../assets/svg/Graduation_Cap.svg';
import DashboardIcon from '../assets/svg/dashboard.svg';
import CashIcon from '../assets/svg/cash.svg';
import PencilIcon from '../assets/svg/pencil.svg';
import NotebookIcon from '../assets/svg/notebook.svg';
import DocumentXIcon from '../assets/svg/document-x.svg';
import EqualCircleIcon from '../assets/svg/equal-circle.svg';
import ContactsAltIcon from '../assets/svg/contacts-alt.svg';
import AnnotationIcon from '../assets/svg/annotation.svg';
import LogoutIcon from '../assets/svg/logout.svg';


// Composant stylisé

const StyledNavigation = styled.div`

display: flex;
flex-direction:column;
width: 233px;
margin:21px ;

border-radius: 24px;
background: linear-gradient(0deg, #925FE2 80.26%, rgba(146, 95, 226, 0.00) 143.39%, #E2D4F7 143.39%);

.iconHeader {
    left: 53px;
    position: relative;
    margin: 48px 0;
    width: 128px;
    height: 128px;
    border-radius: 32px;
    background: linear-gradient(180deg, #925FE2 0%, #7042C0 100%);

        .svg{
            position: absolute;
            right: 22.667px;
            top: 21.333px;
            width: 82.667px;
            height: 85.333px;
        }
}

.navigationLink {
    position:relative;
    display: flex;
    flex-direction: column;
    align-items;
    gap: 30px;
    left: 3rem;
    font-weight: 600;
  
      
        .iconLink{
          gap: 16px;
           display: inline-flex;
           align-items: flex-end;

             &:last-child { 
            bottom: 3em;
            position: fixed;
          }
         

                  img{
                    width: 16px;
                    height: 16px;
                  }
                  a{
                    font-size:11px;
                    text-decoration:none;
                  }
      
        
        }

        
}


`;

// Définir un type pour les éléments de la liste
type NavItem = {
    icon: string;
    name: string;
    link: string;
  };

  const IconLink = ({ icon, name, link, isLast }: NavItem & { isLast: boolean }) => (
    <div className={`iconLink ${isLast ? 'last' : ''}`}>
      <img src={icon} alt={`Icon for ${link}`} />
      <a href={link}>{name}</a>
    </div>
  );

export default function Navigation() {

  const list: NavItem[] = [
    {
      icon: DashboardIcon,
      name: 'Dashboard',
      link: '#'
    },
    {
      icon: CashIcon,
      name: 'Payment info',
      link: '#'
    },
    {
      icon: PencilIcon,
      name: 'Registration',
      link: '#'
    },
    {
      icon: NotebookIcon,
      name: 'Courses',
      link: '#'
    },
    {
      icon: DocumentXIcon,
      name: 'Drop Semester',
      link: '#'
    },
    {
      icon: EqualCircleIcon,
      name: 'Result',
      link: '#'
    },
    {
      icon: AnnotationIcon,
      name: 'Notice',
      link: '#'
    },
    {
      icon: ContactsAltIcon,
      name: 'Schedule',
      link: '#'
    },
      {
      icon: LogoutIcon,
      name: 'Schedule',
      link: '#'
    }  
        
      ];
      return (
        <StyledNavigation>
          <div className="iconHeader">
            <img className="svg" src={SvgFile} alt="svgIconStudent" />
          </div>
          <div className="navigationLink">
            {list.map((item, index) => (
              <IconLink key={index} {...item} isLast={index === list.length - 1} />
            ))}
          </div>
        </StyledNavigation>
      );
}


/**
 * Annotations :
 * 
 * Composant IconLink :
 * Création d'un composant IconLink séparé pour encapsuler la logique de rendu d'un lien d'icône. Cela réduit la duplication du code et améliore la lisibilité.
 * Le composant IconLink prend un objet NavItem ainsi qu'une prop isLast pour déterminer si c'est le dernier élément dans la liste.
 * Utilisation de la Prop key :
 *
 * La prop key est maintenue pour chaque élément de la liste. Toutefois, il est recommandé d'utiliser une clé unique stable plutôt que l'index du tableau si possible.
 * Classe Conditionnelle pour le Dernier Élément :
 *
 * Utilisation d'une classe conditionnelle pour appliquer des styles spécifiques au dernier élément. La prop isLast est utilisée pour déterminer si la classe last doit être appliquée.
 * Dans votre CSS, vous pouvez cibler cette classe avec .iconLink.last.
 * Amélioration de l'Attribut alt :
 *
 * Correction de l'attribut alt pour suivre les meilleures pratiques d'accessibilité.
 * Passage des Props avec Spread :
 * 
 * Utilisation de l'opérateur de décomposition (spread) pour passer toutes les props de item au composant IconLink.
 */