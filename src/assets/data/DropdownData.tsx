import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

export const dropdownData = [
  {
    key: '선택안함',
    icon: <></>,
  },
  {
    key: 'HTML5',
    icon: (
      <FontAwesomeIcon
        icon={faHtml5}
        style={{ color: '#e26136' }}
      />
    ),
  },
  {
    key: 'CSS3',
    icon: (
      <FontAwesomeIcon
        icon={faCss3Alt}
        style={{ color: '#74C0FC' }}
      />
    ),
  },
  {
    key: 'JavaScript',
    icon: (
      <FontAwesomeIcon
        icon={faJs}
        style={{ color: '#FFD43B' }}
      />
    ),
  },
  {
    key: 'React',
    icon: (
      <FontAwesomeIcon
        icon={faReact}
        style={{ color: '#74C0FC' }}
      />
    ),
  },
];
