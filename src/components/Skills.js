import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'GJn',
    des: '先日、友達と一緒にMobile Legendsの大会に参加しました。このゲームはモバイルで遊べる5対5のマルチプレイヤーオンラインバトルアリーナ（MOBA）ゲームで、戦略とチームワークが勝利の鍵です。私は普段からMobile Legendsを楽しんでいますが、今回の大会はいつも以上に緊張感がありました', 
    des1: 'halo',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'Ad ad in cillum ut labore irure aliqua. Ex sit dolore ipsum id duis nostrud veniam. Nisi duis ut veniam ut eiusmod occaecat ullamco ullamco. Consequat eu sunt ut elit dolor sint magna magna velit ex. Excepteur occaecat reprehenderit tempor veniam.',
    des1: 'Halo bang',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'Sunt nostrud nulla qui cillum mollit aute anim anim aliqua aute magna tempor. Do culpa culpa excepteur officia ut eu deserunt proident sint non ut do magna minim. Sunt et excepteur tempor culpa irure non exercitation. Amet nostrud ex aute incididunt incididunt ipsum.',
    icon: faJs},
  {
    name: 'ReactJs',
    des: 'Voluptate qui adipisicing dolore pariatur laboris deserunt consectetur reprehenderit. Esse dolor elit ullamco duis quis aliquip fugiat ipsum nisi est et. Nisi ut deserunt excepteur irure aliquip proident ',
    icon: faReact
  },
  {
    name: 'VueJs',
    des: 'Laborum commodo reprehenderit anim sunt est. Aliquip ipsum nisi incididunt enim ex id et sit sint magna. Deserunt minim ullamco aute veniam. Do irure nulla ut quis.',
    icon: faVuejs
  },
  {
    name: 'Laravel',
    des: 'Ullamco incididunt adipisicing laboris ullamco ipsum quis nulla non. Non et irure amet in sint duis Lorem est eiusmod nisi. Aute dolor eiusmod esse et cupidatat ex minim do reprehenderit ut aute. In commodo do consectetur qui occaecat cupidatat sint ullamco dolor tempor ullamco elit.',
    icon: faLaravel
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
              <div className="des1">{value.des1}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

