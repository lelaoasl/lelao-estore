import React, { Component } from 'react';

import MenuItem from '../menu-item.component';

import './directory.styles.scss';

class Directory extends Component {

    constructor() {
        super();

        this.state = {
           sections: [
            {
              title: 'clothes',
              imageUrl: 'https://www.dhresource.com/0x0s/f2-albu-g7-M01-16-79-rBVaSVpUoOGAempYAAd8OhFg-TA538.jpg/sports-badminton-clothes-table-tennis-sets.jpg',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'watches',
              imageUrl: 'https://s22652.pcdn.co/sv-SE/blog/wp-content/uploads/2019/08/forerunner645-music.jpg',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'bikes',
              imageUrl: 'https://http2.mlstatic.com/bicicleta-aro-29-dropp-bikes-em-aco-21v-marchas-disco-brinde-D_NQ_NP_795688-MLB31070016515_062019-F.jpg',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'acessories',
              imageUrl: 'https://www.actesports.com/media/catalog/product/cache/1/small_image/290x300/9df78eab33525d08d6e5fb8d27136e95/c/7/c7_squeeze_750ml_preto.jpg',
              id: 4,
              linkUrl: 'shop/womens'
            }]  
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} />
                    ))
                }
            </div>
        )
    }

}

export default Directory;
